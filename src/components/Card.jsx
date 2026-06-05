export default function Card({
  id = 0,
  userId = 0,
  title = "PlaceHolder",
  description = "PlaceHolder",
  category = 1,
  poster = `https://picsum.photos/seed/${encodeURIComponent(description)}/500/300`,
  rating = 5,
  recensioni = 0,
  ricerca = ["placehondo"],
  user = "Placeholder user",
  creato = "1/1/1999",
}) {
  return (
    <div>
      {console.log(ricerca)}
      <button className="card" onClick={() => alert("palle")}>
        <img className="poster" src={poster} alt={description} />
        <hr />
        <div className="profileRow">
          <img id="miniProfile" src={poster} alt="placeholder skill" />
          <h2>{title}</h2>
        </div>
        <p>{description}</p>
        <p>
          ⭐{rating} ({recensioni})
        </p>
        {ricerca.map((r, index) => (
          <span key={index}>{r}</span>
  
        ))}
      </button>
    </div>
  );
}
