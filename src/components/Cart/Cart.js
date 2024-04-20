import {useEffect, useState} from 'react';
import LoadingPage from '../../Pages/LoadingPage';
import { FaDownload } from "react-icons/fa6";

import './Cart.css';


export default function Cart(props) {
    const [data, getdata] = useState(undefined)

    useEffect(() => {
        fetch('http://localhost:3001/api/cart', {method: 'GET'})
        .then(response => response.json())
        .then(response => getdata(response))
    }, [])


    const listProductsComponents = []
        

    console.log(data)
    if (data) {
        for (let product of data) {
            listProductsComponents.push(<ProductCellCart product={product}></ProductCellCart>)
        }
        console.log(listProductsComponents)
        return ( 
            <>
                {listProductsComponents.map(product => product)}
            </>
        )
    } else {
        <LoadingPage />
    }
    
}



function ProductCellCart(props) {
    return (
        <div className='cell-cart'>
            <img className="photo-cart" src={props.product.photo}></img>
            <div className='name-box'>
                <span className='name-cart'>{props.product.productname}</span>
            </div>
            
            
            <a className="download-cart" href={props.product.music}><FaDownload /></a>
        </div>
    )
}

