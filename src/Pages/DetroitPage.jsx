import React from "react";
import ListProducts from "../components/ListProducts/Products";
import Header from "../components/Header/Header";

import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import { Link } from "react-router-dom";


export default class DetroitPage extends React.Component {
    render() {
        return (
            <div className="detroit-page">
                <Header photo='https://i.postimg.cc/j2mpg9kQ/maxresdefault-3.jpg'/>
                <ListProducts products={this.props.products} onClick={this.props.onClick}/>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <FaRegArrowAltCircleLeft 
                    style={{position: "fixed", top: '89vh', left: '1vh', color: 'whitesmoke', height: '10vh', width: '10vh', 
                    border: '4px solid black', borderRadius: '50%', backgroundColor: 'black'}}/>
                </Link>
            </div>
        );
    }

}

