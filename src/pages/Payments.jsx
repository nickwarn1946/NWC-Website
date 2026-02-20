import React from 'react';

export default function Payment() {
  const pay = async (product) => {
    try {
      // Note: This requires Netlify functions to work properly later
      const res = await fetch("/.netlify/functions/create-checkout", {
        method: "POST",
        body: JSON.stringify(product)
      });
      const data = await res.json();
      window.location.href = data.url;
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment system is not connected yet. (Requires Netlify hosting)");
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "3rem auto", fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Book a Session</h1>

      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #eee' }}>
        <h3>Consultancy</h3>
        <button onClick={() => pay({ name: "Consulting Services", amount: 250000 })}>
          Pay £2,500
        </button>
      </div>

      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #eee' }}>
        <h3>App Subscription</h3>
        <button onClick={() => pay({ name: "App Subscription (Monthly)", amount: 4900 })}>
          Subscribe £49/month
        </button>
      </div>

      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #eee' }}>
        <h3>Book Purchase</h3>
        <button onClick={() => pay({ name: "Book Purchase", amount: 1999 })}>
          Buy Book £19.99
        </button>
      </div>
      
      <br />
      <a href="/" style={{ color: 'gray', textDecoration: 'none' }}>← Back to Home</a>
    </div>
  );
}
