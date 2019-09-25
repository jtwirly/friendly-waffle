/*
This is a JavaScript (JS) file.
JavaScript is the programming language that powers the web.

To use this file, place the following <script> tag just before the closing </body> tag in your HTML file, making sure that the filename after "src" matches the name of your file...

    <script src="script.js"></script>

Learn more about JavaScript at https://developer.mozilla.org/en-US/Learn/JavaScript

When you're done, you can delete all of this grey text, it's just a comment.
*/

function greetMe(name) {
  var today = new Date().toDateString();
  console.log("Hello " + name + ", today is " + today);
}

greetMe("World");

var stripe = stripe('pk_test_zhuAeSWXtjqir4cmfMyR9rZu');
var elements = stripe.elements();

/*
This is a JavaScript (JS) file.
JavaScript is the programming language that powers the web.

To use this file, place the following <script> tag just before the closing </body> tag in your HTML file, making sure that the filename after "src" matches the name of your file...

    <script src="script.js"></script>

Learn more about JavaScript at https://developer.mozilla.org/en-US/Learn/JavaScript

When you're done, you can delete all of this grey text, it's just a comment.
*/

//imported function to fix registerelements error
function registerElements(elements, exampleName) {
  var formClass = '.' + exampleName;
  var example = document.querySelector(formClass);

  var form = example.querySelector('form');
  var resetButton = example.querySelector('a.reset');
  var error = form.querySelector('.error');
  var errorMessage = error.querySelector('.message');

  function enableInputs() {
    Array.prototype.forEach.call(
      form.querySelectorAll(
        "input[type='text'], input[type='email'], input[type='tel']"
      ),
      function(input) {
        input.removeAttribute('disabled');
      }
    );
  }

// Custom styling can be passed to options when creating an Element.
var style = {
  base: {
    // Add your base input styles here. For example:
    fontSize: '16px',
    color: "#32325d",
  }
};

// Create an instance of the card Element.
var card = elements.create('card', {style: style});

// Add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');

card.addEventListener('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});

// Create a token or display an error when the form is submitted.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the customer that there was an error.
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server.
      stripeTokenHandler(result.token);
    }
  });
});


stripe.createToken('bank_account', {
  country: 'US',
  currency: 'usd',
  routing_number: '110000000',
  account_number: '000123456789',
  account_holder_name: 'Jenny Rosen',
  account_holder_type: 'individual',
}).then(function(result) {
  // Handle result.error or result.token
});

//stripe.createToken(iban, {
  // country and account_number are automatically populated from the IBAN Element.
//  currency: 'eur',
//  account_holder_name: 'Jenny Rosen',
//  account_holder_type: 'individual',
//}).then(function(result) {
//  // Handle result.error or result.token
//});

stripe.createToken('pii', {
  personal_id_number: '123131185',
}).then(function(result) {
  // Handle result.error or result.token
});

//stripe.createSource(iban, {
//  type: 'sepa_debit',
//  currency: 'eur',
//  owner: {
//    name: 'Jenny Rosen',
//  },
//}).then(function(result) {
//  // Handle result.error or result.source
//});

stripe.createSource({
  type: 'ideal',
  amount: 1099,
  currency: 'eur',
  owner: {
    name: 'Jenny Rosen',
  },
  redirect: {
    return_url: 'https://shop.example.com/crtA6B28E1',
  },
}).then(function(result) {
  // Handle result.error or result.source
});


function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  // Submit the form
  form.submit();
}

  // Use CreatePaymentMethod to collect payment information. From https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method
stripe.createPaymentMethod('card', cardElement, {
  billing_details: {
    name: 'Jenny Rosen',
  },
}).then(function(result) {
  // Handle result.error or result.paymentMethod
});

//stripe.retrieveSource({
//  id: '{SOURCE_ID}'
//  client_secret: '{SOURCE_CLIENT_SECRET}',
//}).then(function(result) {
//  // Handle result.error or result.source
//});


(function() {
  'use strict';

  var elements = stripe.elements({
    fonts: [
      {
        cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
      },
    ],
    // Stripe's examples are localized to specific languages, but if
    // you wish to have Elements automatically detect your user's locale,
    // use `locale: 'auto'` instead.
    locale: window.__exampleLocale
  });

  var card = elements.create('card', {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#c4f0ff',
        color: '#fff',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',

        ':-webkit-autofill': {
          color: '#fce883',
        },
        '::placeholder': {
          color: '#87BBFD',
        },
      },
      invalid: {
        iconColor: '#FFC7EE',
        color: '#FFC7EE',
      },
    },
  });
  card.mount('#example1-card');

