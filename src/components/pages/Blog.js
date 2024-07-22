import React, { useState } from 'react'
import "./styles.css"
import LoadingSpinner from "../Startpage/LoadingSpinner"
const { Configuration, OpenAIApi } = require("openai")

function Blog() {
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
    openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Write a precised, smart, informative, professional and outstanding unique blog for ${topic}`,
      temperature:1,
      max_tokens:1500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
      .then((response) => {
        {
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
    <div className='content-page'>
      <div className='col div'>
        <div className='row div'>
          <div className='col'>
            <h2>BLOGS</h2>
            <hr className='line-div-blog'></hr>
            <form className='form-div'>
              <div className='row'>
                <label className='enter-topic-div'>Enter your topic:
                  <br></br> <input className='input-text-area'
                    type="text"
                    placeholder="enter a topic for blog "
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)} />
                </label><br />
              </div>
              <div>
                Enter only the topic name eg."Payroll finance" and not  "write a blog on payroll finance"
              </div>
              <div className='row'>
                <button className=" submit-button-blog" type='submit' onClick={handleSubmit}>Submit</button><br />
              </div>
            </form>
          </div>

          <div className='col'>
            <div className='row'>
              {isLoading ? <LoadingSpinner /> : <textarea className='text-area-answer' value={textarea} onChange={handleChange} />}
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

export default Blog
























