import Header from "../Header"
import ButtonBack from "./ButtonBack/ButtonBack"
import './AboutUs.css'

export default function AboutUs() {
    return (
        <div className="about-as-page">
            <Header selectedPage={1}/>

            <h1 className="heading-about-us"> about our store</h1>

            <div className="history-block">
                <h2 className="heading-history">History of creation</h2>

            </div>
            
            <div className="history-block">
                <h2 style={{fontSize: '25vh'}}className="heading-history">History of creation</h2>

            </div>
            
            <ButtonBack />
        </div>
    )
    
}