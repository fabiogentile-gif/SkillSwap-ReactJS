import { useState, useEffect } from 'react';
import CategoryButton from './CategoryButton'

const TEMI_CATEGORIA = {
  Informatica: {
    bgFrom: "#0a2e1a",
    bgTo: "#0f4d2c",
    accent: "#22c55e",
    patternColor: "rgba(34,197,94,0.12)",
    patternType: "binary",
  },

  Musica: {
    bgFrom: "#1a0a2e",
    bgTo: "#3b0764",
    accent: "#a855f7",
    patternColor: "rgba(168,85,247,0.12)",
    patternType: "waves",
  },

  Lingue: {
    bgFrom: "#0b1f2a",
    bgTo: "#134e4a",
    accent: "#14b8a6",
    patternColor: "rgba(20,184,166,0.12)",
    patternType: "grid",
  },

  Arte: {
    bgFrom: "#2a0b1f",
    bgTo: "#4c1d95",
    accent: "#ec4899",
    patternColor: "rgba(236,72,153,0.12)",
    patternType: "brush",
  },

  Sociali: {
    bgFrom: "#1f1f1f",
    bgTo: "#3f3f3f",
    accent: "#facc15",
    patternColor: "rgba(250,204,21,0.12)",
    patternType: "dots",
  },

  Artigianato: {
    bgFrom: "#2b1b0f",
    bgTo: "#5b3a1e",
    accent: "#d97706",
    patternColor: "rgba(217,119,6,0.12)",
    patternType: "wood",
  },
};

function getPattern(tipo, colore) {
  switch (tipo) {
    case "binary":
      return `
        <pattern id="pat" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <text x="5"  y="15" fill="${colore}" font-size="9" font-family="monospace">01101</text>
          <text x="30" y="30" fill="${colore}" font-size="9" font-family="monospace">10010</text>
          <text x="5"  y="50" fill="${colore}" font-size="9" font-family="monospace">11001</text>
        </pattern>`;
    case "grid":
      return `
        <pattern id="pat" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${colore}" stroke-width="0.5"/>
        </pattern>`;
    case "dots":
      return `
        <pattern id="pat" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="2" fill="${colore}"/>
        </pattern>`;
    case "waves":
      return `
        <pattern id="pat" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
          <path d="M0 15 Q15 5 30 15 Q45 25 60 15" fill="none" stroke="${colore}" stroke-width="0.8"/>
        </pattern>`;
    default:
      return `<pattern id="pat" width="10" height="10" patternUnits="userSpaceOnUse"></pattern>`;
  }
}



export default function PopolariBanner({ categoryId }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const cat = data.find(
    item => item.id === Number(categoryId)
  );

  const tema = TEMI_CATEGORIA[cat?.nome] ?? TEMI_CATEGORIA["Informatica"];
  const patternSVG = getPattern(tema.patternType, tema.patternColor);


  // Solo il gradiente è inline: cambia per ogni categoria
  const sfondoDinamico = {
    background: `linear-gradient(135deg, ${tema.bgFrom} 0%, ${tema.bgTo} 100%)`,
  };


  return (
    <div className="banner" style={sfondoDinamico}>
      <svg className="banner__pattern">
        <rect width="100%" height="100%" fill="url(#pat)" />
      </svg>

      <div className="banner__contenuto">
        <p className="banner__titolo">
          I Più Popolari della Categoria:{" "}
          <span
            className="banner__titolo-categoria"
            style={{ color: tema.accent }}
          >
            {cat?.nome}
          </span>
        </p>

        <div className="banner__tags">
          <CategoryButton
            coloreAccento={tema.accent}
            categoryId={categoryId}
          />
        </div>
      </div>
    </div>
  );
}
