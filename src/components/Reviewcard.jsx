export default function Reviewcard({
recensione = "placeholder",
utenteR = "mario sony",
rating = 5,
userPic = "https://picsum.photos/seed/${encodeURIComponent(description)}/500/300",
})
{
    return(
        <div className="ReviewCard">
           <h1>{utenteR}</h1>
            <hr />
            <p>{recensione}</p>
            <p>⭐{rating}</p>
        </div>
    )

}