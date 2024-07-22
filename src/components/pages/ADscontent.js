import React, { useState } from 'react'
import "./styles.css"
import LoadingSpinner from "../Startpage/LoadingSpinner"
const {Configuration, OpenAIApi } = require("openai")

function  ADscontent() {
  const [isLoading, setIsLoading] = useState(false);
    const [topic, setTopic] = useState("");
    const [textarea, setTextarea] = useState("");
    const [social, setSocial] =useState("");

    const configuration = new Configuration({
        apiKey:'API_KEY'
    })

    const handleChange = (event) => {
      setTextarea(event.target.value)
      setSocial(event.target.value)
    }
    const openai = new OpenAIApi(configuration);
    
  const handleSubmit = (event) => {
    event.preventDefault();
    setTextarea(topic);
    setSocial(social);
    setIsLoading(true);
    openai.createCompletion( {
        model:"text-davinci-003",
        prompt: `Create a Ads content for Social media channels ${social}, that
        provides image caption content (not description), 
        headline and adds personality, and inspires my followers to take action on a given topic or a given brand name ${topic}`,
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
    <div className='content-page_ad'>
    <div className='col div'>
    <div className='row div'>
    <div className='col'>
    <h2>Ads Content</h2>
    <hr className='line-div-blog'></hr>
    <form className='form-div'>
    <div className='row'>
    <label className='enter-topic-div'>Enter your topic:
     <br></br> <input  className='input-text-area_ad'
        type="text" 
        placeholder="enter the brand name for Ads headline and image creation "
        value={topic}
        onChange={(e) => setTopic(e.target.value)}/>
    </label><br/>
    <label className='enter-topic-div'>Enter your targeted Social media:
     <br></br> <input  className='input-text-area_ad'
        type="text" 
        placeholder="enter the Social Media name"
        value={social}
        onChange={(e) => setSocial(e.target.value)}/>
    </label><br/>
    </div>
    <div className='row'>
    <button className=" answer-button-blog_ad" type='submit' onClick={handleSubmit}>Submit</button><br/>
    </div>
    </form>
    </div>
    
    <div className='col'>
      <div className='row'>
      {isLoading ? <LoadingSpinner /> :<textarea className='text-area-answer_ad'  value={textarea} onChange={handleChange} />}
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

export default  ADscontent
