import React from "react";
import './CustomAudioRecoder.css'

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";


class CustomAudioRecoder extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isPlayFlag: false,
            timeAudio: 0,
        }
        
        this.audio = new Audio(this.props.src)
         // при завершении кнопка паузы меняется на play,счетчик обнуляется и выключается
        this.audio.onended = () => {
            clearInterval(this.interval)
            this.setState({isPlayFlag: false, timeAudio: 0})
        }
    }



    render() {
        return (
            <div className="custom-recoder">
                <p className="timer">{this.correctFormTime()}</p>
                <FaPlay className="play" style={{display: this.state.isPlayFlag ? 'none' : 'block'}} 
                onClick={() => {
                    this.audio.play()
                    this.setState({isPlayFlag: true}) // при клике на play эта кнопка исчезает и появляется кнопка pause, меняется флаг воспроизведения
                    this.interval = setInterval(() => this.setState({timeAudio: this.state.timeAudio + 1}), 1000) // обновляю состояние времени каждую секунду, если флаг воспроизведения true
                }} />
                <FaPause className="pause" style={{display: !this.state.isPlayFlag ? 'none' : 'block'}} 
                onClick={() => {
                    this.audio.pause()
                    this.setState({isPlayFlag: false})
                    clearInterval(this.interval) // перестаю обновлять состояние
                }} />
                <div className="time-line"></div>
            </div>
        )
    }

    correctFormTime() {
        if (this.state.timeAudio % 60 < 10) {
            return `${Math.floor(this.state.timeAudio / 60)}:0${this.state.timeAudio % 60}`
        } else if (this.state.timeAudio < 60) {
            return `${Math.floor(this.state.timeAudio / 60)}:${this.state.timeAudio % 60}`
        } 

    }
}  

export default CustomAudioRecoder;