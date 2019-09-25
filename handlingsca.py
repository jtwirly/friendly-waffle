# https://stripe.com/docs/billing/migration/strong-customer-authentication#scenario-1-handling-sca
# Set your secret key: remember to change this to your live secret key in production
# See your keys here: https://dashboard.stripe.com/account/apikeys
stripe.api_key = 'sk_test_y0bDxO1W8RG1ybQOj2yygks4'

intent = stripe.PaymentIntent.confirm(
  '{{PAYMENT_INTENT_ID}}',
  return_url='https://www.your-website.com/return_url'
)