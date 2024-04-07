import React from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiDeleteBin5Fill } from "react-icons/ri";
import './UnvisibleCount.css';




class UnvisibleCount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            lizingExclusiveFlag: false, 
        }

        this.editStateCart = this.editStateCart.bind(this)
        this.editStateFlag = this.editStateFlag.bind(this)
    }

    
    render() {
        if (this.state.counter === 0 && !this.state.lizingExclusiveFlag) {
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
                        this.requestAddProduct() // добавление информации о товаре в базу данных корзины
                        this.editStateCart(1) // изменяем counter
                        setTimeout(() => window.sumCounterProduct(), 1) // изменяем состояние счетчика в Header 
                    }} >lizing</button>
                    <button className="button-exclusive" onClick={() => {
                        this.editStateFlag(false) // полностью аналогично
                        this.requestAddProduct()
                        this.editStateCart(1)
                        setTimeout(() => window.sumCounterProduct(), 1) // ПОД ЗАМЕНУ
                    }} >exclusive <FaCrown /></button>
                
                    {/* псевдоэлемент для быстрого подсчёта товаров в корзине без обращения к серверу 
                    возможно переделаю в пересчет длины таблицы*/}
                    <span className="counter" style={{display: "none"}}>{this.state.counter}</span> 
                </div>
            );
        } else {
            return(
                <div className="delete-check-mark-cart">
                    <span className="add-to-cart">Added <IoIosCheckmarkCircle /></span>
                    <button className="delete-button" onClick={() => {
                        this.editStateCart(0)
                        setTimeout(() => window.sumCounterProduct(), 1) // ПОД ЗАМЕНУ
                    }}><RiDeleteBin5Fill className="icon-delete"/></button>

                    {/* псевдоэлемент для быстрого подсчёта товаров в корзине без обращения к серверу 
                    возможно переделаю в пересчет длины таблицы*/}
                    <span className="counter" style={{display: "none"}}>{this.state.counter}</span> 
                </div>
            )
        }
    }

    editStateCart(quantity) {this.setState({counter: quantity})}
    editStateFlag(bool) {this.setState({lizingExclusiveFlag: bool})}


    // методы управления данными
    requestAddProduct() {
        fetch('http://localhost:3001/api/add-product', {
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
    }
}


export default UnvisibleCount;