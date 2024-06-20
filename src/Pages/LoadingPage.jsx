import React from "react";
import { motion } from 'framer-motion';

class LoadingPage extends React.Component {
    render() {

        return(
            <div className="loading-page">
                <audio src="http://provotoro4.temp.swtest.ru/BossMan%20Dlow%20Type%20Beat%20Suave%20.mp3" controls></audio>
                <div style={{background: 'linear-gradient(to bottom, transparent, black 99%)', position: 'absolute', height: '71vh', width: '100vw'}}></div>
                <img src="https://i.postimg.cc/23pzX72w/doc-2024-04-04-21-48-33.gif" 
                style={{height: '70vh', width: '100vw', userSelect: 'none'}}></img>

                <p style={{fontSize: '7vh', userSelect: 'none', fontFamily: 'Arial Narrow, sans-serif', width: '50vw', marginTop: '2.5vh', marginLeft: '5vw'}}>
                    <span style={{color: 'grey'}}>Hey Bro,</span> it's loading...</p>
                
                <motion.img src="https://i.postimg.cc/k4Dmgdsw/93-1.png" 
                style={{height: '20vh', width: '20vh', userSelect: 'none', position: 'absolute', bottom: '5vh', right: '7vw'}}
                animate={{rotate: 720}}
                transition={{repeat: Infinity, repeatType: 'loop', duration: 7, type: 'just', ease: 'easeInOut'}}></motion.img>
            </div>
        )
    }
}
export default LoadingPage;