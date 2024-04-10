import Header from "../Header"
import ButtonBack from "./ButtonBack/ButtonBack"
import './AboutUs.css'

export default function AboutUs() {
    return (
        <div className="about-as-page">
            <Header selectedPage={1}/>
            <div className="about-block">
                <h1 className="heading-about-us"> about our store</h1>

                <p className="about">
                    Welcome bro. This is the biggest project u've ever seen. 
                    Here u can choose more than 200 beats for different styles & directions & purchase them at a low price only through our TG.
                    We cooperate with many beatmakers who have been working in the music market for more than 4 years. 
                    All the guys are young G - they are 16-17 y.o, so everyone here is charged. 
                    Be sure that every track with this rhythm sounds expensive. We appreciate u fam 💯
                </p>
            </div>
            
            <ButtonBack />
        </div>
    )
    
}