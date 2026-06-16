import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import './Styles/UserPage.css'

import PopolariBanner from '../components/PopolariBanner'
import Card from '../components/Card'

export default function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [skillsData, setSkillsData] = useState([]);
  const [userData, setUserData] = useState(null);


  useEffect(() => {
    async function getUser() {
      try {
        const [resSkill, resUser] = await Promise.all([
          fetch(`/api/services`),
          fetch(`/api/users/${id}`)
        ]);

        const skills = await resSkill.json();
        const user = await resUser.json();

        const userSkills = skills.filter(
          skill => skill.userId === user.id
        );

        setUserData(user);
        setSkillsData(userSkills);

      } catch (err) {
        console.error(err);
      }
    }

    getUser();
  }, [id]);

  if (!skillsData || !userData) return <p>Caricamento...</p>;


  return (
    <div className="PageContainer">

      <div className="UserProfileCard">

        <div className="UserHeader">

          <img
            className="UserAvatar"
            src={userData.avatar}
            alt={userData.username}
          />

          <div className="UserMainInfo">

            <div className="UserNames">
              <h2>{userData.firstName}</h2>
              <span>@{userData.username}</span>
            </div>

            <div className="UserRating">
              ⭐ {userData.rating || "4.9"} ({userData.reviewCount || 0} recensioni)
            </div>

          </div>

        </div>

        <div className="UserBioSection">
          <h4>Chi sono</h4>
          <p>{userData.bio}</p>
        </div>

      </div>

      <main className="UserContent">

        <h3>Servizi pubblicati</h3>

        <div className="ServicesGrid">

          {skillsData.map(skill => (
            <button key={skill.id} className="ServiceCard" onClick={() => navigate(`/skill/${skill.id}`, { state: { skillsData } })}>

              <img
                src={skill.poster}
                alt={skill.title}
                className="ServiceImage"
              />

              <div className="ServiceBody">

                <h5>{skill.title}</h5>

                <p>
                  {skill.description.slice(0, 80)}...
                </p>

                <div className="ServiceFooter">
                  ⭐ {skill.rating}
                </div>

              </div>

            </button>
          ))}

        </div>

      </main>

    </div>
  );
}
