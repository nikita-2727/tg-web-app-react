import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import AboutProductPage from "./Pages/AboutProductPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ReviewsPage from "./Pages/ReviewsPage";
import ContactsPage from "./Pages/ContactsPage";
import CartPage from "./Pages/CartPage";
import LoadingPage from "./Pages/LoadingPage";

const tgData = window.Telegram.WebApp.initDataUnsafe

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            id: 0,
            isLoaded: false,
            productsDescription: undefined
        }
        this.getValueId = this.getValueId.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        fetch('http://localhost:3001/api', {
            method: 'GET',
        })
        .then(response => response.json()) // переводим содержимое body в json
        .then(data => this.setState({ // закидываем полученный объект в состояние и обновляем статус загрузки страницы
            productsDescription: data,
            isLoaded: true
        }))
        .catch((error) => console.log(error)) 

        
        fetch('http://localhost:3001/addChatId', {
            method: 'POST',
            body: JSON.stringify(tgData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('Запрос отправлен')
            }
        })
    }
    
    render() {
        if (this.state.isLoaded) { /* пока не получили данные от сервера, рендер станицы загрузки
        иначе возвращаем маршрутизатор с главной страницей списка продуктов */
            return (
                <BrowserRouter>
                    <Routes>
                        {/* при клике получаем id элемента и добавляем его в состояние */} 
                        <Route path="/" element={<MainPage products={this.state.productsDescription} onClick={e => this.getValueId(e.target.id)}/>} > </Route>
                        {/* т. к. id соответствует индексации в списке продуктов, то рендерим станицу с информацией из списка с индексом кликабельного элемента */}
                        <Route path="about-product" element={<AboutProductPage productProps={this.state.productsDescription[this.state.id - 1]}/>}></Route> 
                        <Route path="about-as" element={<AboutUsPage />}></Route>
                        <Route path="reviews" element={<ReviewsPage />}></Route>
                        <Route path="contacts" element={<ContactsPage />}></Route>
                        <Route path="cart" element={<CartPage />}></Route>
                    </Routes>
                </BrowserRouter>
            )
        } else {
            return (
                <>
                    <LoadingPage />
                </>   
            )
        }

    }

    getValueId(id) {
        /* метод для записи id элемента в состояние */
        this.setState({id: id})        
    }
}

export default App;
