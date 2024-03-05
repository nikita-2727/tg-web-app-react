import { BsFillBasket2Fill } from "react-icons/bs";
import './Products.css';
import './UnvisibleCount.css';



function UnvisibleCount(props) {
    if (props.state) {
        return (
            <button className="button-cart"> <BsFillBasket2Fill className="basket-icon"/>Add to cart </button>
        )
    } else {
        return (
            <div className="custom-market-cart">
                <button className="button-plus">+</button>
                <p></p>
                <button className="button-minus">-</button>
            </div>
        );
    }
}

export default UnvisibleCount;