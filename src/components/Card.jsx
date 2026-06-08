export default function Card({
  id = 0,
  userId = 0,
  title = "PlaceHolder",
  description = "PlaceHolder",
  category = 1,
  poster = `https://picsum.photos/seed/${encodeURIComponent(description)}/500/300`,
  rating = 5,
  recensioni = 0,
  ricerca = ["non ricerca niente"],
  user = "Placeholder user",
  creato = "1/1/1999",
  userPic = `https://picsum.photos/seed/${encodeURIComponent(description)}/500/300`,
  userName = `Mario Sony`,
})
 {
  return (
    <div>
      {console.log(ricerca)}
      <div className="card" onClick={() => alert("palle")}>
        <img className="poster" src={poster} alt={description} />
        <hr />
        <div className="profileRow">
          <img id="miniProfile" src={userPic} alt="placeholder skill" /><p>{userName}</p>
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
        <p style={{display:"inline"}}>
          ⭐{rating} ({recensioni})
        </p>
        {ricerca.map((r, index) => (
          <span key={index}>{r}</span>
  
        ))}
      </div>
    </div>
  );
}
