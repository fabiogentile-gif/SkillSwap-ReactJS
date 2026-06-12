export default function Reviewcard({
recensione = "placeholder",
utenteR = "mario sony",
rating = 5,
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