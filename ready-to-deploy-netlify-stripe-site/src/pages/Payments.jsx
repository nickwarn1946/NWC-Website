export default function Payments() {

  const pay = async (product) => {
    const res = await fetch("/.netlify/functions/create-checkout", {
      method: "POST",
      body: JSON.stringify(product)
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div style={{ maxWidth: 700, margin: "3rem auto" }}>
      <h1>Payments</h1>

      <h3>Consultancy</h3>
      <button onClick={() => pay({ name: "Consulting Services", amount: 250000 })}>
        Pay £2,500
      </button>

      <h3>App Subscription</h3>
      <button onClick={() => pay({ name: "App Subscription (Monthly)", amount: 4900 })}>
        Subscribe £49/month
      </button>

      <h3>Book</h3>
      <button onClick={() => pay({ name: "Book Purchase", amount: 1999 })}>
        Buy Book £19.99
      </button>
    </div>
  );
}