import React, { useState } from 'react'
import "./styles.css"
import LoadingSpinner from "../Startpage/LoadingSpinner"
const { Configuration, OpenAIApi } = require("openai")

function Imagecreation() {
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
    openai.createImage({
    //   model: "text-davinci-003",
    //   prompt:`Create a Landing page with content in english on the given topic ${topic} which is of minimal design, best quality,a headline that includes the main keyword,subheading that clarifies the heading, a descritpoin of the offer,image, video, or illustration, CTA button or form ,(optional) trust elements such as customer logos, reviews, or testimonials.`,
    prompt:`${topic}`,
    n: 1,
  size: "1024x1024",
    })
      .then((response) => {
        {
          setTextarea(`${response.data.data[0].url}`)
        //   console.log(`${response.data.choices[0].url}`)
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
              {isLoading ? <LoadingSpinner /> : <img className='text-area-answer' src={textarea} onChange={handleChange} />}
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

export default Imagecreation