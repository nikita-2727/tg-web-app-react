import Header from "../Header";
import ButtonBack from "./ButtonBack/ButtonBack";
import './Reviews.css';

export default function Reviews() {
    return (
        <div className="reviews-page">
            <Header selectedPage={2}/>


            <ButtonBack />
        </div>
    )
}