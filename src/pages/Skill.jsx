import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Profilo from "../components/Profilo";
import VideoPlayer from "../components/VideoPlayer";
import NormalButton from "../components/NormalButton";

export default function Skill() {
  const { id } = useParams();

  const [skillData, setSkillData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function getSkill() {
      try {
        const [resSkill, resUsers] = await Promise.all([
          fetch(`/api/services/${id}`),
          fetch(`/api/users`)
        ]);

        const skill = await resSkill.json();
        const users = await resUsers.json();

        setSkillData(skill);

        const user = users.find(u => u.id === skill.userId);
        setUserData(user);

      } catch (err) {
        console.error(err);
      }
    }

    getSkill();
  }, [id]);

  if (!skillData || !userData) return <p>Caricamento...</p>;

  return (
    <div className="SkillPageContainer">
      <div className="Skilldess">
        <h1>{skillData.title}</h1>

        <div className="SkillProfileRow">
          <img id="ProfileSkill" src={userData.avatar} />
          <p className="nomePro">{userData.userName}</p>
        </div>

        <p className="nomePro">
          ⭐ {skillData.rating} ({skillData.reviewCount})
        </p>

        <hr />

        <img className="PosterSkill" src={skillData.poster} />

        <hr />

        <div className="SkillButton">
          <NormalButton title="Lascia una recensione" />
          <NormalButton title="Metti tra i preferiti" />
          <NormalButton title="Inizia a Chattare" />
        </div>

        <div className="SkillText">
          <p>{skillData.description}</p>
        </div>
      </div>

      <div className="SkillAds">
        <img className="poster" src={skillData.poster} />
      </div>
    </div>
  );
}