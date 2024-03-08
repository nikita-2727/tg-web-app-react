import React from "react";
import './DescriptionProduct.css'
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";





class DescriptionProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stateButtonAboutText: 'Expand the description',
            stateButtonSpecText: <span>Unwrap<FaArrowDown className="spec-arrow-icon"/></span>,
            indexPhoto: 0,
        }

        this.openAboutBlock = this.openAboutBlock.bind(this)
        this.openSpecBlock = this.openSpecBlock.bind(this)
        this.flippingPhotos = this.flippingPhotos.bind(this)
    }

    render() {
        this.saveDataInPage()
        return (
            <div className="description-product">
                <IoMdCloseCircleOutline className="close-icon" onClick={() => window.history.back()} />
                <img src={this.props.productProps.photo[this.state.indexPhoto]} className="product-photo-description" alt={this.props.productProps.productName}></img>
                <FaArrowCircleLeft className="left-button" onClick={() => this.flippingPhotos(-1)}/>
                <FaArrowCircleRight className="right-button" onClick={() => this.flippingPhotos(1)}/>
                
                <div className="cell-specification-product">
                    <h1 className="heading-specification">Specifications</h1>
                    <div className="specification-product">
                        <div className="dimmer-text-specification"></div>
                        <p className="specification">{this.props.productProps.description}</p>
                    </div>
                    <button className="open-specification-button" onClick={this.openSpecBlock}>{this.state.stateButtonSpecText}</button>
                </div>


                <div className="cell-about-product">
                    <h1 className="heading-about">About the product</h1>
                    <div className="about-product">
                        <div className="dimmer-text"></div>
                        <p className="about">{this.props.productProps.description}</p>
                    </div>
                    <button className="open-about-button" onClick={this.openAboutBlock}>{this.state.stateButtonAboutText}</button>
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
        let dimmer = document.getElementsByClassName("dimmer-text")
        
        if (element[0].style.height === 'auto') {
            element[0].style.height = 'calc(var(--index) * 12.5)'
            dimmer[0].style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, var(--tg-theme-secondary-bg-color))'
            this.setState({stateButtonAboutText: 'Expand the description'})
        } else {
            element[0].style.height = 'auto'
            dimmer[0].style.background = 'rgba(0, 0, 0, 0)'
            this.setState({stateButtonAboutText: 'Hide the description'})
        }
    }

    openSpecBlock() {
        let element = document.getElementsByClassName("specification-product")
        let dimmer = document.getElementsByClassName("dimmer-text-specification")
        
        if (element[0].style.height === 'auto') {
            element[0].style.height = 'calc(var(--index) * 9)'
            dimmer[0].style.background = 'linear-gradient(180deg, rgba(0, 0, 0, 0) 60%, var(--tg-theme-secondary-bg-color))'
            this.setState({stateButtonSpecText: <span>Unwrap<FaArrowDown className="spec-arrow-icon"/></span>})
        } else {
            element[0].style.height = 'auto'
            dimmer[0].style.background = 'rgba(0, 0, 0, 0)'
            this.setState({stateButtonSpecText: <span>Hide<FaArrowUp className="spec-arrow-icon"/></span>})
        }
    }

    flippingPhotos(counter) {
        if (this.state.indexPhoto + counter < this.props.productProps.photo.length && this.state.indexPhoto + counter >= 0) {
            this.setState({indexPhoto: this.state.indexPhoto + counter})
        }
    }

}

DescriptionProduct.defaultProps = {
    // в качестве дефолтных передаваемых данных в класс ставим нашу коллекцию из localstorage
    productProps: JSON.parse(localStorage.getItem("productData"))
}

export default DescriptionProduct;