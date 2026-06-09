import { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { remotePlaybackFeature } from "@videojs/react";
import FooterBox from "../components/FooterBox";
import Profilo from "../components/Profilo";
import VideoPlayer from "../components/VideoPlayer";
import NormalButton from "../components/NormalButton";
import { useLocation } from "react-router-dom";

export default function Skill() {
  const location = useLocation();
  const {skillData} =  location.state;
  return (
    <div className="SkillPageContainer">
      <div className="Skilldess">
        <h1>{skillData.title}</h1>
        <div className="SkillProfileRow">
        <img id="ProfileSkill" src={skillData.userPic} alt="placeholder skill" />
        <p className="nomePro">{skillData.userName}</p>
        </div>
        <p className="nomePro">⭐{skillData.rating}({skillData.recensioni})</p>
        <hr />
        <img className="poster" src={skillData.poster} alt="Skill Immage" />
        <hr />
        <div className="SkillButton">
          <NormalButton title={"Lascia una recensione"} />
          <NormalButton title={"Metti tra i preferiti"} />
          <NormalButton title={"Inizia a Chattare"} />
        </div>
        <div className="SkillText">
          <p>
            {skillData.description}
          </p>
        </div>
      </div>

      <div className="SkillAds">
        <img className="poster" src={skillData.poster} alt="Advertisment" />
      </div>
    </div>
  );
}
