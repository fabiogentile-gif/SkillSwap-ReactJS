import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './Styles/MainCategory.css'
import informaticaImg from '../assets/monitor-icon.svg'
import lingueImg from '../assets/language-icon.svg'
import arteImg from '../assets/brush-icon.svg'
import musicaImg from '../assets/musicnote-icon.svg'
import socialiImg from '../assets/user-icon.svg'
import artigianatoImg from '../assets/ruler-icon.svg'

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
        <div className="homepageCategories">
            {data.map((categoria) => (
                <Link
                    key={categoria.id}
                    to={`/categoria/${categoria.id}`}
                    className="homepageCategoryCard"
                >
                    <div className="homepageCategoryIcon">
                        <img
                            src={icons[categoria.icona]}
                            alt={categoria.nome}
                        />
                    </div>

                    <span className="homepageCategoryName">
                        {categoria.nome}
                    </span>
                </Link>
            ))}
        </div>
    )
}



export default MainCatButton