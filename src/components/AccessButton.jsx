import { useContext } from "react";
import './Components.css'
import { UserContext } from "../contexts/UserContext";

export default function AccessButton({ color }) {

    const { setShowLogin, setPages } = useContext(UserContext);

    const ButtonStyle = {
        background: color,
        borderRadius: "20px",
        border: "1px solid black",
        width: "10em",
        height: "3em",
        display: "grid",
        alignContent: "center",
    }

    function HandleAccess() {
        setShowLogin(true)
    }
    function HandleRegistration() {
        setPages("RegistrationForm")
    }

    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <button style={{ ...ButtonStyle, background: "#ffffff" }} onClick={HandleRegistration}>Registrati</button>
            <button style={{ ...ButtonStyle, background: "#00B4D8" }} onClick={HandleAccess}>Accedi</button>
        </div>
    )
}