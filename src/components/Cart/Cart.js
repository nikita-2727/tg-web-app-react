import {useEffect, useState} from 'react';
import LoadingPage from '../../Pages/LoadingPage';
import { FaDownload } from "react-icons/fa6";

import './Cart.css';


export default function Cart(props) {
    const [data, getdata] = useState(undefined)
    const [totalCount, setTotalCount] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3001/api/cart', {method: 'GET'})
        .then(response => response.json())
        .then(response => getdata(response))

        if (data) {
            console.log(totalCount)
            let totalPrice = 0
            for (let product of data) {
                totalPrice += product.price
            }
            setTotalCount(totalPrice)
        }
    }, [])


    const listProductsComponents = []
        

    if (data) {
        
        for (let product of data) {
            listProductsComponents.push(<ProductCellCart product={product}></ProductCellCart>)   
        }
        
        return ( 
            <>
                {listProductsComponents.map(product => product)}
                <p className='total-cart'>{totalCount} $</p>
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
            
            <span className='price-cart'>{props.product.price} $</span>
            <a  href={props.product.music}><FaDownload className="download-cart"/></a>
        </div>
    )
}

