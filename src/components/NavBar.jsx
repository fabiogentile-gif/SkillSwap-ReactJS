import { useState, useContext } from 'react';
import { UserContext } from "../contexts/UserContext";
import SearchBar from './SearchBar';
import Profilo from "./Profilo";
import AccessButton from "./AccessButton";
import LogoButton from './LogoButton';

import './Styles/NavBar.css'

export default function NavBar() {
    const { loggedIn } = useContext(UserContext);

    return (
        <>
            <div className='navbarContainer'>
                <LogoButton />
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
