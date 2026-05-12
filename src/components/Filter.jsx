import 'bootstrap/dist/css/bootstrap.min.css' 

export default function Filter({type}){
return(
    <>
    <button className="btn btn-success m-2">{type}</button>
    </>
)
}