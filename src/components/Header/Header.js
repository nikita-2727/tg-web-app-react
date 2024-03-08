import { Component } from 'react';
import { SlBasket } from "react-icons/sl";
import './header.css'




class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buyCounter: 0
        }
        this.sumCounterProduct = this.sumCounterProduct.bind(this)

        window.sumCounterProduct = this.sumCounterProduct
    }

    render() {
        return (
            <div className='header' onClick={this.sumCounterProduct}>
                <div className='header-text'>
                    <h1 className='market-name'>React Online Store</h1>
                </div>
                <div className='header-menu'>
                    <a className='header-menu-button'>About us</a>
                    <a className='header-menu-button'>Reviews</a>
                    <a className='header-menu-button'>Contacts</a>
                    <a className='cart-button'>
                        <SlBasket className='cart-icon' />
                        <div className='circle-counter'>{this.state.buyCounter}</div>
                    </a>
                </div>
            </div>
        )
    }

    sumCounterProduct() {
        if (document.getElementsByClassName('counter') !== undefined) {
            let elements = document.getElementsByClassName('counter');
            let counter = 0
            for (let element of elements) {
                counter += Number(element.innerHTML)  
            }
            this.setState({buyCounter: counter})
        } else {
            this.setState({buyCounter: this.state.buyCounter + 1})
        }    
        setTimeout(() => this.ifCounterIsNull(), 1)
    }

    ifCounterIsNull() {
        let element  = document.getElementsByClassName('circle-counter');
        if (this.state.buyCounter == 0) {
            element[0].style.display = 'none'
        } else {
            element[0].style.display = 'flex'
        }
    }
}

export default Header;
