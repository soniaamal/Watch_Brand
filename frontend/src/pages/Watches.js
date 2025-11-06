import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Watches() {
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5160/api/watches")
      .then((r) => r.json())
      .then(setWatches)
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div>
      <Header />
      <main >
        <h2>Our Collection</h2>
        <div className='watch-grid'>
          {watches.map((w) => (
            <div key={w.id} className='watch-card'>
              <img src={`http://localhost:5160${w.imageUrl}`} alt={w.name} style={{ width: "100%" }} />
              <h3>{w.name}</h3>
              <p>PKR {w.price}</p>
              <p>{w.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
