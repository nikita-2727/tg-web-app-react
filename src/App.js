import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import DetroitPage from "./Pages/DetroitPage";
import TrapPage from "./Pages/TrapPage";
import AudioRecoderPage from "./Pages/AudioRecoderPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ReviewsPage from "./Pages/ReviewsPage";
import ContactsPage from "./Pages/ContactsPage";
import CartPage from "./Pages/CartPage";
import LoadingPage from "./Pages/LoadingPage";
import PayPage from "./Pages/PayPage";
import MainPage from "./Pages/MainPage";
import ComingSoon from "./Pages/ComingSoon";
import { HOST_SERVER_API } from "./env"
import FkVerify from "./Pages/FkVerify";



class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            id: 0,
            isLoadedData: [false, false],
            isGetChatId: false,
            productsDetroit: undefined,
            productsTrap: undefined,
        }
        this.getValueId = this.getValueId.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)

        this.tgData = window.Telegram.WebApp.initDataUnsafe
    }

    componentDidMount() {

        fetch(HOST_SERVER_API + 'detroit', { // юзаем переменные окружения
            method: 'GET',
        })
        .then(response => response.json()) // переводим содержимое body в json
        .then(data => this.setState({ // закидываем полученный объект в состояние и обновляем статус загрузки страницы
            productsDetroit: data,
            isLoadedData: [true, false]
        }))
        .catch((error) => console.log(error)) 

        fetch(HOST_SERVER_API + 'trap', { // юзаем переменные окружения
            method: 'GET',
        })
        .then(response => response.json()) // переводим содержимое body в json
        .then(data => this.setState({ // закидываем полученный объект в состояние и обновляем статус загрузки страницы
            productsTrap: data,
            isLoadedData: [true, true]
        }))
        .catch((error) => console.log(error)) 



        // получаем id пользователя для получения доступа k его корзине
        fetch(HOST_SERVER_API + 'getChatId', {
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
        if (this.state.isLoadedData.every((e) => e == true) && this.state.isGetChatId) { /* пока не получили данные от сервера, рендер станицы загрузки
        иначе возвращаем маршрутизатор с главной страницей списка продуктов */
            localStorage.setItem('detroit', JSON.stringify(this.state.productsDetroit)) // закидываем весь список продуктов в localstorage
            localStorage.setItem('trap', JSON.stringify(this.state.productsTrap)) // закидываем весь список продуктов в localstorage

            
            return (
                <BrowserRouter>
                    <Routes>
                        {/* при клике получаем id элемента и добавляем его в состояние */} 
                        <Route path="/" element={<MainPage />}></Route>
                        <Route path="trap" element={<TrapPage products={this.state.productsTrap} 
                        onClick={e => this.getValueId(e.target.id)}/>} ></Route>
                        <Route path="detroit" element={<DetroitPage products={this.state.productsDetroit} 
                        onClick={e => this.getValueId(e.target.id)} />}></Route>
                        <Route path="drill" element={<ComingSoon />}></Route>
                        <Route path="jersey" element={<ComingSoon />}></Route>
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
        localStorage.setItem("indexProduct", JSON.stringify(id))  
    }
}

export default App;
