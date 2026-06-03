import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MainCatButton from "./components/MainCategoryButton";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import PopolariBanner from "./components/PopolariBanner";
import Card from "./components/Card";
import HeaderMain from "./components/HeaderMain";
import FooterBox from "./components/FooterBox";
import SkillPage from "./SkillPage"

export default function Home(){
      return (
    <>
      <NavBar />

      <div>
        <HeaderMain />
      </div>

      <div className="cards-container" style={{ marginTop: "40px" }}>
        <MainCatButton title="Informatica" icon="informatica" to="/informatica"></MainCatButton>
        <MainCatButton title="Arte" icon="arte" to="/informatica"></MainCatButton>
        <MainCatButton title="Musica" icon="musica" to="/informatica"></MainCatButton>
        <MainCatButton title="Artigianato" icon="artigianato" to="/informatica"></MainCatButton>
        <MainCatButton title="Sociali" icon="sociali" to="/Sociali"></MainCatButton>
      </div>
      <hr></hr>
      <FooterBox></FooterBox>
    </>
  );
}