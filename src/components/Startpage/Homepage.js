import React from 'react'
import { Link } from 'react-router-dom'
import "./Startpage.css"
import Sky from "./bird.jpg"
import "./image/Blog.jpg"
import Blog from './image/Blog.jpg'
import contentimage from './image/content-calendar.jpg'
import adscontentimage from './image/adscontent.jpg'
import vidoimage from "./image/vido.jpg"
import emailimage from "./image/email.jpg"
import productimage from "./image/product.jpg"
import seoimage from "./image/seo.jpg"
import Look from "./image/look.jpg"


function Homepage() {

    const cardDate=[
      {
         "id": "1",
         "image":Look,
         "title": "Search something",
         "sub_title": "What you looking for ?  ",
         path :"/searchcontent",
      },
        {
            "id": "2",
            "image":Blog,
            "title": "Blogs",
            "sub_title": "Want some catchy blog, essay or article topics?  ",
            path :"/blogs",
         },
         {
            "id": "3",
            "image":contentimage,
            "title": "Content-Calendar",
            "sub_title": "Image content or caption content ideas ",
            path :"/contentcalendar",
         },
         {
            "id": "4",
            "image":adscontentimage,
            "title": "Ads-Content",
            "sub_title": "catchy headlines and image content for your desired Brand ",
            path :"/adscontent",
         }
         ,
         {
            "id": "5",
            "image":vidoimage,
            "title": "Short Description",
            "sub_title": "Create some one-liners/headings",
            path :"/shortdescription",
         }
         ,
         {
            "id": "6",
            "image":emailimage,
            "title": "Emails",
            "sub_title": "Need some help for writing email? Here you go ",
            path :"/email",
         }
         ,
         {
            "id": "7",
            "image":productimage,
            "title": "Product description",
            "sub_title": "some Product description for your product? ",
            path :"/productdescription",
         }
         ,
         {
            "id": "8",
            "image":seoimage,
            "title": "SEO description",
            "sub_title": "seo optimized meta description content for blogs or any post",
            path :"/seodescription",
         }
         ,
         {
            "id": "9",
            "image":seoimage,
            "title": "SEO Meta Title",
            "sub_title": "Write seo optimized meta title for your website ",
            path :"/seometatitle",
         },
         {
            "id": "10",
            "image":seoimage,
            "title": "Image creation",
            "sub_title": " ",
            path :"/imagecreation",
         }
    ]
  return (
    <div className='Homepage'>
      <img className='skydream-logo-home' src={Sky}/>
      <h5 className='use-case-select-text'>Select your use case</h5>
      <div className="row-job">
                    {
                        cardDate.map(cardData => {
                            return (
                            <div className="job column-job" key={cardData.id}>
                              <img className='image-div-tag' src={cardData.image} alt='birf'/>
                                <h5 className='title-of-content-inhomepage'>  {cardData.title}</h5>
                                <h6> {cardData.sub_title}</h6>
                                <Link exact to={cardData.path}   > 
                                 <button className='start-wrtiting'> Start writing</button></Link>
                               </div>
                            )
                        })
                    }
                </div>
    </div>
  )
}

export default Homepage
