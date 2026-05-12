export default function CategoryButton({ nome, icona, coloreAccento }) {
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