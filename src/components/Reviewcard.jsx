import { useLocation } from "react-router-dom";

export default function Reviewcard({
recensione = "placeholder",
utenteR = "mario sony",
rating = 5,
})
{
 const location = useLocation();

    return(
        <div className="ReviewCard">
           <h1>{utenteR}</h1>
            <hr />
            <p>{recensione}</p>
            <p>⭐{rating}</p>
        </div>
    )

}