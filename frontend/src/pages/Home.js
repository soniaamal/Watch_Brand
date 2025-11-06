import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{ padding: 20 }}>
        <section style={{ textAlign: "center", marginBottom: 30 }}>
          <h2>Elegance in Every Second</h2>
          <p>Discover our collection of premium watches.</p>
          <Link to="/watches">View Collection</Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
