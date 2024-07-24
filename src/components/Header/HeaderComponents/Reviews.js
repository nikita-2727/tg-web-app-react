import Header from "../Header";
import ButtonBack from "./ButtonBack/ButtonBack";
import './Reviews.css';

export default function Reviews() {    
    return (
        <div className="reviews-page">
            <Header selectedPage={2} photo={getPhoto()}/>
            <div className="prices-block">
                <h1 className="prices-header">Prices</h1>
                <p className="title">Leasing <span className="separator">--------------</span> <span className="price">50$</span></p>
                <p className="title">Exclusive <span className="separator">--------------</span> <span className="price">120$</span></p>
            </div>

            <div className="stocks-block">
                <h1 className="stocks-header">Stocks</h1>
                <p className="title">SOON</p>
            </div>
            <ButtonBack path={JSON.parse(localStorage.getItem('page'))}/>
        </div>
    )
}

function getPhoto() {
    let page = JSON.parse(localStorage.getItem('page'))
    if (page == '/') {
        return 'https://i.postimg.cc/BvLdbpb1/photo-2024-04-25-17-10-46-2.jpg'
    } else if (page == '/detroit') {
        return 'https://i.postimg.cc/j2mpg9kQ/maxresdefault-3.jpg'
    } else if (page == '/trap') {
        return 'https://i.postimg.cc/y6cc2N1v/maxresdefault-4.jpg'
    }
}