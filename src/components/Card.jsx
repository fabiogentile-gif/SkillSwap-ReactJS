import placeholderSkill from "../img/placeholderProf.png";
export default function Card({
  description = "PlaceHolder",
  poster = `https://picsum.photos/seed/${encodeURIComponent(description)}/500/300`,
  rating = 5,
  recensioni = 0,
  ricerca = "Placeholder ricerca",
  user = "Placeholder user",

}) {
  return (
    
      
        <button className="card" onClick={() => alert('palle')}>
      <img className="poster" src={poster} alt={description} />
      <hr />
      <div className="profileRow">
        <img
          id="miniProfile"
          src={placeholderSkill}
          alt="placeholder skill"
        />
        <h2>{user}</h2>
      </div>
      <p>{description}</p>
      <p>⭐{rating} ({recensioni})</p>
      <p>{ricerca}</p>
    </button>
   
  );
}