import React from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import { LuPlusCircle } from "react-icons/lu";
import { LuMinusCircle } from "react-icons/lu";
import './Products.css';
import './UnvisibleCount.css';




class UnvisibleCount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
        }

        this.cartPlus = this.cartPlus.bind(this)
        this.cartMinus = this.cartMinus.bind(this)
    }

    
    render() {
        if (this.state.counter === 0) {
            return (
                <button className="button-cart" onClick={() => {
                    this.requestAddProduct()
                    this.cartPlus()
                    setTimeout(() => window.sumCounterProduct(), 1)
                }}> <BsFillBasket2Fill className="basket-icon"/>Add to cart </button>
            )
        } else {
            return (
                <div className="custom-market-cart">
                    <LuMinusCircle className="button-minus" onClick={() => {
                        this.requestAddProduct()
                        this.cartMinus() // изменяем counter
                        setTimeout(() => window.sumCounterProduct(), 1) // изменяем состояние в Header 
                    }} />
                    <p className="counter">{this.state.counter}</p>
                    <LuPlusCircle className="button-plus" onClick={() => {
                        this.requestAddProduct()
                        this.cartPlus()
                        setTimeout(() => window.sumCounterProduct(), 1)
                    }} />
                </div>
            );
        }
    }

    cartPlus() {this.setState({counter: this.state.counter + 1})}
    cartMinus() {this.setState({counter: this.state.counter - 1})}

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