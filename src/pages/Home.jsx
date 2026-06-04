import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import MainCatButton from "../components/MainCategoryButton";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import PopolariBanner from "../components/PopolariBanner";
import Card from "../components/Card";
import HeaderMain from "../components/HeaderMain";
import FooterBox from "../components/FooterBox";
import SkillPage from "./SkillPage";
import VideoPlayer from "../components/VideoPlayer";
import LoginPopUp from "../components/LoginPopUp";
import LoginForm from "../components/LoginForm";

export default function Home() {

  const [showLogin, setShowLogin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [pages, setPages] = useState("Login");

  const firstPopUp = !isLogged && showLogin

  useEffect(() => {
    setShowLogin(true);
  }, []);

  const handleProfileClick = () => {
    if (!isLogged) {
      setShowLogin(true);
      return;
    }
  }


  return (
    <>
      {firstPopUp && (
        <LoginPopUp
          onClose={() => setShowLogin(false)}
          onLogin={() => { setShowLogin(false); setIsLogged(true); }}
          onClickEmail={() => { setPages("LoginForm"); setShowLogin(false); }} 
          />
      )}
      {pages === "LoginForm" && (
        <LoginForm 
        onClose={() => {setPages("Login");setShowLogin(true)}} 
        onSubmit={() => { setShowLogin(false); setIsLogged(true); }} 
        />
      )}

      <NavBar isLogged={isLogged} onProfileClick={handleProfileClick} />

      <div>
        <HeaderMain />
      </div>
      <div className="bodyContainer">
        <div className="cards-container" style={{ marginTop: "40px" }}>
          <MainCatButton
            title="Informatica"
            icon="informatica"
            to="/informatica"
          />
          <MainCatButton title="Arte" icon="arte" to="/arte" />
          <MainCatButton title="Musica" icon="musica" to="/musica" />
          <MainCatButton title="Artigianato" icon="artigianato" to="/artigianato" />
          <MainCatButton title="Sociali" icon="sociali" to="/Sociali" />
        </div>
        <div className="tutorialContainer">
          <p>Come funziona SKILLSWAP</p>
          <VideoPlayer />
        </div>
      </div>
      <FooterBox />
    </>
  );
}
