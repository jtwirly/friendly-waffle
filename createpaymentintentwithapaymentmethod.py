# Not sure how this differs from other createpaymentintent file
# Create a PaymentIntent with a payment method https://stripe.com/docs/payments/cards/charging-saved-cards#create-payment-intent-off-session
# Set your secret key: remember to change this to your live secret key in production
# See your keys here: https://dashboard.stripe.com/account/apikeys
stripe.api_key = 'sk_test_y0bDxO1W8RG1ybQOj2yygks4'

stripe.PaymentIntent.create(
  amount=1099,
  currency='cad',
  payment_method_types=['card'],
  customer='{{CUSTOMER_ID}}',
  payment_method='{{PAYMENT_METHOD_ID}}',
  off_session=True,
  confirm=True,
)