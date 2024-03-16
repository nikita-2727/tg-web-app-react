import React from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import AboutProductPage from "./Pages/AboutProductPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ReviewsPage from "./Pages/ReviewsPage";
import ContactsPage from "./Pages/ContactsPage";


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
        .then(response => response.json())
        .then(data => this.setState({
            productsDescription: data,
            isLoaded: true
        }))
    }
    
    render() {
        if (this.state.isLoaded) {
            return (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainPage products={this.state.productsDescription} onClick={e => this.getValueId(e.target.id)}/>} > </Route>
                        <Route path="about-product" element={<AboutProductPage productProps={this.state.productsDescription[this.state.id - 1]}/>}></Route>
                        <Route path="about-as" element={<AboutUsPage />}></Route>
                        <Route path="reviews" element={<ReviewsPage />}></Route>
                        <Route path="contacts" element={<ContactsPage />}></Route>
                    </Routes>
                </BrowserRouter>
            )
        } else {
            return (
                <p>loading...</p>
            )
        }
        
    }

    getValueId(id) {
        this.setState({id: id})        
    }

}

export default App;
