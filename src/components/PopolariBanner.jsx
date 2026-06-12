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

export default function PopolariBanner({ categoryId, onSelectSubcategory }) {
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
            onSelectSubcategory={onSelectSubcategory}
          />
        </div>
      </div>
    </div>
  );
}
