import ListProducts from "../components/ListProducts/Products";
import Header from "../components/Header/Header";
import ButtonBack from "../components/Header/HeaderComponents/ButtonBack/ButtonBack";

export default function TrapPage(props) {
    return (
        <div className="trap-page">
            <Header photo='https://i.postimg.cc/y6cc2N1v/maxresdefault-4.jpg'/>
            <ListProducts products={props.products} onClick={props.onClick}/>
            <ButtonBack />
        </div>
    )
}