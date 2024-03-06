import React from "react";
import './DescriptionProduct.css'
import { IoMdCloseCircleOutline } from "react-icons/io";



class DescriptionProduct extends React.Component {
    render() {
        this.saveDataInPage()
        return (
            <div className="description-product">
                <IoMdCloseCircleOutline className="close-icon" onClick={() => window.history.back()}/>
                <img src={this.props.productProps.photo} className="product-photo-description" alt={this.props.productProps.productName}></img>
                <div className="about-product">
                    <h1 className="heading-about">About the product</h1>
                    <p>{this.props.productProps.description}</p>
                </div>
            </div>
            
        )
    }
    saveDataInPage() {
        // сохраняем коллекцию с данными о продукте в localstorage, чтобы сайт не ломался при перезагрузке
        localStorage.setItem("productData", JSON.stringify(this.props.productProps))
    }

}

DescriptionProduct.defaultProps = {
    // в качестве дефолтных передаваемых данных в класс ставим нашу коллекцию из localstorage
    productProps: JSON.parse(localStorage.getItem("productData"))
}

export default DescriptionProduct;