import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
export default function Checkout() {
  const handleClick = async (event) => {
    // Get Stripe.js instance

    // Call your backend to create the Checkout Session
    const {sessionId} = await fetch('/api/checkout/session', { 
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ quantity: 1 })
    }).then(res => res.json())

    const stripe = await stripePromise;
    const {error} = await stripe.redirectToCheckout({
      sessionId,
    })

    // When the customer clicks on the button, redirect them to Checkout.
    // const result = await stripe.redirectToCheckout({
    //   sessionId: session.id,
    // });
  }
  return (
  <div>
    <h1>Checkout</h1>
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
      </div>
  )

}
