const functions = require('firebase-functions');
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');

admin.initializeApp();



// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.CheckoutSession = functions.https.onRequest((request, response) => {

    cors(request, response, () => {

    //   let myProducts = request.query.products;

    //   myProducts = Object.entries(JSON.parse(myProducts));

    //   response.send(myProducts);



        stripe.checkout.sessions.create({
            success_url: "/",
            cancel_url: "https://example.com/cancel",
            payment_method_types: ["card"],
            line_items: [{
              name: "T-shirt",
              description: "Comfortable cotton t-shirt",
              amount: 1500,
              currency: "aud",
              quantity: 2
            }]
          }, function(err, session) {

                response.send(session);
          });


      });




});

