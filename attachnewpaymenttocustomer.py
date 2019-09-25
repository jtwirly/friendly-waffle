# Attach new payment method to the customer https://stripe.com/docs/billing/subscriptions/payment#failure-2
  # Set your secret key: remember to change this to your live secret key in production
# See your keys here: https://dashboard.stripe.com/account/apikeys
stripe.api_key = 'sk_test_y0bDxO1W8RG1ybQOj2yygks4'

stripe.Customer.modify(
  'cus_4fdAW5ftNQow1a',
  source='tok_mastercard',
)