//  registerElements([card], 'example1');
// })();
  
  (function() {
  'use strict';

  var elements = stripe.elements({
    fonts: [
      {
        cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
      },
    ],
    // Stripe's examples are localized to specific languages, but if
    // you wish to have Elements automatically detect your user's locale,
    // use `locale: 'auto'` instead.
    locale: window.__exampleLocale
  });

  var card = elements.create('card', {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#c4f0ff',
        color: '#fff',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSize: '16px',
        fontSmoothing: 'antialiased',

        ':-webkit-autofill': {
          color: '#fce883',
        },
        '::placeholder': {
          color: '#87BBFD',
        },
      },
      invalid: {
        iconColor: '#FFC7EE',
        color: '#FFC7EE',
      },
    },
  });
  card.mount('#example1-card');

  registerElements([card], 'example1');
})();
})();
})();


//Subscriptions example from https://github.com/stripe-samples/charging-for-subscriptions/blob/master/client/script.js
var stripeElements = function(publicKey) {
  stripe = Stripe(publicKey);
  var elements = stripe.elements();

  // Element styles
  var style = {
    base: {
      fontSize: "16px",
      color: "#32325d",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "rgba(0,0,0,0.4)"
      }
    }
  };

  var card = elements.create("card", { style: style });

  card.mount("#card-element");

  // Element focus ring
  card.on("focus", function() {
    var el = document.getElementById("card-element");
    el.classList.add("focused");
  });

  card.on("blur", function() {
    var el = document.getElementById("card-element");
    el.classList.remove("focused");
  });

  document.querySelector("#submit").addEventListener("click", function(evt) {
    evt.preventDefault();
    document.querySelector("#submit").disabled = true;
    // Initiate payment
    pay(stripe, card);
  });
};

var pay = function(stripe, card) {
  var cardholderEmail = document.querySelector("#email").value;
  stripe
    .createPaymentMethod("card", card, {
      billing_details: {
        email: cardholderEmail
      }
    })
    .then(function(result) {
      if (result.error) {
        document.querySelector("#submit").disabled = false;
        // The card was declined (i.e. insufficient funds, card has expired, etc)
        var errorMsg = document.querySelector(".sr-field-error");
        errorMsg.textContent = result.error.message;
        setTimeout(function() {
          errorMsg.textContent = "";
        }, 4000);
      } else {
        createCustomer(result.paymentMethod.id, cardholderEmail);
      }
    });
};

function createCustomer(paymentMethod, cardholderEmail) {
  return fetch("/create-customer", {
    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: cardholderEmail,
      payment_method: paymentMethod
    })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(subscription) {
      if (
        subscription &&
        subscription.latest_invoice.payment_intent.status === "requires_action"
      ) {
        stripe
          .handleCardPayment(
            subscription.latest_invoice.payment_intent.client_secret
          )
          .then(function(result) {
            confirmSubscription(subscription.id);
          });
      } else {
        orderComplete(subscription);
      }
    });
}

function confirmSubscription(subscriptionId) {
  return fetch("/subscription", {
    method: "post",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      subscriptionId: subscriptionId
    })
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(subscription) {
      orderComplete(subscription);
    });
}

function getPublicKey() {
  return fetch("/public-key", {
    method: "get",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      stripeElements(response.publicKey);
    });
}

getPublicKey();

/* ------- Post-payment helpers ------- */

/* Shows a success / error message when the payment is complete */
var orderComplete = function(subscription) {
  var subscriptionJson = JSON.stringify(subscription, null, 2);
  document.querySelectorAll(".payment-view").forEach(function(view) {
    view.classList.add("hidden");
  });
  document.querySelectorAll(".completed-view").forEach(function(view) {
    view.classList.remove("hidden");
  });
  document.querySelector(".order-status").textContent = subscription.status;
  document.querySelector("pre").textContent = subscriptionJson;
};

//Subscriptions example end


//Saving card after payment from https://github.com/stripe-samples/saving-card-after-payment/blob/master/without-webhooks/client/script.js
// A reference to Stripe.js
var stripe;

var orderData = {
  items: [{ id: "photo-subscription" }],
  currency: "usd"
};

