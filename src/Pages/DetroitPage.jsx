import React from "react";
import ListProducts from "../components/ListProducts/Products";
import Header from "../components/Header/Header";
import ButtonBack from "../components/Header/HeaderComponents/ButtonBack/ButtonBack";



export default class DetroitPage extends React.Component {
    render() {
        return (
            <div className="detroit-page">
                <Header photo='https://i.postimg.cc/j2mpg9kQ/maxresdefault-3.jpg'/>
                <ListProducts products={this.props.products} onClick={this.props.onClick}/>
                <ButtonBack />
            </div>
        );
    }

}

