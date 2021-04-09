import React from 'react'
import "./banner.css";
import image from "../../images/nfl.jpeg"
const Banner = () => {
    return (
        <div className="banner">
            <img src={image} alt="nfl" />

        </div>
    )
}

export default Banner;

