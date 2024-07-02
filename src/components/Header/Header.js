import { Component } from 'react';
import { SlBasket } from "react-icons/sl";
import './header.css'
import '../ListProducts/Products.css'
import { Link } from 'react-router-dom';

import { HOST_CLIENT, HOST_SERVER_API } from "../../env"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buyCounter: 0,
            isGetChatId: false
        }
        this.sumCounterProduct = this.sumCounterProduct.bind(this)

        window.sumCounterProduct = this.sumCounterProduct
    }

    render() {
        return (
            <div className='header' id='header' style={{
                background: `url(${this.props.photo})`, 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                fontFamily: 'Arial Narrow, sans-serif',
                marginBottom: 'calc(var(--index) * 1)',
                height: 'calc(var(--index) * 25)'
            }}>

                <div className='header-menu' id='menu'>
                    <Link to="/about-as" className={'custom-link ' + (this.props.selectedPage === 1 ? 'selected-block' : '')}>
                        <img src='https://i.postimg.cc/W1shr9JC/photo-2024-04-25-20-45-59.jpg'
                        className={'header-menu-button ' + (this.props.selectedPage === 1 ? 'selected-button' : '')}></img>
                    </Link>

                    <Link to="/reviews" className={'custom-link ' + (this.props.selectedPage === 2 ? 'selected-block' : '')}>
                        <img src='https://i.postimg.cc/N0zM3BPv/photo-2024-04-25-20-48-12.jpg'
                        className={'header-menu-button ' + (this.props.selectedPage === 2 ? 'selected-button' : '')}></img>
                    </Link>

                    <Link to="/contacts" className={'custom-link ' + (this.props.selectedPage === 3 ? 'selected-block' : '')}>
                        <img src='https://i.postimg.cc/L6tJJdhj/photo-2024-04-25-20-45-00.jpg'
                        className={'header-menu-button ' + (this.props.selectedPage === 3 ? 'selected-button' : '')}></img>
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
        document.addEventListener('scroll', this.headerFixedRelative, { passive: true })
        let menu = document.getElementById('menu')
        if (window.location.href != (HOST_CLIENT) + '/') {
            menu.style.paddingBottom = '3vh'
        } 
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.headerFixedRelative)
    }

    // функции для обработки скролла страницы
    headerFixedRelative() {
        let menu = document.getElementById('menu')
        if (window.location.href == (HOST_CLIENT) + '/') {
            menu.style.paddingBottom = 0
        } 
        // если меню выходит за верхнюю границу то фиксируем его в верхней части видимой области
        else if (window.pageYOffset > 200 ) {
            menu.style.background = 'linear-gradient(to bottom, black, transparent 600%)'
            menu.style.position = 'fixed'
            menu.style.top = 0
            menu.style.paddingBottom = 0
        } else {
            menu.style.background = 'linear-gradient(to bottom, transparent, black 99%)'
            menu.style.position = 'absolute'
            menu.style.top = 'calc(var(--index) * 18.3)'
            menu.style.paddingBottom = '3vh'
        }
        // если человек на главной странице, записываем его информацию о скролле страницы каждую секунду
        if (window.location.href == (HOST_CLIENT + '/detroit') || window.location.href == (HOST_CLIENT + '/drill')) {
            setTimeout(() => localStorage.setItem('scroll-products', window.pageYOffset), 500)
        }
        
    }


    // функции пересчета количества товаров в корзине
    sumCounterProduct() {
        // получаем id пользователя для получения доступа k его корзине
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
        .then(() => this.setState({isGetChatId: true}))



        if (this.state.isGetChatId) {
            fetch(HOST_SERVER_API + 'length', {
                method: 'GET'
            })
            .then(response => response.json())
            .then(data => this.setState({buyCounter: data}))
            .catch(error => console.log(error))
        }
        
        
    }
    
}

export default Header;
