import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <button className="card" onClick={() => navigate(`/skill/${id}`, { state: { skillData } })}>
        <img className="poster" src={poster} alt={description} />
        <hr />
        <div className="profileRow">
          <img id="miniProfile" src={userPic} alt="placeholder skill" /><p className="nomePro">{userName}</p>
          <h2>{title}</h2>
        </div>
        <p className="cardDesc">{description}</p>
        <p style={{ display: "inline" }}>
          ⭐{rating} ({recensioni})
        </p>
        {ricerca.map((r, index) => (
          <span key={index}>{r}</span>

        ))}
      </button>
    </div>
  );
}