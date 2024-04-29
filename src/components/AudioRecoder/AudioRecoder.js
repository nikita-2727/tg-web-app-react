import React from "react";
import { useState } from "react";
import './AudioRecoder.css'



export default function AudioRecoder (props) {
  
    const [dataProduct, changeDataProduct] = useState(JSON.parse(localStorage.getItem("dataProducts"))[JSON.parse(localStorage.getItem("indexProduct"))])

    return (
        <div className="custom-recoder">
            <p>{dataProduct.productname}</p>
        </div>
    )
}
