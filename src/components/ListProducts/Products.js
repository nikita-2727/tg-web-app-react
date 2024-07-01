import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './Products.css'
import infoPage from "../../info";
import UnvisibleCount from "./UnvisibleCount";
import CustomAudioRecoder from "./CustomAudioRecoder";
import { FaArrowDown } from "react-icons/fa6";
import { HOST_SERVER_API } from "../../env"


export class Product extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            music: undefined
        }
    }
    render() {
        return (
            <div id={"product-cell-" + this.props.productProps.id} className="product-cell">
                
                <Link to="/audio-recoder" > 
                    <img id={this.props.productProps.id} onClick={this.props.onClick} src={this.props.productProps.photo} className="product-photo" alt={this.props.productProps.name}></img>
                </Link>
                <div className="name-music">
                    <p>{this.props.nameAndExecutor[0]}</p>
                </div>
                
                <CustomAudioRecoder src={this.props.productProps.music} toParent={(music) => {
                    this.setState({
                        music: music,
                    }, () => {
                        this.props.toGrandParent(this.state.music)
                    })
                    
                }} id={this.props.productProps.id} />
                <UnvisibleCount productProps={this.props.productProps} price={this.props.price} mode={this.props.mode}/>
            </div>
        )
    }

}

function ListPerformers(props) {
    const [isVisible, valueChange] = useState(false)
    const info = infoPage((window.location.href).split('/').at(-1))
    const performersAndButtonImg = info[0]

    let index = 0
    const performersComponents = []
    for (let performer of performersAndButtonImg) {
        performersComponents.push(<img key={index} className={performer.name.replaceAll(' ', '-') + ' performer-button'} 
        src={performer.url}
        onClick={(e) => {
            e.stopPropagation() // убираем обработчик клика родительского элемента с дочернего
            let idLabel = e.target.className.split(' ')[0]
            let element = document.getElementById(idLabel)
            element.scrollIntoView()
            window.scroll({top: window.pageYOffset - 30})
        }}></img>)
        index++
    }

    return(
        <>
            <div className="performer-block" >
                {performersComponents.map(performerComponent => performerComponent)}
            </div>

            <div className="open-block" onClick={() => {
                let element = document.getElementsByClassName('performer-block')[0]
                let button = document.getElementsByClassName('open-block')[0]
                if (!isVisible) {
                    button.style.borderRadius = '100% 100% 0 0'
                    button.style.transform = 'rotate(180deg)'
                    element.style.overflow = 'visible'
                    element.style.height = 'auto'
                    valueChange(true)
                } else {
                    button.style.borderRadius = '0 0 100% 100%'
                    button.style.transform = 'rotate(0)'
                    element.style.overflow = 'hidden'
                    element.style.height = 'calc(var(--index) * 5)'
                    valueChange(false)
                }
            }}><FaArrowDown className="open"/></div>
        </>
        
    )
}



function LabelMusic(props) {
    const info = infoPage((window.location.href).split('/').at(-1))
    const performersAndLabelImg = info[1]

    let labelUrl = '' 
    let labelName = ''

    for (let index_performer = 0; index_performer < performersAndLabelImg.length; index_performer++ ) {
        if (props.index == 0 && props.productProps[props.index].productname.includes(performersAndLabelImg[index_performer].name)) {
            labelUrl = performersAndLabelImg[index_performer].url
            labelName = performersAndLabelImg[index_performer].name
            break
        }
        // если исполнитель этого товара не совпадает с исполнителем предыдущего, то рендерим фотографию-разделитель категории
        if (props.productProps[props.index].productname.includes(performersAndLabelImg[index_performer].name) && !(props.productProps[props.index - 1].productname).includes(performersAndLabelImg[index_performer].name)) {
            labelUrl = performersAndLabelImg[index_performer].url
            labelName = performersAndLabelImg[index_performer].name
            break
        }
    }
    if (labelUrl) {
        return (
            <>
                <div className="label-block">
                    <img src={labelUrl} className="label-img" id={labelName.replaceAll(' ', '-')}></img>
                </div>
            </>
        )
    }
}



function ListProducts(props) {
    const [dataInCart, changeData] = useState(undefined)
    const [musicPlay, changeMusicPlay] = useState(undefined)

    // const [id, changeId] = useState(undefined)

    useEffect(() => {
        // получаем данные из корзины, чтобы знать какой рендерить unvisibleCount
        fetch(HOST_SERVER_API + 'cart', {method: 'GET'})
        .then(data => data.json())
        .then(data => changeData(data))

        
    }, [])

    useEffect(() => {
        // если покупатель перешел на другую страницу и перешел обратно к продуктам, то перематываем его к тому месту, где он остановился
        scrollByY(localStorage.getItem('scroll-products'), 100)
    }, [])




    const listProductComponent = []
    if (dataInCart) { // если данные с бд получены
        
        for (let index = 0; index < props.products.length; index++) {
            let nameAndExecutor = newName(props.products[index].productname)
            
            if (LabelMusic({key: -index-1, productProps: props.products, index: index})) {
                listProductComponent.push(<LabelMusic key={-index - 1} productProps={props.products} index={index}></LabelMusic>)
            }
        
            let fuckingFlag = false
            // добавляю в массив компоненты товаров и передаю словарь со свойствами каждого товара в каждую компоненту по отдельности
            for (let indexCart = 0; indexCart < dataInCart.length; indexCart++) {
                if (dataInCart[indexCart].productname == props.products[index].productname) {
                    // если данные товара из корзины совпадают с рендерируемым, то передаем мод куплено
                    listProductComponent.push(<Product nameAndExecutor={nameAndExecutor} key={index} 
                        productProps={props.products[index]} onClick={props.onClick} price={dataInCart[indexCart].price} mode='sold'/>)
                    fuckingFlag = true
                    break
                } 
            } if (!fuckingFlag) {
                listProductComponent.push(<Product nameAndExecutor={nameAndExecutor} key={index} 
                    productProps={props.products[index]} onClick={props.onClick} price={undefined} mode={undefined}
                    toGrandParent={(music) => {
                        if (musicPlay != undefined && musicPlay != music) {
                            musicPlay.pause()
                            // let pause = document.getElementsByClassName(`pause-${id}`)[0]
                            // let play = document.getElementsByClassName(`play-${id}`)[0]
                            // pause.style.display = 'none'
                            // play.style.display = 'block'
                            // console.log('dsd')
                        }
                        changeMusicPlay(music)
                        // changeId(props.products[index].id)
  
                    }} />)
            }
        }
    }

    return (
        <>
            <ListPerformers />
            {listProductComponent.map(productComponent => productComponent)}
        </>
    )
}

function newName(name) {
    /* функция для кастомного отображения названий битов */
    const info = infoPage((window.location.href).split('/').at(-1))
    const lstDelStr = info[2]

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
// важная функция
async function scrollByY(y, time) {
    /* функция для плавного скролла */
    const start = performance.now()
    const startY = window.scrollY
    const endY = startY + y
    while (performance.now() < start + time) {
      const progress = (performance.now() - start) / time
      window.scrollTo(0, startY + y * progress)
      // wait for the next frame
      await new Promise(requestAnimationFrame)
    }
    window.scrollTo(0, endY)
  }

export default ListProducts;
