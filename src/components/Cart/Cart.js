import {useEffect, useState} from 'react';
import LoadingPage from '../../Pages/LoadingPage';
import { FaDownload } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";


import './Cart.css';
import { Link } from 'react-router-dom';

import { HOST_SERVER_API } from "../../env"

export default function Cart(props) {
    const [totalCount, setTotalCount] = useState(0)
    const [data, getdata] = useState(undefined)
    
    const change = (data) => {
        getdata(data)
    }

    useEffect(() => {
        fetch(HOST_SERVER_API + 'cart', {method: 'GET'})
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
            listProductsComponents.push(<ProductCellCart product={product} change={change}></ProductCellCart>)   
        }
        
        if (totalCount !== 0) {
            return ( 
                <>
                    {listProductsComponents.map(product => product)}
                    <p className='total-cart'>Total amount: <span className='total-price'>{totalCount} $</span></p>
                    <a href='https://t.me/veezeepayment_bot' className='buy-button' onClick={() => changeCount()}>
                        <span>Pay</span>
                    </a> 
                    
                </>
            )
        } else {
            return (
                <>
                    <div className='info-block'>
                        <p className='info'>Bro, the basket is still empty</p>
                    </div>
                    
                    <img src='https://i.postimg.cc/TYFb3rhq/photo-2024-04-28-10-12-36.jpg' className='info-image'></img>

                    <div className='info-block-2'>
                        <p className='info-2'>all your selected bits will appear here</p>
                    </div>
                </>
                
            )
        }
        
    } else {
        <LoadingPage />
    }
    
}


function changeCount(props) {

}


function ProductCellCart(props) {
    return (
        <div className='cell-cart'>
            <img className="photo-cart" src={props.product.photo}></img>
            <div className='name-box'>
                <span className='name-cart'>{props.product.productname}</span>
            </div>
            <a href={require('../../music/' + props.product.style + '/' + props.product.music)} download={true}
            className='download-block'>
                <FaDownload className="download-cart" />
            </a>
            
            
            <span className='price-cart'>{props.product.price} $</span>
            <MdDeleteForever className='delete-icon' 
            onClick={() => {
                deleteProductInCart({"productProps": props.product })
                setTimeout(() => {
                    fetch(HOST_SERVER_API + 'cart', {method: 'GET'})
                    .then(response => response.json())
                    .then(response => props.change(response))
                }, 500) 
            }}/>
        </div>
    )
}



function deleteProductInCart(props) {   
    
    const tgData = window.Telegram.WebApp.initDataUnsafe

    // получаем id пользователя из tg и отправляем на сервер
    fetch(HOST_SERVER_API + 'getChatId', {
        method: 'POST',
        body: JSON.stringify(tgData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            console.log('Запрос отправлен')
        }
    })

    fetch(HOST_SERVER_API + 'del-product', {
        method: 'POST',
        body: JSON.stringify(props.productProps),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            console.log('Запрос отправлен')
        }
    })
    .catch((error) => {
        console.error(error)
    })





}