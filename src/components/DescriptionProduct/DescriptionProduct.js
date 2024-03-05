import React from "react";
import { Product } from "../ListProducts/Products";

class DescriptionProduct extends React.Component {
    constructor(props) {
        super(props)
        this.instanceOfProduct = new Product(this.props.productProps)
    }
    

    render() {
        return (
            <div className="description-product">
                <img src={this.props.productProps.photo} className="product-photo-description" alt={this.props.productProps.productName}
                height={200} width={200}></img>
            </div>
            
        )
    }
}

export default DescriptionProduct;