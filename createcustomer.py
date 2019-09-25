##Create customer https://stripe.com/docs/billing/subscriptions/payment#signup-3
## more on this here https://stripe.com/docs/billing/migration/strong-customer-authentication#scenario-2 or this https://stripe.com/docs/api/customers/create#create_customer-payment_method 

# Set your secret key: remember to change this to your live secret key in production
# See your keys here: https://dashboard.stripe.com/account/apikeys
import stripe
stripe.api_key = 'sk_test_y0bDxO1W8RG1ybQOj2yygks4'

stripe.Customer.create(
  email='jenny.rosen@example.com',
  description="Customer for jenny.rosen@example.com",
  source='tok_visa', # obtained with Stripe.js
)

