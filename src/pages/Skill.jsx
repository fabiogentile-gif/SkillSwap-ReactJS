import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./Styles/Skill.css"

import NormalButton from "../components/NormalButton.jsx";
import Reviewcard from "../components/Reviewcard.jsx"

export default function Skill() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [skillData, setSkillData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getSkill() {
      try {
        const resSkill = await fetch(`/api/services/${id}`);
        const resUsers = await fetch(`/api/users`);

        if (!resSkill.ok || !resUsers.ok) {
          throw new Error("Fetch fallita");
        }

        const skill = await resSkill.json();
        const users = await resUsers.json();

        setSkillData(skill);
        setUser(users);

        const owner = users.find(
          u => u.id === skill.userId
        );

        setUserData(owner);

      } catch (err) {
        console.error(err);
      }
    }

    getSkill();
  }, [id]);

  useEffect(() => {
    async function getReview() {
      setIsLoading(true);
      try {
        const resRev = await fetch(`/api/reviews?serviceId=${id}`);

        if (!resRev.ok) {
          throw new Error("Fetch Fallita");
        }

        const reviewData = await resRev.json();

        const filtro = reviewData.filter(
          rev => rev.serviceId === Number(id)
        );

        setReview(filtro);

      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    getReview();
  }, [id]);

  if (!skillData || !userData) return <p>Caricamento...</p>;

  return (
    <div className="SkillPageContainer">
      <div className="SkillMain">

        <h1>{skillData.title}</h1>

        <button
          className="SkillProfileRow"
          onClick={() =>
            navigate(`/user/${userData.id}`, { state: { userData } })
          }
        >
          <img id="ProfileSkill" src={userData.avatar} />

          <div className="SkillUserInfo">
            <p className="SkillName">
              {userData.firstName} @{userData.username}
            </p>

            <p className="SkillRating">
              ⭐ {skillData.rating} ({skillData.reviewCount} recensioni)
            </p>
          </div>
        </button>

        <img className="PosterSkill" src={skillData.poster} />

        <div className="SkillButton">
          <NormalButton title="Lascia una recensione" />
          <NormalButton title="Metti tra i preferiti" />
          <NormalButton title="Inizia a Chattare" />
        </div>

        <div className="SkillText">
          <h2>Descrizione</h2>
          <p>{skillData.description}</p>
        </div>

        <div className="SkillReview">
          <h2>Recensioni</h2>

          {review.length === 0 ? (
            <p>Nessuna recensione per questa skill al momento.</p>
          ) : (
            review.map((rev) => (
              <Reviewcard
                key={rev.id}
                recensione={rev.comment}
                utenteR={
                  user.find((utente) => utente.id === rev.userId)?.username ||
                  "Utente sconosciuto"
                }
                rating={rev.rating}
                userPic={user.find((pic) => pic.id === rev.userId)?.avatar}
              />
            ))
          )}
        </div>
      </div>

      <div className="SkillAds">
        <div className="AdCard">
          <span className="AdLabel">Sponsor</span>

          <img
            src="https://picsum.photos/400/800"
            alt="Advertisement"
          />
        </div>
      </div>
    </div>
  );
}