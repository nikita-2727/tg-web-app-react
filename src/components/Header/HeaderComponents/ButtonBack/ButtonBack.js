import { Link } from "react-router-dom"
import { HOST_CLIENT } from "../../../../env"
import './ButtonBack.css'

export default function ButtonBack({path='/'}) {
    let data
    if ((JSON.parse(localStorage.getItem('page')) == '/') || window.location.href == HOST_CLIENT + '/trap' ||  window.location.href == HOST_CLIENT + '/detroit' || window.location.href == HOST_CLIENT + '/jersey' ||  window.location.href == HOST_CLIENT + '/drill') {
        data = 'Back to the menu'
    }
    else data = 'Back to the products'
    return (
        <Link to={path} className="button-back" id="back">
            <span>{data}</span>
        </Link >
    )
}