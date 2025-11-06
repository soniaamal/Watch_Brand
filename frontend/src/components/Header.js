import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: 20 }}>
      <h1>TimeCraft Watches</h1>
      <nav>
        <Link to="/">Home</Link> {" | "} <Link to="/watches">Watches</Link>
      </nav>
    </header>
  );
}
