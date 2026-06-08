import { useState } from 'react';
import SearchBar from './SearchBar';
import Profilo from "./Profilo";
import { Link } from 'react-router-dom';

import './Styles/NavBar.css'
import LogoImg from '../assets/Logo.svg'

export default function NavBar() {
    return (
        <>
            <div className='navbarContainer'>
                <button style={{ background: "none", border: "none", outline: "none" }}>
                  <Link to="/"><img src={LogoImg}></img></Link>
                </button>
                <SearchBar />
                <Profilo />
            </div>

        </>
    );
}
