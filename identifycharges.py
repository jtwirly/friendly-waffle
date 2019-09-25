# Set your secret key: remember to change this to your live secret key in production
# See your keys here: https://dashboard.stripe.com/account/apikeys
stripe.api_key = 'sk_test_y0bDxO1W8RG1ybQOj2yygks4'

charges = stripe.Charge.list(
  payment_intent = '{{PAYMENT_INTENT_ID}}',
  # Limit the number of objects to return (the default is 10)
  limit = 3,
)
