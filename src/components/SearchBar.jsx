import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Components.css'
import searchIcon from '../assets/magnifer-icon.svg'


export default function SearchBar() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault();
        if (!search.trim()) return;

        // this will encode & symbols that may inadvertently be 
        // generated during data entry for character references or other characters 
        // that require encoding/decoding
        navigate(`/search?q=${encodeURIComponent(search)}`);
    }

    return (
        <>
            <form className='searchContainer' onSubmit={handleSubmit}>
                <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} value={search}></input>
                <button type="submit">
                    <img src={searchIcon} />
                </button>
            </form>
        </>
    );
}
