import '../Styles/LoginForm.css';
import loginimg from '../../assets/imageLogin.svg';
import UserDeafultIcon from '../../assets/user-icon.svg'

import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function RegistrationForm({ onCloseBig, onClose, onClickLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");

    const [error, setError] = useState("");

    const { setUser, setloggedIn } = useContext(UserContext);

    // VALIDAZIONE PASSWORD SEPARATAMENTE
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);


    // async function handleRegister() {

    //     const passwordValid =
    //         hasMinLength &&
    //         hasUpperCase &&
    //         hasLowerCase &&
    //         hasNumber;

    //     if (!passwordValid) {
    //         return;
    //     }

    //     const newUser = {
    //         username,
    //         firstName,
    //         lastName,
    //         email,
    //         password,
    //         avatar: UserDeafultIcon,
    //         joinedAt: new Date().toISOString().split("T")[0]
    //     };

    //     console.log("Nuovo utente:", newUser);

    //     setUser(newUser);
    //     setloggedIn(true);
    // }

    async function handleRegister() {
        const newUser = {
            username,
            firstName,
            lastName,
            email,
            password,
            avatar: UserDeafultIcon,
            joinedAt: new Date().toISOString().split("T")[0],
            bio: "",
            rating: 0.0,
            reviewCount: 0
        };

        try {
            const response = await fetch("/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error("Errore nella registrazione");
            }


            const data = await response.json();
            console.log("Utente creato:", data);

            setUser(newUser);
            setloggedIn(true);

        } catch (error) {
            console.error(error);
        }
    }



    return (
        <div className="overlayreg" onClick={onCloseBig}>
            <div
                className="popup-FormRegcontainer"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="close-btn" onClick={onClose}>
                    ← Back
                </button>

                <div className="image-section">
                    <img src={loginimg} alt="Login" />
                </div>

                <div className="content-section">
                    <h2>Registrati con la tua email</h2>

                    <form className='formContainer' onSubmit={(e) => {
                        e.preventDefault();
                        handleRegister();
                    }}>
                        <div className='RowNameContainer'>
                            <div className='NameContainer'>
                                <label>First Name</label>
                                <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className='NameContainer'>
                                <label>Last Name</label>
                                <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div className='UsernameContainer'>
                            <label>Username</label>
                            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className='EmailContainer'>
                            <label>Email</label>
                            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='PasswordContainer'>
                            <label>Password</label>
                            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <ul style={{ marginTop: "10px" }}>
                                <li className={hasMinLength ? "valid" : "invalid"}>
                                    {hasMinLength ? "✓ " : "✖ "} Almeno 8 caratteri
                                </li>

                                <li className={hasUpperCase ? "valid" : "invalid"}>
                                    {hasUpperCase ? "✓ " : "✖ "}Almeno una lettera maiuscola
                                </li>

                                <li className={hasLowerCase ? "valid" : "invalid"}>
                                    {hasLowerCase ? "✓ " : "✖ "}Almeno una lettera minuscola
                                </li>

                                <li className={hasNumber ? "valid" : "invalid"}>
                                    {hasNumber ? "✓ " : "✖ "}Almeno un numero
                                </li>
                            </ul>
                        </div>
                        <button className="submit-btn" type="submit">
                            Conferma
                        </button>
                    </form>
                    <hr />

                    <button className="google-btn">
                        Continua con Google
                    </button>

                    <p>Hai già un account? <span
                        onClick={onClickLogin}
                        style={{
                            color: "black",
                            textDecoration: "underline",
                            cursor: "pointer",
                        }}
                    >Accedi
                    </span></p>
                </div>
            </div>
        </div>
    );
}