import React, { useState } from "react";
import testimonials from "../APIs/testimonials";
import johnAppleseed from "../images/customers/john-appleseed.jpg";
import sallySilver from "../images/customers/sally-silverstein.jpeg";
import jennyPark from "../images/customers/jenny-park.jpg";
import { Rating } from "@mui/material";

const Reviews = () => {
    const [rev, setRev] = useState({title: testimonials[0].title, description: testimonials[0].description, rating: testimonials[0].rating});

    function handleClick(rating, title, description) {
        setRev({title: title, description: description, rating: rating})
    }

    return(
        <div id="review-bounding">
            <div id="customer-panel">

                <div
                className="customer-review"
                key={testimonials[0].id}
                aria-label = "On Click"
                onClick={() => {
                    handleClick(testimonials[0].rating, testimonials[0].title, testimonials[0].description)
                }}>
                    <img className="customer-avatar" alt="The customer that is reviewing the restaurant." src={johnAppleseed}/>
                    <span>
                        <p><strong>{testimonials[0].name}</strong><br/>
                        {testimonials[0].inOut} | {testimonials[0].time} ({testimonials[0].rating} stars)</p>
                    </span>
                </div>

                <div
                className="customer-review"
                key={testimonials[1].id}
                aria-label = "On Click"
                onClick={() => {
                    handleClick(testimonials[1].rating, testimonials[1].title, testimonials[1].description)
                }}>
                    <img className="customer-avatar" alt="The customer that is reviewing the restaurant." src={sallySilver}/>
                    <span>
                        <p><strong>{testimonials[1].name}</strong><br/>
                        {testimonials[1].inOut} | {testimonials[1].time} ({testimonials[1].rating} stars)</p>
                    </span>
                </div>

                <div
                className="customer-review"
                key={testimonials[2].id}
                aria-label = "On Click"
                onClick={() => {
                    handleClick(testimonials[2].rating, testimonials[2].title, testimonials[2].description)
                }}>
                    <img className="customer-avatar" alt="The customer that is reviewing the restaurant." src={jennyPark}/>
                    <span>
                        <p><strong>{testimonials[2].name}</strong><br/>
                        {testimonials[2].inOut} | {testimonials[2].time} ({testimonials[2].rating} stars)</p>
                    </span>
                </div>
            </div>
            <div id="rev-panel">
                <Rating name="read-only"
                value={rev.rating}
                readOnly
                precision={0.5}
                size="large"
                />
                <h3>{rev.title}</h3>
                <p>{rev.description}</p>
            </div>
        </div>
    )
}

export default Reviews;