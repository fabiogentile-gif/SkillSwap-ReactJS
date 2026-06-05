import { useEffect, useState, useContext } from "react";
import LoginForm from "./Login/LoginForm";
import LoginPopUp from "./Login/LoginPopUp";
import { UserContext } from "../contexts/UserContext";

export default function LoginController() {

    const [pages, setPages] = useState("Login");

    const { loggedIn, setShowLogin, showLogin } = useContext(UserContext);

    const firstPopUp = !loggedIn && showLogin

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogin(true);
        }, 1000)
        return () => clearTimeout(timer);

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
                    onClose={() => { setPages("Login"); setShowLogin(true) }}
                />
            )}
        </div>


    )
}