import { Link } from 'react-router-dom';

import './Styles/MainCategory.css'
import informaticaImg from '../assets/monitor-icon.svg'
import lingueImg from '../assets/language-icon.svg'
import arteImg from '../assets/brush-icon.svg'
import musicaImg from '../assets/musicnote-icon.svg'
import socialiImg from '../assets/user-icon.svg'
import artigianatoImg from '../assets/ruler-icon.svg'
import { useState,useEffect } from 'react';

function MainCatButton() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/categories")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const icons = {
        monitor: informaticaImg,
        language: lingueImg,
        pencil: arteImg,
        music: musicaImg,
        person: socialiImg,
        tool: artigianatoImg
    };

    return (
        <div className='cardsWrapper'>
            <div className='cardsContainer'>
                {data.map(data => (
                    <Link className='CatButton' to={data.nome + "/"} key={data.id}>
                        <img style={{ marginTop: '50px' }} src={icons[data.icona]} alt={data.nome}></img>
                        <br />
                        <p style={{ marginTop: '30px' }} >{data.nome}</p>
                    </Link>
                ))}

            </div>
        </div>
    )
}



export default MainCatButton