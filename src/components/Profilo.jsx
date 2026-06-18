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

    <div className="userMenu">
      <button
        className="userMenuTrigger"
        onClick={handleClick}
      >
        <img
          src={user ? user.avatar : UserDeafultIcon}
          alt="Profilo"
          className="userMenuAvatar"
        />
      </button>

      {loggedIn && isClicked && (
        <div className="userMenuDropdown">

          <div className="userMenuHeader">
            <img
              src={user ? user.avatar : UserDeafultIcon}
              alt="Profilo"
              className="userMenuHeaderAvatar"
            />

            <div className="userMenuHeaderInfo">
              <span className="userMenuName">
                {user?.username}
              </span>

              <span className="userMenuSubtext">
                Account personale
              </span>
            </div>
          </div>

          <div className="userMenuDivider" />

          <button
            className="userMenuItem"
            onClick={() =>
              navigate(`/user/${user.id}`, {
                state: { user }
              })
            }
          >
            👤 Profilo
          </button>

          <button
            className="userMenuItem"
            onClick={() => console.log("Impostazioni")}
          >
            ⚙️ Impostazioni
          </button>

          <div className="userMenuDivider" />

          <button
            className="userMenuItem userMenuLogout"
            onClick={handleLogOut}
          >
            Esci
          </button>

        </div>
      )}
    </div>
  );
}
