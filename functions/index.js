const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_bLKU0n2RKvoJcAFUHX6IYY8r003r3n2tuW');

(async () => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      name: 'T-shirt',
      description: 'Comfortable cotton t-shirt',
      images: ['https://example.com/t-shirt.png'],
      amount: 500,
      currency: 'jpy',
      quantity: 1,
    }],
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
  });
})();