import { Link } from "react-router-dom"
import './ButtonBack.css'

export default function ButtonBack({path='/'}) {
    return (
        <Link to={path} className="button-back">
            <span>Back to the products</span>
        </Link >
    )
}