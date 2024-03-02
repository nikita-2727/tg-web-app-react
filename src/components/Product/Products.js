import React from "react";
import './Products.css'

function Product(props) {
    return (
        <div id={"product-cell-" + props.productProps.id} className="product-cell">
            <p>ghbfnthtt</p>
        </div>
    )
}

function ListProducts(props) {
    const listProductComponent = []
    for (let index = 0; index < props.products.length; index++) {
        // добавляю в массив компоненты товаров и передаю словарь со свойствами каждого товара в каждую компоненту по отдельности
        listProductComponent.push(<Product key={index} productProps={props.products[index]} />)
    }
    console.log(listProductComponent)
    return (
        <>{listProductComponent.map(productComponent => productComponent)}</>
    )
}

export default ListProducts;
