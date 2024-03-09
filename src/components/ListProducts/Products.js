import React from "react";
import { Link } from "react-router-dom";
import './Products.css'

import UnvisibleCount from "./UnvisibleCount";



export class Product extends React.Component {


    render() {
        
        return (
            <div id={"product-cell-" + this.props.productProps.id} className="product-cell">
                
                <Link to="about-product" > 
                    <img id={this.props.productProps.id} onClick={this.props.onClick} src={this.props.productProps.photo[0]} className="product-photo" alt={this.props.productProps.productName}></img>
                </Link>
                <p className="main-information">
                    <Link to="about-product" className="custom-link">
                        <span id={this.props.productProps.id} className="product-name" onClick={this.props.onClick}>{this.props.productProps.productName}</span>
                    </Link>
                    <span className="product-price">{this.props.productProps.price}</span>
                </p>

                <UnvisibleCount />
            </div>
        )
    }
}


function ListProducts(props) {

    const listProductComponent = []
    for (let index = 0; index < props.products.length; index++) {
        // добавляю в массив компоненты товаров и передаю словарь со свойствами каждого товара в каждую компоненту по отдельности
        listProductComponent.push(<Product key={index} productProps={props.products[index]}  onClick={props.onClick}/>)
    }
    return (
        <>{listProductComponent.map(productComponent => productComponent)}</>
    )
}

export default ListProducts;
