import {useEffect, useState} from 'react';
import LoadingPage from '../../Pages/LoadingPage';
import { FaDownload } from "react-icons/fa6";

import './Cart.css';
import { Link } from 'react-router-dom';


export default function Cart(props) {
    const [totalCount, setTotalCount] = useState(0)
    const [data, getdata] = useState(undefined)
    

    useEffect(() => {
        fetch('http://localhost:3001/api/cart', {method: 'GET'})
        .then(response => response.json())
        .then(response => getdata(response))
    }, [])
    
    useEffect(() => {
        if (data) {
            let totalPrice = 0
            for (let product of data) {
                totalPrice += product.price
            }
            setTotalCount(totalPrice)
        }
        
    }, [data])


    const listProductsComponents = []
        

    if (data) {

        for (let product of data) {
            listProductsComponents.push(<ProductCellCart product={product}></ProductCellCart>)   
        }
        
        if (totalCount !== 0) {
            return ( 
                <>
                    {listProductsComponents.map(product => product)}
                    <p className='total-cart'>Total amount: {totalCount} $</p>
                    <Link to='pay' className='buy-button'>
                        <span>Pay</span>
                    </Link>
                    
                </>
            )
        } else {
            return (
                <div className='info-block'>
                    <p className='info'>Bro, the basket is still empty</p>
                </div>
            )
        }
        
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

