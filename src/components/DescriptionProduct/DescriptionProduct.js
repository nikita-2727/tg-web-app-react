import React from "react";

class DescriptionProduct extends React.Component {
    render() {
        console.log(this.props.productProps)
        return (
            <div className="description-product">
                <img src={this.props.productProps.photo} className="product-photo-description" alt={this.props.productProps.productName}
                height={300} width={500}></img>
            </div>
            
        )
    }
}

export default DescriptionProduct;