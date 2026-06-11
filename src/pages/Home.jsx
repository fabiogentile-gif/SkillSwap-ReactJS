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
import NormalButton from "../components/NormalButton";
import { Link } from "react-router-dom";
export default function Home() {

return (
    <>
      <LoginController />
      <div>
        <HeaderMain />
      </div>
      <div className="bodyContainer">
        <div className="cards-container" style={{ marginTop: "40px" }}>
          <MainCatButton />
        </div>
        <div className="tutorialContainer">
          <p>Come funziona SKILLSWAP</p>
          <VideoPlayer />
        </div>
      </div>

    </>
  );
}
