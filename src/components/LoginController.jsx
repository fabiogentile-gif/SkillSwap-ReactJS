import { useEffect, useState, useContext } from "react";
import LoginForm from "./Login/LoginForm";
import LoginPopUp from "./Login/LoginPopUp";
import RegistrationForm from "./Login/RegistrationForm";
import { UserContext } from "../contexts/UserContext";

export default function LoginController() {
    const { loggedIn, setShowLogin, showLogin, firstTimeShown, setFirstTimeShown, pages, setPages } = useContext(UserContext);


    const firstPopUp = !loggedIn && showLogin

    useEffect(() => {
        if (!loggedIn && !firstTimeShown) {
            const timer = setTimeout(() => {
                setShowLogin(true);
                setFirstTimeShown(true);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <div>
            {firstPopUp && !loggedIn && (
                <LoginPopUp
                    onClose={() => setShowLogin(false)}
                    onClickEmail={() => { setPages("LoginForm"); setShowLogin(false); }}
                />
            )}

            {pages === "LoginForm" && !loggedIn && (
                <LoginForm
                    onClose={() => { setPages("Login") }}
                    onClickRegister={() => { setPages("RegistrationForm") }}
                />
            )}

            {pages === "RegistrationForm" && !loggedIn && (
                <RegistrationForm
                    onCloseBig={() => setPages(null)}
                    onClose={() => setPages("Login") }
                    onClickLogin={() => setPages("LoginForm")}
                />
            )}
        </div>


    )
}