fetch("/stripe-key")
  .then(function(result) {
    return result.json();
  })
  .then(function(data) {
    return setupElements(data);
  })
  .then(function({ stripe, card, clientSecret }) {
    document.querySelector("#submit").addEventListener("click", function(evt) {
      evt.preventDefault();
      pay(stripe, card, clientSecret);
    });
  });

var setupElements = function(data) {
  stripe = Stripe(data.publicKey);
  /* ------- Set up Stripe Elements to use in checkout form ------- */
  var elements = stripe.elements();
  var style = {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  };

  var card = elements.create("card", { style: style });
  card.mount("#card-element");

  return {
    stripe,
    card,
    clientSecret: data.clientSecret
  };
};

var handleAction = function(clientSecret) {
  // Show the authentication modal if the PaymentIntent has a status of "requires_action"
  stripe.handleCardAction(clientSecret).then(function(data) {
    if (data.error) {
      showError("Your card was not authenticated, please try again");
    } else if (data.paymentIntent.status === "requires_confirmation") {
      // Card was properly authenticated, we can attempt to confirm the payment again with the same PaymentIntent
      fetch("/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          paymentIntentId: data.paymentIntent.id
        })
      })
        .then(function(result) {
          return result.json();
        })
        .then(function(json) {
          if (json.error) {
            showError(json.error);
          } else {
            orderComplete(clientSecret);
          }
        });
    }
  });
};

/*
 * Calls stripe.handleCardPayment which creates a pop-up modal to
 * prompt the user to enter  extra authentication details without leaving your page
 */
var pay = function(stripe, card) {
  var cardholderName = document.querySelector("#name").value;
  var data = {
    billing_details: {}
  };

  if (cardholderName) {
    data["billing_details"]["name"] = cardholderName;
  }

  changeLoadingState(true);

  // Initiate the payment. handleCardPayment will display a modal
  stripe
    .createPaymentMethod("card", card, data)
    .then(function(result) {
      if (result.error) {
        showError(result.error.message);
      } else {
        orderData.paymentMethodId = result.paymentMethod.id;
        orderData.isSavingCard = document.querySelector("#save-card").checked;

        return fetch("/pay", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(orderData)
        });
      }
    })
    .then(function(result) {
      return result.json();
    })
    .then(function(paymentData) {
      if (paymentData.requiresAction) {
        // Request authentication
        handleAction(paymentData.clientSecret);
      } else if (paymentData.error) {
        showError(paymentData.error);
      } else {
        orderComplete(paymentData.clientSecret);
      }
    });
};

/* ------- Post-payment helpers ------- */

/* Shows a success / error message when the payment is complete */
var orderComplete = function(clientSecret) {
  stripe.retrievePaymentIntent(clientSecret).then(function(result) {
    var paymentIntent = result.paymentIntent;
    var paymentIntentJson = JSON.stringify(paymentIntent, null, 2);
    document.querySelectorAll(".payment-view").forEach(function(view) {
      view.classList.add("hidden");
    });
    document.querySelectorAll(".completed-view").forEach(function(view) {
      view.classList.remove("hidden");
    });
    document.querySelector(".status").textContent =
      paymentIntent.status === "succeeded" ? "succeeded" : "failed";
    document.querySelector("pre").textContent = paymentIntentJson;
  });
};

var showError = function(errorMsgText) {
  changeLoadingState(false);
  var errorMsg = document.querySelector(".sr-field-error");
  errorMsg.textContent = errorMsgText;
  setTimeout(function() {
    errorMsg.textContent = "";
  }, 4000);
};

