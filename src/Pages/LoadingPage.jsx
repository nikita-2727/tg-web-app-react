import React from "react";
import { motion } from 'framer-motion';

class LoadingPage extends React.Component {
    render() {

        return(
            <div className="loading-page">
                <div style={{background: 'linear-gradient(to bottom, transparent, black 99%)', position: 'absolute', height: '71vh', width: '100vw'}}></div>
                <img src="https://i.postimg.cc/8Pr9SSMT/ezgif-com-animated-gif-maker.gif" 
                style={{height: '70vh', width: '100vw', userSelect: 'none'}}></img>

                <p style={{fontSize: '7vh', userSelect: 'none', fontFamily: 'Arial Narrow, sans-serif', width: '50vw', marginTop: '2.5vh', marginLeft: '5vw'}}>
                    <span style={{color: '#00b649'}}>Hey Bro,</span> it's loading...</p>
                
                <motion.img src="https://i.postimg.cc/k4Dmgdsw/93-1.png" 
                style={{height: '20vh', width: '35vw', userSelect: 'none', position: 'absolute', bottom: '5vh', right: '7vw'}}
                animate={{rotate: 720}}
                transition={{repeat: Infinity, repeatType: 'loop', duration: 7, type: 'just', ease: 'easeInOut'}}></motion.img>
            </div>
        )
    }
}
export default LoadingPage;