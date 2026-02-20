const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'gbp',
          product_data: { name: data.name },
          unit_amount: data.amount,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://nickwarnconsulting.com/#/success',
      cancel_url: 'https://nickwarnconsulting.com/#/payments',
    });

    // CRITICAL: We send back a clear JSON object with the URL
    return {
      statusCode: 200,
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*" 
      },
      body: JSON.stringify({ url: session.url }),
    };

  } catch (error) {
    console.error("STRIPE ERROR:", error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
