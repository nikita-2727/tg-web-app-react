import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import AudioRecoderPage from "./Pages/AudioRecoderPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ReviewsPage from "./Pages/ReviewsPage";
import ContactsPage from "./Pages/ContactsPage";
import CartPage from "./Pages/CartPage";
import LoadingPage from "./Pages/LoadingPage";
import PayPage from "./Pages/PayPage";


class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            id: 0,
            isLoadedData: false,
            isGetChatId: false,
            productsDescription: undefined
        }
        this.getValueId = this.getValueId.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)

        this.tgData = window.Telegram.WebApp.initDataUnsafe
    }

    componentDidMount() {
        fetch(process.env.HOST_SERVER_API, { // юзаем переменные окружения
            method: 'GET',
        })
        .then(response => response.json()) // переводим содержимое body в json
        .then(data => this.setState({ // закидываем полученный объект в состояние и обновляем статус загрузки страницы
            productsDescription: data,
            isLoadedData: true
        }))
        .catch((error) => console.log(error)) 

        // получаем id пользователя для получения доступа k его корзине
        fetch(process.env.HOST_SERVER_API + 'getChatId', {
            method: 'POST',
            body: JSON.stringify(this.tgData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                console.log('Запрос отправлен')
            }
        })
        .then(() => this.setState({isGetChatId: true}))

    }
    
    render() {
        if (this.state.isLoadedData && this.state.isGetChatId) { /* пока не получили данные от сервера, рендер станицы загрузки
        иначе возвращаем маршрутизатор с главной страницей списка продуктов */
            localStorage.setItem('dataProducts', JSON.stringify(this.state.productsDescription)) // закидываем весь список продуктов в localstorage

            return (
                <BrowserRouter>
                    <Routes>
                        {/* при клике получаем id элемента и добавляем его в состояние */} 
                        <Route path="/" element={<MainPage products={this.state.productsDescription} onClick={e => this.getValueId(e.target.id)}/>} > </Route>
                        {/* т. к. id соответствует индексации в списке продуктов, то рендерим станицу с информацией из списка с индексом кликабельного элемента */}
                        <Route path="audio-recoder" element={<AudioRecoderPage />}></Route> 
                        <Route path="about-as" element={<AboutUsPage />}></Route>
                        <Route path="reviews" element={<ReviewsPage />}></Route>
                        <Route path="contacts" element={<ContactsPage />}></Route>
                        <Route path="cart" element={<CartPage />}></Route>
                        <Route path="cart/pay" element={<PayPage />}></Route>
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
        /* метод для записи id элемента в storage */
        localStorage.setItem("indexProduct", JSON.stringify(id - 1))  
    }
}

export default App;
