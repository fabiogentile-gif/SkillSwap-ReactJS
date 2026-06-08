import './Styles/NavBar.css'
import SearchBar from './SearchBar';
import UserIcon from './UserProfile'
import LogoImg from '../assets/Logo.svg'
import { useState } from 'react';
import Profilo from "./Profilo";
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <div className='navbarContainer'>
                <button style={{ background: "none", border: "none", outline: "none" }}>
                  <Link to="/"><img src={LogoImg}></img></Link>
                </button>
                <SearchBar />
                <UserIcon />
            </div>

        </>
    );
}
