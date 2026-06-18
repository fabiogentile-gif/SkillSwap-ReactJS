import "./Components.css";
import { Link, Navigate, useNavigate} from "react-router-dom";
import {  } from "react-router-dom";
export default function NormalButton({ title, color }) {
  const ButtonStyle = {
    background: color,
    borderRadius: "20px",
    border: "1px solid black",
    width: "18em",
    height: "3em",
    display: "grid",
    alignContent: "center",
  };
 const navigate = useNavigate();
  return (
    
    <>
      <button style={ButtonStyle} onClick={() => navigate(`/skillPage`)}>
        {title}
      </button>
    </>
  );
}
