import { Link } from "react-router-dom"
import './ButtonBack.css'

export default function ButtonBack() {
    return (
        <Link to='/' className="button-back">
            <span>Back to the products</span>
        </Link >
    )
}