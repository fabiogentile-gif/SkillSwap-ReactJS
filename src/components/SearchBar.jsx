import './Components.css'
import searchIcon from '../assets/magnifer-icon.svg'
import { useState } from 'react';

export default function SearchBar() {
    const [text, setText] = useState('')

    const handleClick = () => {
        console.log(text);
    };

    return (
        <>
            <form className='searchContainer'>
                <input type="text" placeholder="Search..." onChange={(e) => setText(e.target.value)} value={text}></input>
                <button onClick={handleClick} type="button">
                    <img src={searchIcon} />
                </button>
            </form>
        </>
    );
}
