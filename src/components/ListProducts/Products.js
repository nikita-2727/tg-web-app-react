import React from "react";
import { Link } from "react-router-dom";

import './Products.css'

import UnvisibleCount from "./UnvisibleCount";
import CustomAudioRecoder from "./CustomAudioRecoder";


export class Product extends React.Component {
    render() {
        return (
            <div id={"product-cell-" + this.props.productProps.id} className="product-cell">
                
                <Link to="about-product" > 
                    <img id={this.props.productProps.id} onClick={this.props.onClick} src={this.props.productProps.photo[0]} className="product-photo" alt={this.props.productProps.productName}></img>
                </Link>
                <div className="name-music">
                    <p >21 Savage Type Beat Lost u </p>
                </div>
                
                <CustomAudioRecoder src="https://www.dropbox.com/scl/fi/osmi3f2aqr3y9dsz5crso/21-Savage-Type-Beat-Lost-u.mp3?rlkey=y9cthunbpp8gndujsv06ru9uc&dl=1" />
                <UnvisibleCount productProps={this.props.productProps}/>
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
