import React from "react";
import UnvisibleCount from "../ListProducts/UnvisibleCount";
import './AudioRecoder.css'

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ImNext } from "react-icons/im";
import { ImPrevious } from "react-icons/im";

import { FaChevronDown } from "react-icons/fa";
import { ImLoop } from "react-icons/im";
import { TbArrowsShuffle } from "react-icons/tb";


import { Link } from "react-router-dom";





class AudioRecoder extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dataProduct: JSON.parse(localStorage.getItem("dataProducts"))[JSON.parse(localStorage.getItem("indexProduct"))],
            isPlayFlag: false,
            isLoadAudio: false,
            timeAudio: 0,
            durationAudio: 0,

            isLoopAudio: false,
            isMixingAudio: false,
        }

        this.newAudioAndPostServerQuery()
    }

    componentWillUnmount() {
        this.audio.pause() // при размонтировании компонента выключаем музыку
    }
    

    render() {
        return (
            <div className="audio-block">
                <Link to='/'>
                    <FaChevronDown className="back-icon" />
                </Link>
                

                <img className="image-player" src={this.state.dataProduct.photo}></img>
                <div className="name-executor-block">
                    <p className="name-player">{newName(this.state.dataProduct.productname)[0]}</p>
                    <p className="executor-player">{newName(this.state.dataProduct.productname)[1]}</p>
                </div>


                
                <div className="custom-recoder">
                    <p className="timer">{CorrectFormTime(Math.floor(this.state.timeAudio))}</p>
                    <p className="total-timer">{CorrectFormTime(Math.floor(this.state.durationAudio))}</p>

                    <FaPlay className="play" style={{display: !this.state.isPlayFlag && this.state.isLoadAudio ? 'block' : 'none'}} 
                    onClick={() => {
                        this.audio.play()
                        this.setState({isPlayFlag: true}) // при клике на play эта кнопка исчезает и появляется кнопка pause, меняется флаг воспроизведения
                        if (this.state.isLoadAudio) {
                            // обновляю состояние времени каждую секунду, если флаг загрузки true
                            this.interval = setInterval(() => this.setState({timeAudio: this.audio.currentTime}), 100) 
                        } 
                        
                    }} />

                    <FaPause className="pause" style={{display: this.state.isPlayFlag && this.state.isLoadAudio ? 'block' : 'none'}} 
                    onClick={() => {
                        this.audio.pause()
                        this.setState({isPlayFlag: false})
                        clearInterval(this.interval) // перестаю обновлять состояние
                    }} />

                    <AiOutlineLoading3Quarters className="loading" style={{display: !this.state.isPlayFlag && !this.state.isLoadAudio ? "block" : "none"}}/>

                    <div className="time-line" onClick={() => {
                        this.audio.currentTime = 100
                        this.setState({timeAudio: 100})
                    }}></div>

                    <ImPrevious className="next-icon" onClick={() => {this.nextPreviousMusic(-1)}} />
                    <ImNext className="previous-icon" onClick={() => {this.nextPreviousMusic(1)}} />

                    <ImLoop className="loop-icon" style={{color: this.state.isLoopAudio ? 'black' : 'whitesmoke'}} onClick={() => {
                        // т к состояние изменяется асинхронно, то помещаем код, зависящтй от него в функцию обратного вызова
                        this.setState({isLoopAudio: !this.state.isLoopAudio}, () => { 
                            this.state.isLoopAudio ? this.audio.loop = true : this.audio.loop = false
                        })
                    }}/>
                    <TbArrowsShuffle className="mix-icon" style={{color: this.state.isMixingAudio ? 'black' : 'whitesmoke'}} onClick={() => {
                        this.setState({isMixingAudio: !this.state.isMixingAudio})
                    }}/>

                </div>



                
            </div>
        )
    }


    nextPreviousMusic(index) {
        if (!this.state.isMixingAudio) {
            localStorage.setItem('indexProduct', JSON.stringify(+JSON.parse(localStorage.getItem("indexProduct")) + index))
        } else {
            let randomIndex = Math.floor(Math.random() * JSON.parse(localStorage.getItem('dataProducts')).length)
            localStorage.setItem('indexProduct', JSON.stringify(randomIndex))
        }
        
        // т к состояние изменяется асинхронно, то помещаем код, зависящтй от него в функцию обратного вызова
        this.setState({
            dataProduct: JSON.parse(localStorage.getItem("dataProducts"))[JSON.parse(localStorage.getItem("indexProduct"))],
            isPlayFlag: false,
            isLoadAudio: false,
            timeAudio: 0,
            durationAudio: 0,
        }, () => {
            this.audio.pause()
            this.newAudioAndPostServerQuery()
        })
    }

    newAudioAndPostServerQuery() {
        this.audio = new Audio(this.state.dataProduct.music)

        this.audio.preload = 'auto'
        this.audio.oncanplaythrough = () => {// если аудио загружено, меняем состояние и запускаем таймер
            this.setState({durationAudio: this.audio.duration})
            this.setState({isLoadAudio: true, isPlayFlag: true}, () => {
                if (this.state.isPlayFlag) {this.interval = setInterval(() => {this.setState({timeAudio: this.audio.currentTime})}, 100)}
            })
            
            this.audio.play()
        }
         // при завершении кнопка паузы меняется на play,счетчик обнуляется и выключается
        this.audio.onended = () => {
            clearInterval(this.interval)
            this.audio.pause()
            this.setState({isPlayFlag: false, timeAudio: 0}, () => {
                if (this.state.isLoopAudio) {
                    return
                } else {
                    this.nextPreviousMusic(1)
                }
            })
        }
    }
}


function CorrectFormTime(timeAudio) {
    if (timeAudio % 60 < 10) {
        return `${Math.floor(timeAudio / 60)}:0${timeAudio % 60}`
    } else if (timeAudio < 60) {
        return `${Math.floor(timeAudio / 60)}:${timeAudio % 60}`
    } 

    return `${Math.floor(timeAudio / 60)}:${timeAudio % 60}`
}

function newName(name) {
    /* функция для кастомного отображения названий битов */
    let lstDelStr = [
        '21 Savage ', 'Baby Tron ', 'Big30 ', 'BossMan Dlow ', 'Est Gee ', 'GetRichZay ', 'Key Glock ', 'Lil Baby ',
        'Lil Durk ', 'Nardo Wick ', 'Rio Da Yang Og ', 'Rob49 ', 'YTB Fatt '
    ]

    let newName = name
    let executor = undefined
    for (let s of lstDelStr) {
        if (newName.includes(s)) {
            newName = newName.replace(s, '')
            executor = s
        }
    }

    return [newName, executor]
}

export default AudioRecoder;
