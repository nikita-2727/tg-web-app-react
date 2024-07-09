
import ButtonBack from "../components/Header/HeaderComponents/ButtonBack/ButtonBack";

export default function ComingSoon(props) {
    return (
        <>
            <div style={{background: 'linear-gradient(to bottom, transparent, black 150%)', position: 'absolute', height: '45vh', width: '100vw'}}></div>
            <img src="https://i.postimg.cc/HnQq312H/Screen-Shot-2016-05-06-at-12-34-19-AM.png"
            style={{width: '100%', height: '45vh'}}></img>
            <p style={{fontSize: '7vh', userSelect: 'none', fontFamily: 'Arial Narrow, sans-serif', 
                width: '100vw', marginTop: '5vh', marginLeft: '5vw'}}>
            <span style={{color:'grey'}}>Bro,</span> we're just working on it for now.</p>
            <ButtonBack />
        </>
    )
}