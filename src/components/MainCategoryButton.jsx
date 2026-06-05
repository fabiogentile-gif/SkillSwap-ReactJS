import { Link } from 'react-router-dom';

import './Components.css'
import informaticaImg from '../assets/monitor-icon.svg'
import lingueImg from '../assets/language-icon.svg'
import arteImg from '../assets/brush-icon.svg'
import musicaImg from '../assets/musicnote-icon.svg'
import socialiImg from '../assets/user-icon.svg'
import artigianatoImg from '../assets/ruler-icon.svg'

function MainCatButton({ title = "informatica", icon = "informatica", to}) {

    const icons = {
        informatica: informaticaImg,
        lingue: lingueImg,
        arte: arteImg,
        musica: musicaImg,
        sociali: socialiImg,
        artigianato: artigianatoImg
    };
    return (
        <>
            <div className='container'>
                <Link className='CatButton' to={to}>
                    <img style={{ marginTop: '50px' }} src={icons[icon]} alt={title}></img>
                    <br />
                    <p style={{ marginTop: '30px' }} >{title}</p>
                </Link>
            </div>
        </>
    )
}



export default MainCatButton