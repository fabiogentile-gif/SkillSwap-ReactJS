import './Components.css'
import { Link } from 'react-router-dom';
export default function NormalButton({ title, color }) {

    const ButtonStyle = {
        background: color,
        borderRadius: "20px",
        border: "1px solid black",
        width: "20em",
        height: "3em",
        display: "grid",
        alignContent: "center",
    }

    function goTO() {
        console.log("Goto page")
    }

    return (
        <>
            <button style={ButtonStyle} onClick={() => goTO()}>{title}
              <Link to="/"></Link>
              </button>
        </>
    )
}