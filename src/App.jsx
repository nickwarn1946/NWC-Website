import React from 'react';
// Added 'Link' to the import list below
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Payment from './pages/Payments'; 

const Home = () => (
  <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
    <h1>Intelligent Agility</h1>
    <img 
      src="./solutions.jpg" 
      alt="Solutions Graphic" 
      style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} 
    />
    <br />
    {/* CHANGED: Using <Link to="/payments"> instead of <a href="#/payments"> */}
    <Link 
      to="/payments" 
      style={{ fontSize: '20px', color: 'blue', display: 'inline-block', marginTop: '30px', textDecoration: 'none', border: '1px solid blue', padding: '10px 20px', borderRadius: '5px' }}
    >
      Book a Session
    </Link>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
