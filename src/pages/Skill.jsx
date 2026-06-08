import { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { remotePlaybackFeature } from "@videojs/react";
import FooterBox from "../components/FooterBox";
import Profilo from "../components/Profilo";

export default function Skill({
  titolo = "Placeholder title",
    nomeUser = "mario sony",
    recensioni = 0,
    poster,
    userPic = "https://picsum.photos/seed/${encodeURIComponent(description)}/500/300",
}) {
  return 
  <div className="SkillPage"> 
  <h1>{titolo}</h1> 
  <img id="miniProfile" src={userPic} alt="placeholder skill" /><p>{nomeUser}</p>
   
  </div>;
}
