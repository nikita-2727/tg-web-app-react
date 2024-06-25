import Header from "../Header"
import ButtonBack from "./ButtonBack/ButtonBack"
import './AboutUs.css'

export default function AboutUs() {
    return (
        <div className="about-as-page">
            <Header selectedPage={1} photo={getPhoto()}/>
            <div className="about-block">
                <h1 className="heading-about-us"> About our store</h1>

                <p className="about">
                    Welcome bro. This is the biggest project u've ever seen. 
                    Here u can choose more than 200 beats for different styles & directions & purchase them at a low price only through our TG.
                    We cooperate with many beatmakers who have been working in the music market for more than 4 years. 
                    All the guys are young G - they are 16-17 y.o, so everyone here is charged. 
                    Be sure that every track with this rhythm sounds expensive. We appreciate u fam 💯
                </p>
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
    } else if (page == '/drill') {
        return 'https://i.postimg.cc/SKTN7kv9/maxresdefault-1.jpg'
    }
}