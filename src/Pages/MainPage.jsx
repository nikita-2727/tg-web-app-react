import ListProducts from "../components/ListProducts/Products";
import Header from "../components/Header/Header";

export default function MainPage(props) {
    return (
        <div className="main-page">
            <Header />
            <ListProducts products={props.products} />
        </div>
    );
}

