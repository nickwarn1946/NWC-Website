import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Payments from "./pages/Payments";

function Home() {
  return (
    <div style={{ padding: "3rem" }}>
      <h1>Consulting & Digital Products</h1>
      <p>Secure payments via Stripe</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
        <Link to="/" style={{ marginRight: 16 }}>Home</Link>
        <Link to="/payments">Payments</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </BrowserRouter>
  );
}