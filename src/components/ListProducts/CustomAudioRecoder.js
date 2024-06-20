import React from "react";
import './CustomAudioRecoder.css'



import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";



class CustomAudioRecoder extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isPlayFlag: false,
            isLoadAudio: false,
            timeAudio: 0,
        }
        
        this.audio = new Audio(null)

        this.audio.preload = 'none'
        this.audio.oncanplaythrough = () => {
            this.setState({isLoadAudio: true})
            if (this.state.isPlayFlag) {
                this.interval = setInterval(() => this.setState({timeAudio: this.audio.currentTime}), 100)
            }
        }
         // при завершении кнопка паузы меняется на play,счетчик обнуляется и выключается
        this.audio.onended = () => {
            clearInterval(this.interval)
            this.setState({isPlayFlag: false, timeAudio: 0})
        }

        
    }

    componentWillUnmount() {
        this.audio.pause() // при переходе на другую страницу останавливаю звук
    }

    render() {
        return (
            <div className="custom-recoder">
                <p className="timer">{this.correctFormTime()}</p>
                <FaPlay className="play" style={{display: this.state.isPlayFlag ? 'none' : 'block'}} 
                onClick={() => {
                    this.audio.play()
                    this.setState({isPlayFlag: true}) // при клике на play эта кнопка исчезает и появляется кнопка pause, меняется флаг воспроизведения
                    if (this.state.isLoadAudio) {
                        this.interval = setInterval(() => this.setState({timeAudio: this.audio.currentTime}), 100) // обновляю состояние времени каждую секунду, если флаг воспроизведения true
                    } 
                    
                }} />
                <FaPause className="pause" style={{display: this.state.isPlayFlag && this.state.isLoadAudio ? 'block' : 'none'}} 
                onClick={() => {
                    this.audio.pause()
                    this.setState({isPlayFlag: false})
                    clearInterval(this.interval) // перестаю обновлять состояние
                }} />

                <AiOutlineLoading3Quarters className="loading" style={{display: this.state.isPlayFlag && !this.state.isLoadAudio ? "block" : "none"}}/>

                <div className="time-line"></div>
            </div>
        )
    }

    correctFormTime() {
        if (this.state.timeAudio % 60 < 10) {
            return `${Math.floor(this.state.timeAudio / 60)}:0${Math.floor(this.state.timeAudio) % 60}`
        } else if (this.state.timeAudio < 60) {
            return `${Math.floor(this.state.timeAudio / 60)}:${Math.floor(this.state.timeAudio) % 60}`
        } 

    }
}  

export default CustomAudioRecoder;