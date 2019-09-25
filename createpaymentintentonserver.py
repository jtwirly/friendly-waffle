# Create a PaymentIntent on the server from https://stripe.com/docs/payments/cards/charging-saved-cards#create-payment-intent
# Set your secret key: remember to change this to your live secret key in production
# See your keys here: https://dashboard.stripe.com/account/apikeys
stripe.api_key = 'sk_test_y0bDxO1W8RG1ybQOj2yygks4'

intent = stripe.PaymentIntent.create(
  amount=1099,
  currency='cad',
  customer='{{CUSTOMER_ID}}',
  payment_method='{{PAYMENT_METHOD_ID}}',
)


