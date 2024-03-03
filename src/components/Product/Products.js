import React from "react";
import './Products.css'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
        }
    }

    render() {
        return (
            <div id={"product-cell-" + this.props.productProps.id} className="product-cell">
                <img src={this.props.productProps.photo} className="product-photo" alt={this.props.productProps.productName}></img>
                <p className="main-information">
                    <span className="product-name">{this.props.productProps.productName}</span>
                    <span className="product-price">{this.props.productProps.price}</span>
                </p>
                <button className="button-cart">Добавить в корзину</button>
            </div>
        )
    }
}

function ListProducts(props) {
    const listProductComponent = []
    for (let index = 0; index < props.products.length; index++) {
        // добавляю в массив компоненты товаров и передаю словарь со свойствами каждого товара в каждую компоненту по отдельности
        listProductComponent.push(<Product key={index} productProps={props.products[index]} />)
    }
    return (
        <>{listProductComponent.map(productComponent => productComponent)}</>
    )
}

export default ListProducts;
