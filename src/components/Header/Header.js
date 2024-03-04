import React, { Component } from 'react';
import { SlBasket } from "react-icons/sl";
import './header.css'




class Header extends Component {
  render() {
    return (
        <div className='header'>
            <div className='header-text'>
                <h1 className='market-name'>React Online Store</h1> 
            </div>
            <div className='header-menu'>
                <a className='header-menu-button'>О нас</a>
                <a className='header-menu-button'>Отзывы</a>
                <a className='header-menu-button'>Контакты</a>
                <a className='cart-button'><SlBasket className='cart-icon'/></a>
            </div>
        </div>
        
    )
  }
}

export default Header;
