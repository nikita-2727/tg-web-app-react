import React, { Component } from 'react';
import { SlBasket } from "react-icons/sl";
import './header.css'




class Header extends Component {
  render() {
    return (
        <div className='header' onClick={this.props.onClick}>
            <div className='header-text'>
                <h1 className='market-name'>React Online Store</h1> 
            </div>
            <div className='header-menu'>
                <a className='header-menu-button'>About us</a>
                <a className='header-menu-button'>Reviews</a>
                <a className='header-menu-button'>Contacts</a>
                <a className='cart-button'>
                    <SlBasket className='cart-icon'/>
                    <div className='circle-counter'>1</div>
                </a>
            </div>
        </div>
        
    )
  }
}

export default Header;
