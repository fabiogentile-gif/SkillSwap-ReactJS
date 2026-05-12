
const TECNOLOGIE = {
  Informatica: [
    { nome: "Python",  icona: "🐍" },
    { nome: "HTML",    icona: "🌐" },
    { nome: "Mobile",  icona: "📱" },
    { nome: "React",   icona: "⚛️" },
    { nome: "SQL",     icona: "🗄️" },
  ],
  Design: [
    { nome: "Figma",       icona: "🎨" },
    { nome: "Photoshop",   icona: "🖼️" },
    { nome: "UX/UI",       icona: "✏️" },
    { nome: "Illustrator", icona: "🖌️" },
  ],
  Marketing: [
    { nome: "SEO",       icona: "🔍" },
    { nome: "Social",    icona: "📣" },
    { nome: "Email",     icona: "📧" },
    { nome: "Analytics", icona: "📊" },
  ],
  Musica: [
    { nome: "DAW",        icona: "🎛️" },
    { nome: "Chitarra",   icona: "🎸" },
    { nome: "Produzione", icona: "🎧" },
    { nome: "Teoria",     icona: "🎵" },
  ],
};
const TEMI_CATEGORIA = {
  Informatica: {
    bgFrom: "#0a2e1a",
    bgTo: "#0f4d2c",
    accent: "#22c55e",
    patternColor: "rgba(34,197,94,0.12)",
    patternType: "binary",
  },

  Design: {
    bgFrom: "#0f172a",
    bgTo: "#1e3a5f",
    accent: "#60a5fa",
    patternColor: "rgba(96,165,250,0.12)",
    patternType: "grid",
  },
  Marketing: {
    bgFrom: "#1c0a00",
    bgTo: "#7c2d00",
    accent: "#f97316",
    patternColor: "rgba(249,115,22,0.12)",
    patternType: "dots",
  },
  Musica: {
    bgFrom: "#1a0a2e",
    bgTo: "#3b0764",
    accent: "#a855f7",
    patternColor: "rgba(168,85,247,0.12)",
    patternType: "waves",
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
function TagTecnologia({ nome, icona, coloreAccento }) {
  return (
    <span
      className="tag"
      style={{ border: `1px solid ${coloreAccento}55` }}
    >
      <span>{icona}</span>
      <span>{nome}</span>
    </span>
  );
}
export default function PopolariBanner({
  categoria = "Informatica",
  titoloPre = "I Più Popolari della Categoria:",
}) {
  const tema = TEMI_CATEGORIA[categoria] ?? TEMI_CATEGORIA["Informatica"];
  const tecnologie = TECNOLOGIE[categoria] ?? TECNOLOGIE["Informatica"];
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
          {titoloPre}{" "}
          <span
            className="banner__titolo-categoria"
            style={{ color: tema.accent }}
          >
            {categoria}
          </span>
        </p>
 
        <div className="banner__tags">
          {tecnologie.map((tech) => (
            <TagTecnologia
              key={tech.nome}
              nome={tech.nome}
              icona={tech.icona}
              coloreAccento={tema.accent}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
