import { useState, useContext } from 'react';
import { UserContext } from "../contexts/UserContext";
import SearchBar from './SearchBar';
import Profilo from "./Profilo";
import AccessButton from "./AccessButton";

import './Styles/NavBar.css'
import LogoImg from '../assets/Logo.svg'

export default function NavBar() {
    const { loggedIn } = useContext(UserContext);

    return (
        <>
            <div className='navbarContainer'>
                <button style={{ background: "none", border: "none", outline: "none" }} onClick={() => console.log("Go to MainPage")}>
                    <img src={LogoImg}></img>
                </button>
                <SearchBar />
                {!loggedIn ?
                    <AccessButton />
                    :
                    <Profilo />
                }

            </div>

        </>
    );
}
