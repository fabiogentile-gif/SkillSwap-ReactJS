import './Styles/LoginForm.css';
import loginimg from '../assets/imageLogin.svg';

export default function LoginForm({ onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="popup-container"
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
              <input type='email' />
            </div>
            <div className='PasswordContainer'>
              <label>Password</label>
              <input type='password' />

            </div>
            <button className="submit-btn">
              Conferma
            </button>
          </form>
          <hr/>

          <button className="google-btn">
            Continua con Google
          </button>

          <p>Se non hai un account Registrati</p>
        </div>
      </div>
    </div>
  );
}