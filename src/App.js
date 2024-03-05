import { Route, Routes, BrowserRouter} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import AboutProductPage from "./Pages/AboutProductPage";



const productsDescription = [
    { 
        id: 1, 
        productName: 'Наушники', 
        price: '15 000', 
        photo: 'https://i.pinimg.com/originals/19/a5/6f/19a56f8a05d3c7a1152e961bb45f2847.jpg', 
        description: '', 
        specifications: '' 
    },
    {
        id: 2,
        productName: 'Телефон',
        price: '20 000',
        photo: 'https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/124927/2_124927.jpg', 
        description: '',
        specifications: ''
    },
    { 
        id: 3, 
        productName: 'Планшет', 
        price: '25 000', 
        photo: 'https://cdn.myshoptet.com/usr/www.pocitarna.cz/user/shop/orig/128153-2_apple-ipad-air-2-10.jpg?63d7a1dc', 
        description: '', 
        specifications: '' 
    },
    { 
        id: 4, 
        productName: 'Телевизор', 
        price: '50 000', 
        photo: 'https://tv-price.com/images/PS/PS64D8000/d1a4/d/Samsung-PS64D8000-plasma-panel-2.jpg', 
        description: '', 
        specifications: '' 
    },
    { 
        id: 5, 
        productName: 'Колонки', 
        price: '5 000', 
        photo: 'https://a.allegroimg.com/original/1166b5/f7b7f4fa4016ab2e20d34db21d6c/Genius-glosniki-2-0-SP-HF800A-20W-drewniane', 
        description: '', 
        specifications: '' 
    },
    { 
        id: 6, 
        productName: 'Монитор', 
        price: '10 000', 
        photo: 'https://avatars.mds.yandex.net/get-mpic/96484/img_id5535838120757981496/300x400', 
        description: '', 
        specifications: '' 
    },
]

const tg = window.Telegram.WebApp


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage products={productsDescription}/>}></Route>
                <Route path="about-product" element={<AboutProductPage productProps={productsDescription[0]}/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
