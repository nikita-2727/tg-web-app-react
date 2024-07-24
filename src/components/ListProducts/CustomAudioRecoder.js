import React from "react";
import ReactDOM from 'react-dom';
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

            isToParent: false,
            isOnEnded: false,
            timeLineIndicator: 0,
        }
        

        const Music = require('../../music' + JSON.parse(localStorage.getItem('page')) + '/' + this.props.src)

        this.audio = new Audio(Music)

        this.audio.preload = 'none'
        this.audio.oncanplaythrough = () => {
            this.setState({isLoadAudio: true})
            if (this.state.isPlayFlag) {
                this.interval = setInterval(() => {
                    const timeLineWidth = document.getElementsByClassName('time-line')[0].clientWidth
                    const pxInSecond = timeLineWidth / this.audio.duration
                    this.setState({
                        timeAudio: this.audio.currentTime,
                        timeLineIndicator: (this.audio.currentTime * pxInSecond)
                    })
                }, 100)
            }
        }
         // при завершении кнопка паузы меняется на play,счетчик обнуляется и выключается
        this.audio.onended = () => {
            clearInterval(this.interval)
            this.interval = undefined
            this.setState({isPlayFlag: false, isOnEnded: true})
        }
    }

    componentWillUnmount() {
        this.audio.pause() // при переходе на другую страницу останавливаю звук
    }

    render() {
        return (
            <div className="custom-recoder">
                <p className="timer">{this.correctFormTime()}</p>
                <FaPlay className={`play ${'play-' + this.props.id}`} style={{display: this.state.isPlayFlag ? 'none' : 'block'}} 
                onClick={() => {
                    if (this.state.isOnEnded) this.setState({timeAudio: 0, isOnEnded: false})
                    this.audio.play()
                     // при клике на play эта кнопка исчезает и появляется кнопка pause, меняется флаг воспроизведения
                    const timeLineWidth = document.getElementsByClassName('time-line')[0].clientWidth
                    const pxInSecond = timeLineWidth / this.audio.duration
                    if (this.state.isLoadAudio) {
                        this.interval = setInterval(() => {
                            this.setState({
                                timeAudio: this.audio.currentTime,
                                timeLineIndicator: (this.audio.currentTime * pxInSecond)
                            })
                        }, 100) // обновляю состояние времени каждую секунду, если флаг воспроизведения true
                    } 

                    this.setState({isPlayFlag: true}, () => {
                        if (!this.state.isToParent) {
                            this.props.toParent(this.audio) // передаем аудио и флаг воспроизведения в Products.js
                            this.setState({isToParent: true})
                        }
                    })
                    
                }} />
                <FaPause className={`pause ${'pause-' + this.props.id}`} style={{display: this.state.isPlayFlag && this.state.isLoadAudio ? 'block' : 'none'}} 
                onClick={() => {
                    this.audio.pause()
                    this.setState({
                        isPlayFlag: false, 
                        isToParent: false
                    })
                    clearInterval(this.interval) // перестаю обновлять состояние
                    this.interval = undefined
                }} />

                <AiOutlineLoading3Quarters className="loading" style={{display: this.state.isPlayFlag && !this.state.isLoadAudio ? "block" : "none"}}/>

                <div className={"time-line " + `time-line-${this.props.id}`} onClick={(e) => this.timeLineCoordinate(e.clientX)}>
                    <img src="https://i.postimg.cc/k4Dmgdsw/93-1.png" id={`indicator-${this.props.id % 2}`} 
                    style={{left: `calc(${this.state.timeLineIndicator}px - 4vw)`}}></img>
                </div>
            </div>
        )
    }

    timeLineCoordinate(x) {
        clearInterval(this.interval)
        this.interval = undefined
        const timeLine = document.getElementsByClassName('time-line-' + this.props.id)[0]
        const timeLineWidth = timeLine.clientWidth

        const domNode = ReactDOM.findDOMNode(timeLine);
        const rectRightTimeLineX = domNode.getBoundingClientRect().x
    
        const pxInSecond = timeLineWidth / this.audio.duration
        const realX = x - rectRightTimeLineX
        for (let second = 0; second < this.audio.duration; second++) {
            if (pxInSecond * second > realX) {
                if (this.state.isPlayFlag) {
                    this.audio.currentTime = second
                } else {
                    this.audio.currentTime = second
                    this.setState({isPlayFlag: false}, () => {
                        this.audio.pause()
                    })
                }
                
                this.setState({timeAudio: second, timeLineIndicator: pxInSecond * second})
                break
            }
        }
        

    }

    correctFormTime() {
        if (this.state.timeAudio % 60 < 10) {
            return `${Math.floor(this.state.timeAudio / 60)}:0${Math.floor(this.state.timeAudio) % 60}`
        } else if (this.state.timeAudio < 60 || this.state.timeAudio % 60 >= 10) {
            return `${Math.floor(this.state.timeAudio / 60)}:${Math.floor(this.state.timeAudio) % 60}`
        } 

    }
}  

export default CustomAudioRecoder;