import React, { useState } from 'react'
import "./styles.css"
import LoadingSpinner from "../Startpage/LoadingSpinner"
const {Configuration, OpenAIApi } = require("openai")

function  Look() {
  const [isLoading, setIsLoading] = useState(false);
    const [topic, setTopic] = useState("");
    const [textarea, setTextarea] = useState("");
    

    const configuration = new Configuration({
      apiKey:'API_KEY'
    })
    const openai = new OpenAIApi(configuration);
    const handleSubmit = (event) => {
    event.preventDefault();
    setTextarea(topic);
    setIsLoading(true);
    openai.createCompletion( {
        model:"text-davinci-003",
        prompt: `Give result on the given topic ${topic} which is relevant, best, appropriate with unique ideas if needed`,
        temperature:1,
        max_tokens:3000,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      .then((response)=>{{
            setTextarea(`${response.data.choices[0].text}`)
            console.log(`${response.data.choices[0].text}`)
            setIsLoading(false)
        }
      })
  }
 const handleChange = (event) => {
    setTextarea(event.target.value)
  }
  const downloadTextFile = () => {
    const element = document.createElement("a");
    const file = new Blob([textarea], {
          type: "text/plain;charset-utf-8"
        });
        element.href = URL.createObjectURL(file);
    
        element.download = `${topic}.txt`;
      
        document.body.appendChild(element);
        element.click();
  }
  return (
    <div className='content-page_content'>
    <div className='col div'>
    <div className='row div'>
    <div className='col'>
    <h2>Search something </h2>
    <hr className='line-div-blog'></hr>
    <form className='form-div'>
    <div className='row'>
    <label className='enter-topic-div'>Enter your topic:
     <br></br> <input  className='input-text-area_content'
        type="text" 
        placeholder="enter the topic and give a short brief description of the given topic "
        value={topic}
        onChange={(e) => setTopic(e.target.value)}/>
    </label><br/>
    </div>
    <div className='row'>
    <button className=" answer-button-blog_content" type='submit' onClick={handleSubmit}>Submit</button><br/>
    </div>
    </form>
    </div>
    
    <div className='col'>
      <div className='row'>
      {isLoading ? <LoadingSpinner /> :  <textarea className='text-area-answer_content'  value={textarea} onChange={handleChange} />}
      </div>
      <div className='row'>
      <label className='enter-file-div'>File name:
     <br></br> <input  className='input-file-area_content'
        type="text" 
        placeholder=" "
        value={topic}
        onChange={(e) => setTopic(e.target.value)}/>
    </label><br/>
      <button className='save-button' onClick={downloadTextFile}>Save</button>
     
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}
export default Look