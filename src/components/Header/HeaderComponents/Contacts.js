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
            <Header selectedPage={3}/>

                <div className="others">
                    <span className="header-contacts">Others: </span>
                    <ul className="list-others">
                        <li>
                            <span className="subtitle">TG Chanel:</span> 
                            <span className="link">https://t.me/VeeZee666prod</span>
                        </li> 
                        <li>
                            <span className="subtitle">VK Community:</span>
                            <span className="link">https://vk.com/iitsbig092mlboa</span>
                        </li>
                        <li>
                            <span className="subtitle">Web site:</span> 
                            <span className="link">https://gendcidmusic.ru</span>
                        </li>
                    </ul>
                </div>

                <div className="creators">
                    <span className="header-contacts">Contact information: (The creators)</span>

                    <div className="ceo">
                        <span className="ceo-header">CEO: Shmyglia Mikhail (Lil VeeZee)</span>
                        <ul className="list-ceo">
                            <li><FaPhoneSquare /> - +7 919-829-10 86</li>
                            <li><MdEmail /> - LilVeeZee666@gmail.com</li>
                            <li><FaTelegram /> - https://t.me/VeeZee666prodby</li>
                            <li><FaInstagramSquare /> - https://www.instagram.com/prod_by_veezee?igsh=NnhlZGo2cWt3Ym94&utm_source=qr</li>
                            <li><FaVk /> - https://vk.com/lil_veezee</li>
                            <li><FaTwitterSquare /> (Now X) - https://x.com/Prod_by_VeeZee</li>
                        </ul>
                    </div>
                                        
                    <div className="mgmt">
                        <span className="mgmt-header">Full Stack Developer (MGMT)</span>
                        <ul className="list-mgmt">
                            <li><FaPhoneSquare /> - +7 917-329-08 10</li>
                            <li><MdEmail /> - provotorovnikita@gmail.com</li>
                            <li><FaTelegram /> - https://t.me/n200p_7</li>
                            <li><FaVk /> - https://vk.com/n207p</li>
                        </ul>

                    </div>
                    
                </div>

                <div className="cooperation">
                    <span className="header-contacts">Contact information: (Cooperation)</span>

                    <div className="young-bimpie">
                        <span className="young-bimpie-header">Young Bimpie (Prod. by GodDamnBimpieDisShiHard)</span>
                        <ul className="list-young-bimpie">
                            <li><FaHeadphones /> - https://beatstars.com/youngbimpie2023</li>
                            <li><FaPhoneSquare /> - +7 960-350-84 70</li>
                            <li><MdEmail /> - Youngbimpie.14@gmail.com</li>
                            <li><FaInstagramSquare /> - https://www.instagram.com/goddamnbimpie?igsh=OGVuODk2OG8zdWF6</li>
                        </ul>
                    </div>
                    
                    <div className="thekillingmachinebeats">
                        <span className="header-contacts">THEKILLINGMACHINEBEATS (prod.by KillingMachine)</span>
                        <ul className="list-thekillingmachinebeats">
                            <li><FaHeadphones /> - beatstars.com/thekillingmachinebeat</li>
                            <li><MdEmail /> - prodthekillingmachine@gmail.com</li>
                            <li><FaInstagramSquare /> - https://www.instagram.com/thekillingmachinebeat?igsh=MXFmbG0zdGwwbjc0aw==</li>
                        </ul>
                    </div>
                    
                </div>

            <ButtonBack />
        </div>
    )
}