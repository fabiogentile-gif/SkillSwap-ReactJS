import { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import MainCatButton from "../components/MainCategoryButton";
import NavBar from "../components/NavBar";
import HeaderMain from "../components/HeaderMain";
import FooterBox from "../components/FooterBox";
import VideoPlayer from "../components/VideoPlayer";
import { UserContext } from "../contexts/UserContext"
import LoginController from "../components/LoginController";

export default function Home() {


  return (
    <>
      <LoginController />


      <NavBar />

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
