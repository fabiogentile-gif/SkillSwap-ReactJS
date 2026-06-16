import { useState, useEffect } from "react";

const Icona = {
  Python: "🐍",
  HTML: "🌐",
  Mobile: "📱",
  React: "⚛️",
  SQL: "🗄️",
  Pittura: "🎨",
  Illustrazioni: "✏️",
  Grafica: "🖌️",
  Editing: "🖼️",
  "Arte 3D": "🧊",
  Inglese: "🇬🇧",
  Spagnolo: "🇪🇸",
  Francese: "🇫🇷",
  Tedesco: "🇩🇪",
  Cinese: "🇨🇳",
  Chitarra: "🎸",
  Piano: "🎹",
  Canto: "🎤",
  Produzione: "🎚️",
  DJ: "🎧",
  Fotografia: "📸",
  Danza: "💃",
  Cucina: "👨‍🍳",
  Yoga: "🧘",
  Teatro: "🎭",
  Ceramica: "🏺",
  Cucito: "🪡",
  Falegnameria: "🪚",
  Gioielleria: "💍",
  Tessitura: "🧶",
};

export default function CategoryButton({ coloreAccento, categoryId, onSelectSubcategory }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/subcategories")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const subcategories = data.filter(
    item => item.categoryId === Number(categoryId)
  );

  return (
    <>
      {
        subcategories.map(item => {
          return (
            <button style={{ border: "none", background: "none" }} onClick={() => onSelectSubcategory(item.id)}>
              <span
                key={item.id}
                className="tag"
                style={{ border: `1px solid ${coloreAccento}55` }}
              >
                <span>{Icona[item.nome]}</span>
                <span>{item.nome}</span>
              </span>
            </button>

          );
        })
      }
    </>

  );
}