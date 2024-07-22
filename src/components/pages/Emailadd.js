import React, { useState } from 'react'
import "./styles.css"
import LoadingSpinner from "../Startpage/LoadingSpinner"
const {Configuration, OpenAIApi } = require("openai")

function  Emailadd() {
  const [isLoading, setIsLoading] = useState(false);
    const [topic, setTopic] = useState("");
    const [textarea, setTextarea] = useState("");
    const [sub,setSub]= useState("");
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
        prompt: `Draft a mail on the given topic  ${topic} and  the (purpose) subject ${sub} is,which will include Subject Line ,Formal greeting,Body copy, Closing phrase,catchy informative concise to the point impressive email for marketing, sales, engagement`,
        temperature: 1,
        max_tokens: 1000,
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
    <h2>Email</h2>
    <hr className='line-div-blog'></hr>
    <form className='form-div'>
    <div className='row'>
    <label className='enter-topic-div'>Enter your topic for mail:
     <br></br> <input  className='input-text-area_content'
        type="text" 
        placeholder=" Enter Topic for mail "
        value={topic}
        onChange={(e) => setTopic(e.target.value)}/>
    </label><br/>
    <label className='enter-topic-div'>Enter Subject for mail:
     <br></br> <input  className='input-text-area_content'
        type="text" 
        placeholder="Subject for mail "
        value={sub}
        onChange={(e) => setSub(e.target.value)}/>
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
      <button className='save-button' onClick={downloadTextFile}>Save</button>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}
export default  Emailadd