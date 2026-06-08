import { Link } from "react-router-dom";
import LogoImg from '../assets/Logo.svg'



export default function LogoButton({ height = "60px" }) {

    const ButtonStyle = {
        height: height , 
        display: "block",
    }

    return (
        <div>
            <Link style={{ background: "none", border: "none", outline: "none" }} to={"/"}>
                <img style={ButtonStyle} src={LogoImg}></img>
            </Link>
        </div>
    )
}