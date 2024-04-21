import {useEffect, useState} from 'react';
import LoadingPage from '../../Pages/LoadingPage';
import { FaDownload } from "react-icons/fa6";

import './Cart.css';


export default function Cart(props) {
    const [totalCount, setTotalCount] = useState(undefined)
    const [data, getdata] = useState(undefined)
    

    useEffect(() => {
        fetch('http://localhost:3001/api/cart', {method: 'GET'})
        .then(response => response.json())
        .then(response => getdata(response))
        .then(() => {
            console.log(data)
            let totalPrice = 0
            for (let product of data) {
                totalPrice += 50
            }
            setTotalCount(totalPrice)
        })
    }, [])


    const listProductsComponents = []
        

    if (data && totalCount) {
        
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
            
            <span className='price-cart'>50 $</span>
            <a  href={props.product.music}><FaDownload className="download-cart"/></a>
        </div>
    )
}

