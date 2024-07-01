import { Link } from "react-router-dom";
import './Main.css'

export default function Main(props) {
    window.sumCounterProduct()
    return (
        <>
            <Link to="detroit" onClick={() => {
                localStorage.setItem('page', JSON.stringify('/detroit'))
            }}>
                <img className="menu-button" src="https://i.postimg.cc/j2mpg9kQ/maxresdefault-3.jpg"></img>
            </Link>
            <Link to="trap" onClick={() => {
                localStorage.setItem('page', JSON.stringify('/trap'))
            }}>
                <img className="menu-button" src="https://i.postimg.cc/y6cc2N1v/maxresdefault-4.jpg"></img>
            </Link>
            <Link to="drill" onClick={() => {
                localStorage.setItem('page', JSON.stringify('/drill'))
            }}>
                <img className="menu-button" src="https://i.postimg.cc/SKTN7kv9/maxresdefault-1.jpg"></img>
            </Link>
            <Link to="jersey" onClick={() => {
                localStorage.setItem('page', JSON.stringify('/jersey'))
            }}>
                <img className="menu-button" src="https://i.postimg.cc/mZnWgz2z/maxresdefault-2.jpg"></img>
            </Link>
        </>

    )
}