import BoxLink from "./BoxLink.jsx";
import "./Styles/Footer.css";
import LogoImg from "../assets/Logo.svg";
import Insta from "../assets/insta.png";
import Linkedin from "../assets/Linke.png";
import Tiktok from "../assets/TikToccati.png";
import FaceBook from "../assets/LibroFaccia.png";
const footerData = [
  {
    title: "Categorie",
    link: ["Informatica", "Arte", "Sociali", "Musica", "Artigianato", "Lingue"],
  },
  {
    title: "Per i Clienti",
    link: [
      "Info",
      "Centro Assistenza",
      "Opportunità Lavoro",
      "Termini di Servizio",
      "Partnership",
    ],
  },
  {
    title: "Per gli Swappers",
    link: ["Come Funziona", "Recensioni", "Guida alla Qualità", "Q&A"],
  },
  {
    title: "Azienda",
    link: ["Professionista", "Eventi", "Community", "Forum"],
  },
];

export default function FooterBox() {
  return (
    <div className="footerBox">
      <div className="infoBox">
        {footerData.map((X) => (
          <BoxLink links={X.link} title={X.title} />
        ))}
      </div>

      <hr/>
      <div className="underFooter">
        <button
          style={{
            background: "none",
            border: "none",
            outline: "none",
            display: "block",
          }}
          onClick={() => console.log("Go to MainPage")}
        >
          <img src={LogoImg} alt="logo" />
        </button>
        <div className="partnerLinks">
          <button>
            <img src={Insta} alt="instagram" />
          </button>
          <button>
            <img src={FaceBook} alt="facebook" />
          </button>
          <button>
            <img src={Tiktok} alt="tiktok" />
          </button>
          <button>
            <img src={Linkedin} alt="linkedin" />
          </button>
        </div>
      </div>
    </div>
  );
}
