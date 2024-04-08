import { Component } from 'react';
import { SlBasket } from "react-icons/sl";
import './header.css'
import '../ListProducts/Products.css'
import { Link } from 'react-router-dom';




class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buyCounter: 0,
        }
        this.sumCounterProduct = this.sumCounterProduct.bind(this)

        window.sumCounterProduct = this.sumCounterProduct
    }

    render() {
        return (
            <div className='header' >

                <div className='header-menu' id='menu'>
                    <Link to="/about-as" className={'custom-link ' + (this.props.selectedPage === 1 ? 'selected-block' : '')}>
                        <span className={'header-menu-button ' + (this.props.selectedPage === 1 ? 'selected-button' : '')}>About us</span>
                    </Link>

                    <Link to="/reviews" className={'custom-link ' + (this.props.selectedPage === 2 ? 'selected-block' : '')}>
                        <span className={'header-menu-button ' + (this.props.selectedPage === 2 ? 'selected-button' : '')}>Reviews</span>
                    </Link>

                    <Link to="/contacts" className={'custom-link ' + (this.props.selectedPage === 3 ? 'selected-block' : '')}>
                        <span className={'header-menu-button ' + (this.props.selectedPage === 3 ? 'selected-button' : '')}>Contacts</span>
                    </Link>
                    
                    <Link to="/cart" className='cart-button'>
                        <SlBasket className='cart-icon' />
                        <span className='circle-counter'>{this.state.buyCounter}</span>
                    </Link>
                </div>
            </div>
        )
    }

    componentDidMount() {
        document.body.addEventListener('scroll', this.headerFixedRelative, { passive: true })
    }

    componentWillUnmount() {
        document.body.removeEventListener('scroll', this.headerFixedRelative)
    }

    // функции для обработки скролла страницы
    headerFixedRelative() {
        let menu = document.getElementById('menu')
        // если меню выходит за верхнюю границу то фиксируем его в верхней части видимой области
        if (window.pageYOffset > 200) {
            menu.style.background = 'linear-gradient(to bottom, black, transparent 600%)'
            menu.style.position = 'fixed'
            menu.style.top = 0
        } else {
            menu.style.background = 'linear-gradient(to bottom, transparent, black 99%)'
            menu.style.position = 'absolute'
            menu.style.top = 'calc(var(--index) * 10.5)'
        }
        console.log(window.pageYOffset)
    }


    // функции пересчета количества товаров в корзине
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
        if (this.state.buyCounter === 0) {
            element[0].style.display = 'none'
        } else {
            element[0].style.display = 'flex'
        }
    }

}

export default Header;
