import '../Styles/LoginPopUp.css';
import loginimg from '../../assets/imageLogin.svg';

export default function LoginPopUp({ onClose,onClickEmail }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="popup-Formcontainer"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="image-section">
          <img src={loginimg} alt="Login" />
        </div>

        <div className="content-section">
          <h1>Benvenuto</h1>
          <h3>Accedi per continuare</h3>

          <button className="email-btn" onClick={onClickEmail}>
            Continua con Email
          </button>

          <button className="google-btn">
            Continua con Google
          </button>
        </div>
      </div>
    </div>
  );
}