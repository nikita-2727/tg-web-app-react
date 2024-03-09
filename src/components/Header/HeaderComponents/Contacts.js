import Header from "../Header";
import ButtonBack from "./ButtonBack/ButtonBack";
import './Contacts.css'

export default function Contacts() {
    return (
        <div className="contacts-page">
            <Header selectedPage={3}/>


            <ButtonBack />
        </div>
    )
}