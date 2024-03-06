import React, { useState } from "react";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import AboutProductPage from "./Pages/AboutProductPage";



const productsDescription = [
    { 
        id: 1, 
        productName: 'Наушники', 
        price: '15 000', 
        photo: 'https://i.pinimg.com/originals/19/a5/6f/19a56f8a05d3c7a1152e961bb45f2847.jpg', 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores nam minus autem exercitationem vitae ut quos a facere veritatis quaerat, dolor tempore fugit sit. Cum reiciendis voluptatum tempora voluptas consequuntur recusandae optio iste, veniam, magni odit sequi? Eaque animi doloremque cumque rem blanditiis quas magni illo provident dolor excepturi voluptatum eveniet repellendus recusandae assumenda, ab minima non officia asperiores commodi. Maiores eligendi consequuntur aspernatur temporibus at repellat, labore nulla voluptatem ab! Ipsum nam fugit quibusdam laudantium sit voluptate veniam numquam! Accusamus delectus repellendus nisi quam aliquam expedita asperiores, modi saepe ab possimus quibusdam odit molestiae nobis obcaecati, vitae laudantium veritatis rem quos perspiciatis iste perferendis commodi voluptas at quisquam! Possimus doloribus nam obcaecati ab perspiciatis quos quasi modi explicabo, deleniti excepturi ipsa suscipit odit dolores. Repellat quae porro dolorum delectus assumenda totam asperiores accusamus temporibus voluptate iure. Repellat alias dignissimos neque eius minus obcaecati nulla. Quasi, dolor! Ipsam mollitia velit, molestiae voluptatem, rerum modi necessitatibus, ipsa nemo ratione labore unde harum perferendis veritatis facilis placeat. Vitae aut tempore eius aliquam perspiciatis est quam, ut natus sapiente vero excepturi rerum libero commodi impedit, veniam sequi accusamus hic optio delectus ipsum fugiat, voluptate laudantium repellat eos? Nesciunt beatae odio molestias ea.', 
        specifications: '' 
    },
    {
        id: 2,
        productName: 'Телефон',
        price: '20 000',
        photo: 'https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/124927/2_124927.jpg', 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores nam minus autem exercitationem vitae ut quos a facere veritatis quaerat, dolor tempore fugit sit. Cum reiciendis voluptatum tempora voluptas consequuntur recusandae optio iste, veniam, magni odit sequi? Eaque animi doloremque cumque rem blanditiis quas magni illo provident dolor excepturi voluptatum eveniet repellendus recusandae assumenda, ab minima non officia asperiores commodi. Maiores eligendi consequuntur aspernatur temporibus at repellat, labore nulla voluptatem ab! Ipsum nam fugit quibusdam laudantium sit voluptate veniam numquam! Accusamus delectus repellendus nisi quam aliquam expedita asperiores, modi saepe ab possimus quibusdam odit molestiae nobis obcaecati, vitae laudantium veritatis rem quos perspiciatis iste perferendis commodi voluptas at quisquam! Possimus doloribus nam obcaecati ab perspiciatis quos quasi modi explicabo, deleniti excepturi ipsa suscipit odit dolores. Repellat quae porro dolorum delectus assumenda totam asperiores accusamus temporibus voluptate iure. Repellat alias dignissimos neque eius minus obcaecati nulla. Quasi, dolor! Ipsam mollitia velit, molestiae voluptatem, rerum modi necessitatibus, ipsa nemo ratione labore unde harum perferendis veritatis facilis placeat. Vitae aut tempore eius aliquam perspiciatis est quam, ut natus sapiente vero excepturi rerum libero commodi impedit, veniam sequi accusamus hic optio delectus ipsum fugiat, voluptate laudantium repellat eos? Nesciunt beatae odio molestias ea.',
        specifications: ''
    },
    { 
        id: 3, 
        productName: 'Планшет', 
        price: '25 000', 
        photo: 'https://cdn.myshoptet.com/usr/www.pocitarna.cz/user/shop/orig/128153-2_apple-ipad-air-2-10.jpg?63d7a1dc', 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores nam minus autem exercitationem vitae ut quos a facere veritatis quaerat, dolor tempore fugit sit. Cum reiciendis voluptatum tempora voluptas consequuntur recusandae optio iste, veniam, magni odit sequi? Eaque animi doloremque cumque rem blanditiis quas magni illo provident dolor excepturi voluptatum eveniet repellendus recusandae assumenda, ab minima non officia asperiores commodi. Maiores eligendi consequuntur aspernatur temporibus at repellat, labore nulla voluptatem ab! Ipsum nam fugit quibusdam laudantium sit voluptate veniam numquam! Accusamus delectus repellendus nisi quam aliquam expedita asperiores, modi saepe ab possimus quibusdam odit molestiae nobis obcaecati, vitae laudantium veritatis rem quos perspiciatis iste perferendis commodi voluptas at quisquam! Possimus doloribus nam obcaecati ab perspiciatis quos quasi modi explicabo, deleniti excepturi ipsa suscipit odit dolores. Repellat quae porro dolorum delectus assumenda totam asperiores accusamus temporibus voluptate iure. Repellat alias dignissimos neque eius minus obcaecati nulla. Quasi, dolor! Ipsam mollitia velit, molestiae voluptatem, rerum modi necessitatibus, ipsa nemo ratione labore unde harum perferendis veritatis facilis placeat. Vitae aut tempore eius aliquam perspiciatis est quam, ut natus sapiente vero excepturi rerum libero commodi impedit, veniam sequi accusamus hic optio delectus ipsum fugiat, voluptate laudantium repellat eos? Nesciunt beatae odio molestias ea.', 
        specifications: '' 
    },
    { 
        id: 4, 
        productName: 'Телевизор', 
        price: '50 000', 
        photo: 'https://tv-price.com/images/PS/PS64D8000/d1a4/d/Samsung-PS64D8000-plasma-panel-2.jpg', 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores nam minus autem exercitationem vitae ut quos a facere veritatis quaerat, dolor tempore fugit sit. Cum reiciendis voluptatum tempora voluptas consequuntur recusandae optio iste, veniam, magni odit sequi? Eaque animi doloremque cumque rem blanditiis quas magni illo provident dolor excepturi voluptatum eveniet repellendus recusandae assumenda, ab minima non officia asperiores commodi. Maiores eligendi consequuntur aspernatur temporibus at repellat, labore nulla voluptatem ab! Ipsum nam fugit quibusdam laudantium sit voluptate veniam numquam! Accusamus delectus repellendus nisi quam aliquam expedita asperiores, modi saepe ab possimus quibusdam odit molestiae nobis obcaecati, vitae laudantium veritatis rem quos perspiciatis iste perferendis commodi voluptas at quisquam! Possimus doloribus nam obcaecati ab perspiciatis quos quasi modi explicabo, deleniti excepturi ipsa suscipit odit dolores. Repellat quae porro dolorum delectus assumenda totam asperiores accusamus temporibus voluptate iure. Repellat alias dignissimos neque eius minus obcaecati nulla. Quasi, dolor! Ipsam mollitia velit, molestiae voluptatem, rerum modi necessitatibus, ipsa nemo ratione labore unde harum perferendis veritatis facilis placeat. Vitae aut tempore eius aliquam perspiciatis est quam, ut natus sapiente vero excepturi rerum libero commodi impedit, veniam sequi accusamus hic optio delectus ipsum fugiat, voluptate laudantium repellat eos? Nesciunt beatae odio molestias ea.', 
        specifications: '' 
    },
    { 
        id: 5, 
        productName: 'Колонки', 
        price: '5 000', 
        photo: 'https://a.allegroimg.com/original/1166b5/f7b7f4fa4016ab2e20d34db21d6c/Genius-glosniki-2-0-SP-HF800A-20W-drewniane', 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores nam minus autem exercitationem vitae ut quos a facere veritatis quaerat, dolor tempore fugit sit. Cum reiciendis voluptatum tempora voluptas consequuntur recusandae optio iste, veniam, magni odit sequi? Eaque animi doloremque cumque rem blanditiis quas magni illo provident dolor excepturi voluptatum eveniet repellendus recusandae assumenda, ab minima non officia asperiores commodi. Maiores eligendi consequuntur aspernatur temporibus at repellat, labore nulla voluptatem ab! Ipsum nam fugit quibusdam laudantium sit voluptate veniam numquam! Accusamus delectus repellendus nisi quam aliquam expedita asperiores, modi saepe ab possimus quibusdam odit molestiae nobis obcaecati, vitae laudantium veritatis rem quos perspiciatis iste perferendis commodi voluptas at quisquam! Possimus doloribus nam obcaecati ab perspiciatis quos quasi modi explicabo, deleniti excepturi ipsa suscipit odit dolores. Repellat quae porro dolorum delectus assumenda totam asperiores accusamus temporibus voluptate iure. Repellat alias dignissimos neque eius minus obcaecati nulla. Quasi, dolor! Ipsam mollitia velit, molestiae voluptatem, rerum modi necessitatibus, ipsa nemo ratione labore unde harum perferendis veritatis facilis placeat. Vitae aut tempore eius aliquam perspiciatis est quam, ut natus sapiente vero excepturi rerum libero commodi impedit, veniam sequi accusamus hic optio delectus ipsum fugiat, voluptate laudantium repellat eos? Nesciunt beatae odio molestias ea.', 
        specifications: '' 
    },
    { 
        id: 6, 
        productName: 'Монитор', 
        price: '10 000', 
        photo: 'https://avatars.mds.yandex.net/get-mpic/96484/img_id5535838120757981496/300x400', 
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores nam minus autem exercitationem vitae ut quos a facere veritatis quaerat, dolor tempore fugit sit. Cum reiciendis voluptatum tempora voluptas consequuntur recusandae optio iste, veniam, magni odit sequi? Eaque animi doloremque cumque rem blanditiis quas magni illo provident dolor excepturi voluptatum eveniet repellendus recusandae assumenda, ab minima non officia asperiores commodi. Maiores eligendi consequuntur aspernatur temporibus at repellat, labore nulla voluptatem ab! Ipsum nam fugit quibusdam laudantium sit voluptate veniam numquam! Accusamus delectus repellendus nisi quam aliquam expedita asperiores, modi saepe ab possimus quibusdam odit molestiae nobis obcaecati, vitae laudantium veritatis rem quos perspiciatis iste perferendis commodi voluptas at quisquam! Possimus doloribus nam obcaecati ab perspiciatis quos quasi modi explicabo, deleniti excepturi ipsa suscipit odit dolores. Repellat quae porro dolorum delectus assumenda totam asperiores accusamus temporibus voluptate iure. Repellat alias dignissimos neque eius minus obcaecati nulla. Quasi, dolor! Ipsam mollitia velit, molestiae voluptatem, rerum modi necessitatibus, ipsa nemo ratione labore unde harum perferendis veritatis facilis placeat. Vitae aut tempore eius aliquam perspiciatis est quam, ut natus sapiente vero excepturi rerum libero commodi impedit, veniam sequi accusamus hic optio delectus ipsum fugiat, voluptate laudantium repellat eos? Nesciunt beatae odio molestias ea.', 
        specifications: '' 
    },
]

const tg = window.Telegram.WebApp
class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            id: 0
        }
    }
    
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage products={productsDescription} onClick={e => this.getValueId(e.target.id)}/>} > </Route>
                    <Route path="about-product" element={<AboutProductPage productProps={productsDescription[this.state.id - 1]}/>}></Route>
                </Routes>
            </BrowserRouter>
        );
    }

    getValueId(id) {
        this.setState({id: id})        
    }

}

export default App;
