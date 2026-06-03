import { useState } from "react";

export default function Profilo({ img = "https://picsum.photos/id/237/200/300" }) {
  const [isClicked, setisClicked] = useState(false);
  return (

    <div className="dropdown-container">
      <button
        className="profilo-botton"
        onClick={() => setisClicked(!isClicked)}
      >
        <img src={img} alt="Profilo" />
      </button>
      
      {isClicked && (
        <div className="menu-dropdown">
          <ul className="menu-list">
            <li>
              <button className="buttonP" onClick={() => console.log("Profilo")}>Profilo</button>
            </li>
            <li>
              <button className="buttonP" onClick={() => console.log("Impostazioni")}>Impostazioni</button>
            </li>
            <hr />
            <li>
              <button className="buttonP" onClick={() => console.log("Logout")}>Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
