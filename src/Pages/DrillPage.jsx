import ComingSoon from "./ComingSoon"
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

export default function DrillPage(props) {
    return (
        <>
            <ComingSoon />
            <Link to='/' style={{textDecoration: 'none'}}>
                <FaRegArrowAltCircleLeft 
                style={{position: "fixed", top: '89vh', left: '1vh', color: 'whitesmoke', height: '10vh', width: '10vh', 
                border: '4px solid black', borderRadius: '50%', backgroundColor: 'black'}}/>
            </Link>
        </>
    )
}