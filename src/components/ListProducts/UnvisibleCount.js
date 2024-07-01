import React from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import './UnvisibleCount.css';

import { HOST_SERVER_API } from "../../env"



class UnvisibleCount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             // если товар уже в корзине, то оставляем счетчик 1 и 
            counter: this.props.mode == 'sold'  ? 1 : 0,
            lizingExclusiveFlag: false, 
        }

        this.editStateCart = this.editStateCart.bind(this)
        this.editStateFlag = this.editStateFlag.bind(this)

        this.tgData = window.Telegram.WebApp.initDataUnsafe

    }

    
    render() {
        if (this.state.counter === 1) {
            return(
                <div className="delete-check-mark-cart">
                    <span className="add-to-cart">Added <IoIosCheckmarkCircle /></span>
                    <button className="delete-button" onClick={() => {
                        // при перезагрузке страницы у нас исчезают цены, поэтому подгружаем их из базы данных для конкретного продукта
                        this.props.productProps.price = this.props.price 
                        this.editStateCart(0)
                        this.requestDelProduct()
                        window.sumCounterProduct() // ПОД ЗАМЕНУ
                    }}><RiDeleteBin5Fill className="icon-delete"/></button>

                    {/* псевдоэлемент для быстрого подсчёта товаров в корзине без обращения к серверу 
                    возможно переделаю в пересчет длины таблицы*/}
                    <span className="counter" style={{display: "none"}}>{this.state.counter}</span> 
                </div>
            )
        } else if (this.state.counter === 0 && !this.state.lizingExclusiveFlag) {
            return (
                <>
                    <button className="button-cart" onClick={() => {
                        this.editStateFlag(true)  // переходим к компоненте custom-market-cart
                    }}> <BsFillBasket2Fill className="basket-icon"/>Add to cart </button>

                    {/* псевдоэлемент для быстрого подсчёта товаров в корзине без обращения к серверу 
                    возможно переделаю в пересчет длины таблицы*/}
                    <span className="counter" style={{display: "none"}}>{this.state.counter}</span> 
                </>

            )
        } else if (this.state.lizingExclusiveFlag) {
            return (
                <div className="custom-market-cart">
                    <button className="button-lizing" onClick={() => {
                        this.editStateFlag(false) // заменяем компоненту на delete-check-mark-cart через состояние
                        this.props.productProps.price = 50
                        this.requestAddProduct() // добавление информации о товаре в базу данных корзины
                        this.editStateCart(1) // изменяем counter
                        window.sumCounterProduct() // изменяем состояние счетчика в Header 
                    }} >leasing</button>
                    <button className="button-exclusive" onClick={() => {
                        this.editStateFlag(false) // полностью аналогично
                        this.props.productProps.price = 120
                        this.requestAddProduct()
                        this.editStateCart(1)
                        window.sumCounterProduct() // ПОД ЗАМЕНУ
                    }} >exclusive <FaCrown /></button>
                
                    {/* псевдоэлемент для быстрого подсчёта товаров в корзине без обращения к серверу 
                    возможно переделаю в пересчет длины таблицы*/}
                    <span className="counter" style={{display: "none"}}>{this.state.counter}</span> 
                </div>
            );
        } 
    }

    editStateCart(quantity) {this.setState({counter: quantity})}
    editStateFlag(bool) {this.setState({lizingExclusiveFlag: bool})}


    // методы управления данными
    requestAddProduct() {

        // отправляю на сервер данные продукта, который хотят добавить в корзину
        fetch(HOST_SERVER_API + 'add-product', {
            method: 'POST',
            body: JSON.stringify(this.props.productProps),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('Запрос отправлен')
            }
        })
        .then(() => {
            console.log('ok')
        })
        .catch((error) => {
            console.error(error)
        })

        // получаем id пользователя из tg и отправляем на сервер
        fetch(HOST_SERVER_API + 'getChatId', {
            method: 'POST',
            body: JSON.stringify(this.tgData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('Запрос отправлен')
            }
        })
    }


    requestDelProduct() {

        // отправляю на сервер данные продукта, который хотят добавить в корзину
        fetch(HOST_SERVER_API + 'del-product', {
            method: 'POST',
            body: JSON.stringify(this.props.productProps),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('Запрос отправлен')
            }
        })
        .then(() => {
            console.log('ok')
        })
        .catch((error) => {
            console.error(error)
        })

        // получаем id пользователя из tg и отправляем на сервер
        fetch(HOST_SERVER_API + 'getChatId', {
            method: 'POST',
            body: JSON.stringify(this.tgData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('Запрос отправлен')
            }
        })
    }
}


export default UnvisibleCount;