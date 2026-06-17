import { Link, useNavigate } from "react-router-dom";
import "./Components.css";

export default function Card(
  {
    id = 0,
    userId = 0,
    title = "PlaceHolder",
    description = "PlaceHolder",
    category = 1,
    poster = "https://picsum.photos/seed/${encodeURIComponent(description)}/500/300",
    rating = 5,
    recensioni = 0,
    ricerca = ["non ricerca niente"],
    user = "Placeholder user",
    creato = "1/1/1999",
    userPic = "https://picsum.photos/seed/${encodeURIComponent(description)}/500/300",
    userName = `Mario Sony`,
  }
) {
  const skillData = { id, userId, title, description, category, poster, rating, recensioni, ricerca, user, creato, userPic, userName }
  const navigate = useNavigate();
  return (
    <div className="serviceCardWrapper">
      <button className="serviceCard" onClick={() => navigate(`/skill/${id}`, { state: { skillData } })}>
        <img
          className="serviceCardImage"
          src={poster}
          alt={description}
        />
        <div className="serviceCardContent">
          <div className="serviceCardSeller">
            <img
              className="serviceCardAvatar"
              src={userPic}
              alt={userName}
            />
            <p className="serviceCardUsername">
              {userName}
            </p>
          </div>
          <h2 className="serviceCardTitle">
            {title}
          </h2>
          <p className="serviceCardDescription">
            {description}
          </p>
          <div className="serviceCardRatingContainer">
            <span className="serviceCardRating">
              ⭐ {rating}
            </span>
            <span className="serviceCardReviews">
              ({recensioni})
            </span>
          </div>
          <div className="serviceCardTags">
            {ricerca.map((r, index) => (
              <span
                key={index}
                className="serviceCardTag"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </button>
    </div>
  );
}