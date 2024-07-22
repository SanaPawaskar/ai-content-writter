import React, { useState } from 'react'
import "./styles.css"
import LoadingSpinner from "../Startpage/LoadingSpinner"

const {Configuration, OpenAIApi } = require("openai")

function  Content_Calendar() {
  const [isLoading, setIsLoading] = useState(false);
    const [topic, setTopic] = useState("");
    const [textarea, setTextarea] = useState(""); 
    

    const configuration = new Configuration({
        apiKey:'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'
    })
    const openai = new OpenAIApi(configuration);
    const handleSubmit = (event) => {
    event.preventDefault();
    setTextarea(topic);
    setIsLoading(true);
    openai.createCompletion( {
        model:"text-davinci-003",
        prompt: `write  content calendar for a timeframe of 30 days for Social media channels, that
        provides image caption content (not description), 
        caption content and adds personality, and inspires my followers to take action on a given topic or a given brand name ${topic}`,
        temperature:1,
        max_tokens:4000,
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
    <h2>Content Calendar</h2>
    <hr className='line-div-blog'></hr>
    <form className='form-div'>
    <div className='row'>
    <label className='enter-topic-div'>Enter your topic:
     <br></br> <input  className='input-text-area_content'
        type="text" 
        placeholder="Enter the brand name for content calendar creation "
        value={topic}
        onChange={(e) => setTopic(e.target.value)}/>
    </label><br/>
    </div>
    <div>
    Enter only the topic name eg."JW Marritto" and not  "write a Content Calendar for "brand name" "   
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
      <button className='save-button' onClick={downloadTextFile}>Save
 
      </button>
   
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}
export default  Content_Calendar































