import '../App.css'
export default function BoxLink({ title, links }) {
  return (
    <div className="LinkBox">
      {title}
      <hr />
      {links.map((link) => (
        <a style={{ display: "block" }} key={link}>
          {link}
        </a>
      ))}
    </div>
  );
}
