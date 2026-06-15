import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./Styles/Profilo.css";
import UserDeafultIcon from '../assets/user-icon.svg'

import { UserContext } from "../contexts/UserContext";

export default function Profilo() {
  const [isClicked, setisClicked] = useState(false);
  const { user, loggedIn, setShowLogin, setloggedIn, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => {
    if (loggedIn)
      setisClicked(prev => !prev)
    else
      setShowLogin(true)
  }
  const handleLogOut = () => {
    setUser(null);
    setloggedIn(false);
  }


  return (

    <div className="dropdown-container">
      <button
        className="profilo-botton"
        onClick={handleClick}
      >
        <img src={user ? user?.avatar : UserDeafultIcon} alt="Profilo" />
      </button>
      {loggedIn && isClicked && (
        <div className="menu-dropdown">
          <ul className="menu-list">
            <li><button className="buttonP" onClick={() => navigate(`/user/${user.id}`, { state: { user } })}>Profilo</button></li>
            <li><button className="buttonP" onClick={() => console.log("Impostazioni")}>Impostazioni</button></li>
            <hr />
            <li><button className="buttonP" onClick={handleLogOut}>Logout</button></li>
          </ul>
        </div>
      )}
    </div>
  );
}
