import { useState } from "react";
import "./Styles/Profilo.css";
import UserDeafultIcon from '../assets/user-icon.svg'

export default function Profilo({ isLogged, onProfileClick, img = UserDeafultIcon }) {
  const [isClicked, setisClicked] = useState(false);

  const handleClick = () => {
    if(!isLogged){
      onProfileClick()
      return
    }
    setisClicked(prev => !prev)
  }


  return (

    <div className="dropdown-container">
      <button
        className="profilo-botton"
        onClick={handleClick}
      >
        <img src={img} alt="Profilo" />
      </button>
      {isLogged && isClicked && (
        <div className="menu-dropdown">
          <ul className="menu-list">
            <li><button className="buttonP" onClick={() => console.log("Profilo")}>Profilo</button></li>
            <li><button className="buttonP" onClick={() => console.log("Impostazioni")}>Impostazioni</button></li>
            <hr />
            <li><button className="buttonP" onClick={() => console.log("Logout")}>Logout</button></li>
          </ul>
        </div>
      )}
    </div>
  );
}
