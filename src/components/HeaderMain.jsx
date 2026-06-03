import './Styles/HeaderMain.css'
import NormalButton from './NormalButton'

export default function HeaderMain() {
    return (
        <>
            <div className='HeaderContainer'>
                <hr className='lineStyle' />
                <h1>
                    Trova la tua <strong className='HeaderBigText'>Skill</strong> per te
                </h1>
                <h4>Impara e condividi le tue skills</h4>
                <div style={{display:"flex",gap:"10%",justifyContent:"center"}}>
                    <NormalButton title={"Diventa uno Swapper"} color={"#00B4D8"} />
                    <NormalButton title={"Trova uno Swapper"} color={"#FFFFFF"} />
                </div>
                <hr className='lineStyle' />

            </div>

        </>
    )
}