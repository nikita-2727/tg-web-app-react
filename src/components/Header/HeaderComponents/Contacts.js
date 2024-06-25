import Header from "../Header";
import ButtonBack from "./ButtonBack/ButtonBack";
import { FaTelegram } from "react-icons/fa6";
import { FaPhoneSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { FaVk } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import './Contacts.css'

export default function Contacts() {
    return (
        <div className="contacts-page">
            <Header selectedPage={3} photo={getPhoto()}/>

                <div className="others">
                    <span className="header-contacts">Others: </span>
                    <ul className="list-others">
                        <li>
                            <span className="subtitle">TG Chanel:</span> 
                            <a href="https://t.me/VeeZee666prod" className="link">https://t.me/VeeZee666prod</a>
                        </li> 
                        <li>
                            <span className="subtitle">VK Community:</span>
                            <a href="https://vk.com/iitsbig092mlboa" className="link">https://vk.com/iitsbig092mlboa</a>
                        </li>
                        <li>
                            <span className="subtitle">Web site:</span> 
                            <a href="https://gendcidmusic.ru" className="link">https://gendcidmusic.ru</a>
                        </li>
                    </ul>
                </div>

                <div className="creators">
                    <span className="header-contacts-creators">Contact information: (The creators)</span>

                    <div className="ceo">
                        <span className="ceo-header">CEO: Shmyglia Mikhail (Lil VeeZee)</span>
                        <ul className="list-ceo">
                            <li>
                                <FaPhoneSquare className="icon"/>
                                <span className="link">+7 919-829-10 86</span>
                            </li>
                            <li>
                                <MdEmail className="icon"/> 
                                <span className="link">LilVeeZee666@gmail.com</span>
                            </li>
                            <li>
                                <FaTelegram className="icon"/> 
                                <a href="https://t.me/VeeZee666prodby" className="link">https://t.me/VeeZee666prodby</a>
                            </li>
                            <li>
                                <FaInstagramSquare className="icon"/> 
                                <a href="https://www.instagram.com/prod_by_veezee?igsh=NnhlZGo2cWt3Ym94&utm_source=qr"
                                 className="link">https://www.instagram.com/prod_by_veezee?igsh=NnhlZGo2cWt3Ym94&utm_source=qr</a>
                            </li>
                            <li>
                                <FaVk className="icon"/> 
                                <a href="https://vk.com/lil_veezee" className="link">https://vk.com/lil_veezee</a>
                            </li>
                            <li>
                                <FaTwitterSquare className="icon"/> 
                                <a href="https://x.com/Prod_by_VeeZee" className="link">https://x.com/Prod_by_VeeZee</a> 
                            </li>
                        </ul>
                    </div>
                                        
                    <div className="mgmt">
                        <span className="mgmt-header">Full Stack Developer (MGMT) (Provotorov Nikita)</span>
                        <ul className="list-mgmt">
                            <li><FaPhoneSquare className="icon"/><span className="link">+7 917-329-08 10</span></li>
                            <li><MdEmail className="icon"/> <span className="link">provotorovnikita@gmail.com</span></li>
                            <li>
                                <FaTelegram className="icon"/> 
                                <a href="https://t.me/n200p_7" className="link">https://t.me/n200p_7</a>
                            </li>
                            <li>
                                <FaVk className="icon"/> 
                                <a href="https://vk.com/n207p"className="link">https://vk.com/n207p</a>
                            </li>
                        </ul>

                    </div>
                    
                </div>

                <div className="cooperation">
                    <span className="header-contacts">Contact information: (Cooperation)</span>

                    <div className="young-bimpie">
                        <span className="young-bimpie-header">Young Bimpie (Prod. by GodDamnBimpieDisShiHard)</span>
                        <ul className="list-young-bimpie">
                            <li>
                                <FaHeadphones className="icon"/> 
                                <a href="https://beatstars.com/youngbimpie2023" className="link">https://beatstars.com/youngbimpie2023</a>
                            </li>
                            <li>
                                <FaPhoneSquare className="icon"/> 
                                <span className="link">+7 960-350-84 70</span>
                            </li>
                            <li>
                                <MdEmail className="icon"/> 
                                <span className="link">Youngbimpie.14@gmail.com</span>
                            </li>
                            <li>
                                <FaInstagramSquare className="icon"/> 
                                <a href="https://www.instagram.com/goddamnbimpie?igsh=OGVuODk2OG8zdWF6"
                                className="link">https://www.instagram.com/goddamnbimpie?igsh=OGVuODk2OG8zdWF6</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="thekillingmachinebeats">
                        <span className="thekillingmachinebeats-header">THEKILLINGMACHINEBEATS (prod.by KillingMachine)</span>
                        <ul className="list-thekillingmachinebeats">
                            <li>
                                <FaHeadphones className="icon"/> 
                                <a href="beatstars.com/thekillingmachinebeat" className="link">beatstars.com/thekillingmachinebeat</a>
                            </li>
                            <li><MdEmail className="icon"/> <span className="link">prodthekillingmachine@gmail.com</span></li>
                            <li>
                                <FaInstagramSquare className="icon"/>
                                <a href="https://www.instagram.com/thekillingmachinebeat?igsh=MXFmbG0zdGwwbjc0aw==" 
                                className="link">https://www.instagram.com/thekillingmachinebeat?igsh=MXFmbG0zdGwwbjc0aw==</a></li>
                        </ul>
                    </div>
                    
                </div>

            <ButtonBack path={JSON.parse(localStorage.getItem('page'))}/>
        </div>
    )
}

function getPhoto() {
    let page = JSON.parse(localStorage.getItem('page'))
    if (page == '/') {
        return 'https://i.postimg.cc/BvLdbpb1/photo-2024-04-25-17-10-46-2.jpg'
    } else if (page == '/detroit') {
        return 'https://i.postimg.cc/j2mpg9kQ/maxresdefault-3.jpg'
    } else if (page == '/drill') {
        return 'https://i.postimg.cc/SKTN7kv9/maxresdefault-1.jpg'
    }
}