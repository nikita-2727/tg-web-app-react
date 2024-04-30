import React from "react";
import { useState } from "react";
import './AudioRecoder.css'



export default function AudioRecoder (props) {
  
    const [dataProduct, changeDataProduct] = useState(JSON.parse(localStorage.getItem("dataProducts"))[JSON.parse(localStorage.getItem("indexProduct"))])

    return (
        <div className="video-block">
            <p>{dataProduct.productname}</p>
            <iframe src="https://www.youtube.com/embed/O6FPO1gMKjE?si=jsevaRfDcB6RPKdI" 
            title="YouTube video player" frameborder="0"  className="video-frame"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}
