export default function Reviewcard({
recensione = "placeholder",
utenteR = "mario sony",
rating = 5,
userPic = "https://picsum.photos/seed/${encodeURIComponent(description)}/500/300",
})
{
    return(
        <div className="ReviewCard">
         <div className="SkillProfileRow">
          <img
            id="ReviewPic"
            src={userPic}
            alt="placeholder skill"
          />
           <h1>{utenteR}</h1>
           </div>
            <hr />
            <p>{recensione}</p>
            <p>⭐{rating}</p>
        </div>
    )

}