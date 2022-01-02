import React from 'react'
import header from "./images/header.png"
import image from "./images/2.png "


  let review = [
      {
      img: header,
      text: 'Very honest and reliable, communication skills was excellent too,definetly recommended for any website project.',
      name: 'Dongwook'
    },

   {
      img: image,
      text: 'Very honest and reliable, communication skills was excellent too,definetly recommended for any website project.',
      name: 'Dongwook' 
   }
]
     function auto(){ }

   setInterval(auto, 2000)

const Review = () => {
    return (
        <div>
            <div className="review">
            <img src={image} alt="img" className="review-img" data-aos="zoom-in-right" />
            <p className="reviewer-com" data-aos="fade-in">Very honest and reliable, communication skills was excellent too,
                definetly recommended for any website project. 
            </p>
            <h3 className="reviewer-name" data-aos="fade-up-left">Dongwook</h3>
        </div>
        </div>
    )
}

export default Review
