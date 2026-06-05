import { useState } from 'react';
import SearchBar from './SearchBar';
import Profilo from "./Profilo";

import './Styles/NavBar.css'
import LogoImg from '../assets/Logo.svg'

export default function NavBar() {
    return (
        <>
            <div className='navbarContainer'>
                <button style={{ background: "none", border: "none", outline: "none" }} onClick={() => console.log("Go to MainPage")}>
                    <img src={LogoImg}></img>
                </button>
                <SearchBar />
                <Profilo />
            </div>

        </>
    );
}
