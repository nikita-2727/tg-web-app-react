import React from "react";
import { useState } from "react";
import './AudioRecoder.css'
import ButtonBack from '../Header/HeaderComponents/ButtonBack/ButtonBack.js'



export default function AudioRecoder (props) {
  
    const [dataProduct, changeDataProduct] = useState(JSON.parse(localStorage.getItem("dataProducts"))[JSON.parse(localStorage.getItem("indexProduct"))])

    return (
        <div className="video-block">
            <h2>{dataProduct.productname}</h2>
            <iframe src="https://www.youtube.com/embed/O6FPO1gMKjE?si=jsevaRfDcB6RPKdI" 
            title="YouTube video player" frameBorder="0"  className="video-frame"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <ButtonBack />
        </div>
    )
}
