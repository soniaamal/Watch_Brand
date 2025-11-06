import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const sampleWatches = [
    {
      id: 1,
      name: "Classic Silver",
      price: 12000,
      imageUrl: "http://localhost:5160/images/silver.jpg",
    },
    {
      id: 2,
      name: "Midnight Black",
      price: 15000,
      imageUrl: "http://localhost:5160/images/black.jpg",
    },
    
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <h2>Elegance in Every Second</h2>
        <p>Discover timeless style and precision craftsmanship.</p>
        <Link to="/watches">View Collection</Link>
      </section>

      {/* Featured Watches */}
      <div className="watch-grid">
        {sampleWatches.map((w) => (
          <div key={w.id} className="watch-card">
            <img src={w.imageUrl} alt={w.name} />
            <h3>{w.name}</h3>
            <p>PKR {w.price}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
