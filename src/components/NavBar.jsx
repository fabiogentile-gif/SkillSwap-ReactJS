import './Components.css'
import SearchBar from './SearchBar';
import UserIcon from './UserProfile'
import LogoImg from '../assets/Logo.svg'
import { useState } from 'react';


export default function NavBar() {
    return (
        <>
            <div className='navbarContainer'>
                <button style={{ background: "none", border: "none", outline: "none" }} onClick={() => console.log("Go to MainPage")}>
                    <img src={LogoImg}></img>
                </button>
                <SearchBar />
                <UserIcon />

            </div>

        </>
    );
}
