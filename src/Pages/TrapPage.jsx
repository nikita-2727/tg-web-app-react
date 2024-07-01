import ListProducts from "../components/ListProducts/Products";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

export default function TrapPage(props) {
    return (
        <div className="trap-page">
            <Header photo='https://i.postimg.cc/y6cc2N1v/maxresdefault-4.jpg'/>
            <ListProducts products={props.products} onClick={props.onClick}/>
            <Link to='/' style={{textDecoration: 'none'}}>
                <FaRegArrowAltCircleLeft 
                style={{position: "fixed", top: '89vh', left: '1vh', color: 'whitesmoke', height: '10vh', width: '10vh', 
                border: '4px solid black', borderRadius: '50%', backgroundColor: 'black'}}/>
            </Link>
        </div>
    )
}