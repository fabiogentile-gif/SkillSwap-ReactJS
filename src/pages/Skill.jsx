import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Profilo from "../components/Profilo";
import VideoPlayer from "../components/VideoPlayer";
import NormalButton from "../components/NormalButton";
import { useLocation } from "react-router-dom";
import Reviewcard from "../components/Reviewcard";

export default function Skill() {
  const [user, setUser] = useState([]);
  const [review, setReview] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const location = useLocation();
  const { skillData } = location.state;

  useEffect(() => {
    async function getReview() {
      setIsLoading(true);
      try {
        const resUser = await fetch(`/api/users`);
        if (!resUser.ok) {
          throw new Error("Fetch Fallita");
        }
        const users = await resUser.json();
        setUser(users);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    getReview();
  }, []);

  useEffect(() => {
    async function getReview() {
      setIsLoading(true);
      try {
        const resRev = await fetch(`/api/reviews?serviceId=${skillData.id}`);
        if (!resRev.ok) {
          throw new Error("Fetch Fallita");
        }
        const reviewData = await resRev.json();
        const filtro = reviewData.filter(
          (rev) => rev.serviceId === Number(skillData.id),
        );
        setReview(filtro);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    getReview();
  }, []);

  return (
    <div className="SkillPageContainer">
      <div className="Skilldess">
        <h1>{skillData.title}</h1>
        <div className="SkillProfileRow">
          <img
            id="ProfileSkill"
            src={skillData.userPic}
            alt="placeholder skill"
          />
          <p className="nomePro">{skillData.userName}</p>
          <p className="nomePro">
            ⭐{skillData.rating}({skillData.recensioni})
          </p>
        </div>

        <hr />
        <img
          className="PosterSkill"
          src={skillData.poster}
          alt="Skill Immage"
        />
        <hr />
        <div className="SkillButton">
          <NormalButton title={"Lascia una recensione"} />
          <NormalButton title={"Metti tra i preferiti"} />
          <NormalButton title={"Inizia a Chattare"} />
        </div>
        <div className="SkillText">
          <p>{skillData.description}</p>
        </div>
        <div className="SkillReview">
          {review.length === 0 ? (
            <p>Nessuna recensione per questa skill al momento. 📝</p>
          ) : (
            review.map((rev) => (
              <Reviewcard
                key={rev.id}
                recensione={rev.comment}
                utenteR={
                  user.find((utente) => utente.id === rev.userId)?.username
                }
                rating={rev.rating}
                userPic={user.find((pic) => pic.id === rev.userId)?.avatar}
              />
            ))
          )}
        </div>
      </div>
      <div className="SkillAds">
        <img
          className="poster"
          src="https://picsum.photos/1900/1080"
          alt="Advertisment"
        />
      </div>
    </div>
  );
}
