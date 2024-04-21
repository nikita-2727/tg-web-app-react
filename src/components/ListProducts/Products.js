import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './Products.css'

import UnvisibleCount from "./UnvisibleCount";
import CustomAudioRecoder from "./CustomAudioRecoder";


export class Product extends React.Component {
    render() {
        return (
            <div id={"product-cell-" + this.props.productProps.id} className="product-cell">
                
                <Link to="about-product" > 
                    <img id={this.props.productProps.id} onClick={this.props.onClick} src={this.props.productProps.photo} className="product-photo" alt={this.props.productProps.name}></img>
                </Link>
                <div className="name-music">
                    <p>{this.props.productProps.productname}</p>
                </div>
                
                <CustomAudioRecoder src={this.props.productProps.music} />
                <UnvisibleCount productProps={this.props.productProps} productsInCart={this.props.productsInCart} mode={this.props.mode}/>
            </div>
        )
    }

}

function ListPerformers(props) {
    const [isVisible, valueChange] = useState(false)


    const performers = [
        '21 Savage', 'Baby Tron', 'Big30', 'BossMan Dlow', 
        'Est Gee', 'GetRichZay', 'Key Glock', 'Lil Baby', 'Lil Durk',
        'Nardo Wick', 'Rio Da Yang Og', 'Rob49', 'YTB Fatt',
    ]

    let index = 0
    const performersComponents = []
    for (let performer of performers) {
        performersComponents.push(<a key={index} className={performer.replaceAll(' ', '-') + ' performer-button'} onClick={(e) => {
            e.stopPropagation() // убираем обработчик клика родительского элемента с дочернего
            let idLabel = e.target.className.split(' ')[0]
            let element = document.getElementById(idLabel)
            element.scrollIntoView()
            window.scroll({top: window.pageYOffset - 50})
        }}>{performer}</a>)
        index++
    }

    return(
        <>
            <div className="performer-block" onClick={() => {
                let element = document.getElementsByClassName('performer-block')[0]
                if (!isVisible) {
                    element.style.overflow = 'visible'
                    element.style.height = 'auto'
                    valueChange(true)
                } else {
                    element.style.overflow = 'hidden'
                    element.style.height = 'calc(var(--index) * 5)'
                    valueChange(false)
                }
            }}>{performersComponents.map(performerComponent => performerComponent)}</div>
        </>
        
    )
}

function LabelMusic(props) {
    const performers = [
        '21 Savage', 'Baby Tron', 'Big30', 'BossMan Dlow', 
        'Est Gee', 'GetRichZay', 'Key Glock', 'Lil Baby', 'Lil Durk',
        'Nardo Wick', 'Rio Da Yang Og', 'Rob49', 'YTB Fatt',
    ]

    let label = '' 

    for (let index_performer = 0; index_performer < performers.length; index_performer++ ) {
        if (props.index == 0 && props.productProps[props.index].productname.includes(performers[index_performer])) {
            label = performers[index_performer]
            break
        }
        if (props.productProps[props.index].productname.includes(performers[index_performer]) && !(props.productProps[props.index - 1].productname).includes(performers[index_performer])) {
            label = performers[index_performer]
            break
        }
    }
    if (label) {
        return (
            <>
                <div className="label-block">
                    <span className="label " id={label.replaceAll(' ', '-')}>{label}</span>
                </div>
            </>
        )
    }
}



function ListProducts(props) {
    const [dataInCart, changeData] = useState(undefined)

    useEffect(() => {
        // получаем данные из корзины, чтобы знать какой рендерить unvisibleCount
        fetch('http://localhost:3001/api/cart', {method: 'GET'})
        .then(data => data.json())
        .then(data => changeData(data))
    }, [])

    setTimeout(() => console.log(dataInCart), 1000)
    console.log(props.products)

    const listProductComponent = []
    if (dataInCart) { // если данные с бд получены
        for (let index = 0; index < props.products.length; index++) {
            
            if (LabelMusic({key: -index-1, productProps: props.products, index: index})) {
                listProductComponent.push(<LabelMusic key={-index - 1} productProps={props.products} index={index}></LabelMusic>)
            }
        
            let fuckingFlag = false
            // добавляю в массив компоненты товаров и передаю словарь со свойствами каждого товара в каждую компоненту по отдельности
            for (let indexCart = 0; indexCart < dataInCart.length; indexCart++) {
                if (dataInCart[indexCart].productname == props.products[index].productname) {
                    // если данные товара из корзины совпадают с рендерируемым, то передаем мод куплено
                    listProductComponent.push(<Product key={index} productProps={props.products[index]} onClick={props.onClick} mode='sold'/>)
                    fuckingFlag = true
                    break
                } 
            } if (!fuckingFlag) {
                listProductComponent.push(<Product key={index} productProps={props.products[index]} onClick={props.onClick} mode={undefined}/>)
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

export default ListProducts;
