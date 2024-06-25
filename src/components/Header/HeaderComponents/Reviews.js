import Header from "../Header";
import ButtonBack from "./ButtonBack/ButtonBack";
import './Reviews.css';

export default function Reviews() {    
    return (
        <div className="reviews-page">
            <Header selectedPage={2} photo={getPhoto()}/>
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
    } else if (page == '/drill') {
        return 'https://i.postimg.cc/SKTN7kv9/maxresdefault-1.jpg'
    }
}