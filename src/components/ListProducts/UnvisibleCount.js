import React from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import { LuPlusCircle } from "react-icons/lu";
import { LuMinusCircle } from "react-icons/lu";
import './Products.css';
import './UnvisibleCount.css';



export class UnvisibleCount extends React.Component {
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
                    this.cartPlus()
                    setTimeout(() => window.sumCounterProduct(), 100)
                }}> <BsFillBasket2Fill className="basket-icon"/>Add to cart </button>
            )
        } else {
            return (
                <div className="custom-market-cart">
                    <LuMinusCircle className="button-minus" onClick={() => {
                        this.cartMinus()
                        setTimeout(() => window.sumCounterProduct(), 100)
                    }} />
                    <p className="counter">{this.state.counter}</p>
                    <LuPlusCircle className="button-plus" onClick={() => {
                        this.cartPlus()
                        setTimeout(() => window.sumCounterProduct(), 100)
                    }} />
                </div>
            );
        }
    }

    cartPlus() {this.setState({counter: this.state.counter + 1})}
    cartMinus() {this.setState({counter: this.state.counter - 1})}

}

export default UnvisibleCount;