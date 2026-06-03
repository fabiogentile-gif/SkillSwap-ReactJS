import '../App.css'
export default function BoxLink({ title, links }) {
  return (
    <div className="LinkBox">
      {title}
      <hr />
      {links.map((link) => (
        <a key={link} to={link}>
          {link}
        </a>
      ))}
    </div>
  );
}
