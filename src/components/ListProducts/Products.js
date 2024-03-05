import React from "react";
import { Link } from "react-router-dom";
import './Products.css'
import UnvisibleCount from "./UnvisibleCount";



export class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true,
        }
    }

    render() {
        return (
            <div id={"product-cell-" + this.props.productProps.id} className="product-cell" >
                <Link to="about-product"> 
                    <img src={this.props.productProps.photo} className="product-photo" alt={this.props.productProps.productName}></img>
                </Link>
                <p className="main-information">
                    <span className="product-name">{this.props.productProps.productName}</span>
                    <span className="product-price">{this.props.productProps.price}</span>
                </p>

                <UnvisibleCount state={this.state.visible} />
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
