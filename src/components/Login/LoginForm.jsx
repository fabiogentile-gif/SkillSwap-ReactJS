import '../Styles/LoginForm.css';
import loginimg from '../../assets/imageLogin.svg';
import { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

export default function LoginForm({ onClose, onClickRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const { setloggedIn } = useContext(UserContext);

  const handleLogin = async () => {

    try {
      const response = await fetch("/api/users");

      const users = await response.json();

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        setUser(foundUser);
        setloggedIn(true);
      } else {
        alert("Utente non trovato");
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="popup-Formcontainer"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ← Back
        </button>

        <div className="image-section">
          <img src={loginimg} alt="Login" />
        </div>

        <div className="content-section">
          <h2>Continua con la tua email</h2>

          <form className='formContainer'>
            <div className='EmailContainer'>
              <label>Email</label>
              <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='PasswordContainer'>
              <label>Password</label>
              <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className="submit-btn" onClick={handleLogin} type="button">
              Conferma
            </button>
          </form>
          <hr />

          <button className="google-btn">
            Continua con Google
          </button>

          <p>
            Se non hai un account <span
              onClick={onClickRegister}
              style={{
                color: "black",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >Registrati
            </span></p>
        </div>
      </div>
    </div>
  );
}