import React, { useState } from "react";
import './DescriptionProduct.css'
import { IoMdCloseCircleOutline } from "react-icons/io";



class DescriptionProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stateButtonText: 'Expand the description'
        }

        this.openAboutBlock = this.openAboutBlock.bind(this)
    }

    render() {
        this.saveDataInPage()
        return (
            <div className="description-product">
                <IoMdCloseCircleOutline className="close-icon" onClick={() => window.history.back()} />
                <img src={this.props.productProps.photo} className="product-photo-description" alt={this.props.productProps.productName}></img>
                <div className="cell-about-product">
                    <h1 className="heading-about">About the product</h1>
                    <div className="about-product">
                        <p className="about">{this.props.productProps.description}</p>
                    </div>
                    <button className="open-about-button" onClick={this.openAboutBlock}>{this.state.stateButtonText}</button>
                </div>
            </div>

        )
    }
    saveDataInPage() {
        // сохраняем коллекцию с данными о продукте в localstorage, чтобы сайт не ломался при перезагрузке
        localStorage.setItem("productData", JSON.stringify(this.props.productProps))
    }
    openAboutBlock() {
        let element = document.getElementsByClassName("about-product")
        
        if (element[0].style.height == 'auto') {
            element[0].style.height = 'calc(var(--index) * 12.5)'
            this.setState({stateButtonText: 'Expand the description'})
        } else {
            element[0].style.height = 'auto'
            this.setState({stateButtonText: 'Hide the description'})
        }
    }

}

DescriptionProduct.defaultProps = {
    // в качестве дефолтных передаваемых данных в класс ставим нашу коллекцию из localstorage
    productProps: JSON.parse(localStorage.getItem("productData"))
}

export default DescriptionProduct;