// Show a spinner on payment submission
var changeLoadingState = function(isLoading) {
  if (isLoading) {
    document.querySelector("button").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("button").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
};

var stripe = Stripe('pk_test_zhuAeSWXtjqir4cmfMyR9rZu');

//Saving cards after payment from https://stripe.com/docs/payments/cards/saving-cards-after-payment
var elements = stripe.elements();
var cardElement = elements.create('card');
cardElement.mount('#card-element');

//Submit the payment to Stripe from the client https://stripe.com/docs/payments/cards/saving-cards-after-payment#submit-payment
var cardholderName = document.getElementById('cardholder-name');
var cardButton = document.getElementById('card-button');
var clientSecret = cardButton.dataset.secret;

cardButton.addEventListener('click', function(ev) {
  stripe.handleCardPayment(
    clientSecret, cardElement, {
      payment_method_data: {
        billing_details: {name: cardholderName.value}
      }
    }
  ).then(function(result) {
    if (result.error) {
      // Display error.message in your UI.
    } else {
      // The payment has succeeded. Display a success message.
      // Then, send the payment method from the SetupIntent to your
      // server in order to attach the payment method to a customer.
    }
  });
});

//Complete the required action https://stripe.com/docs/billing/subscriptions/payment#requires-action-2
var stripe = Stripe('pk_test_zhuAeSWXtjqir4cmfMyR9rZu');

// This can be found on invoice.payment_intent.client_secret
var paymentIntentSecret = 'pi_91_secret_W9';

stripe.handleCardPayment(paymentIntentSecret).then(function(result) {
  if (result.error) {
    // Display error.message in your UI.
  } else {
    // The payment has succeeded. Display a success message.
  }
});


//Checking PaymentIntent status on the client https://stripe.com/docs/payments/payment-intents/verifying-status#checking-status
stripe.handleCardPayment(clientSecret).then(function(response) {
  if (response.error) {
    // Handle error here
  } else if (response.paymentIntent && response.paymentIntent.status === 'succeeded') {
    // Handle successful payment here
  }
});

//If you would like to check the status of a PaymentIntent without using the handleCardPayment function, you can retrieve it independently by using the retrievePaymentIntent function and passing in the client secret:

stripe.retrievePaymentIntent(clientSecret).then(function(response) {
  if (response.error) {
    // Handle error here
  } else if (response.paymentIntent && response.paymentIntent.status === 'succeeded') {
    // Handle successful payment here
  }
});

//use a webhook to fulfill order https://stripe.com/docs/payments/payment-intents/verifying-status#webhooks

//Managing authentication failures https://stripe.com/docs/billing/subscriptions/payment#authentication-failures
const {pending_setup_intent} = subscription;

if (pending_setup_intent) {
  const {client_secret, status} = subscription.pending_setup_intent;

  if (status === "requires_action") {
    stripe.handleCardSetup(client_secret).then(function(result) {
      if (result.error) {
        // Display error.message in your UI.
      } else {
        // The setup has succeeded. Display a success message.
      }
    });
  }
}

//Managing authorization failures https://stripe.com/docs/billing/subscriptions/payment#authorization-failures

const {pending_setup_intent, latest_invoice} = subscription;

if (pending_setup_intent) {
  const {client_secret, status} = subscription.pending_setup_intent;

  if (status === "requires_action") {
    stripe.handleCardSetup(client_secret).then(function(result) {
      if (result.error) {
        // Display error.message in your UI.
      } else {
        // The setup has succeeded. Display a success message.
      }
    });
  } else if (status === "requires_payment_method") {
    // Collect new payment method
  }
}


// Set up error handling using handleCardSetup for authentication failures https://stripe.com/docs/billing/migration/strong-customer-authentication#scenario-2 and https://stripe.com/docs/stripe-js/reference#stripe-handle-card-setup
// this may be suoerflous / already handled elsewhere

stripe.handleCardSetup(
  '{SETUP_INTENT_CLIENT_SECRET}',
  element,
  {
    payment_method_data: {
      billing_details: {
        name: 'Jenny Rosen'
      }
    }
  }
).then(function(result) {
  // Handle result.error or result.setupIntent
});

//Set up handleCardPayment for authorization failures https://stripe.com/docs/billing/migration/strong-customer-authentication#scenario-2 and  https://stripe.com/docs/stripe-js/reference#stripe-handle-card-payment
// this may be suoerflous / already handled elsewhere

stripe.handleCardPayment(
  '{PAYMENT_INTENT_CLIENT_SECRET}',
  element,
  {
    payment_method_data: {
      billing_details: {
        name: 'Jenny Rosen'
      }
    }
  }
).then(function(result) {
  // Handle result.error or result.paymentIntent
});

// Charging Saved Cards: Submit the payment to Stripe from the client https://stripe.com/docs/payments/cards/charging-saved-cards#submit-payment

var cardButton = document.getElementById('card-button');
var clientSecret = cardButton.dataset.secret;

cardButton.addEventListener('click', function(ev) {
  stripe.handleCardPayment(
    clientSecret,
    {
      payment_method: '{PAYMENT_METHOD_ID}',
    }
  ).then(function(result) {
    if (result.error) {
      // Display error.message in your UI.
    } else {
      // The payment has succeeded. Display a success message.
    }
  });
});