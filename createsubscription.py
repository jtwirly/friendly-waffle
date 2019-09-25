# create subscription and attempt payment https://stripe.com/docs/billing/subscriptions/payment#signup-4
# more on this here https://stripe.com/docs/api/subscriptions/create
# Set your secret key: remember to change this to your live secret key in production
# See your keys here: https://dashboard.stripe.com/account/apikeys
import stripe
stripe.api_key = 'sk_test_y0bDxO1W8RG1ybQOj2yygks4'

stripe.Subscription.create(
  customer='cus_4fdAW5ftNQow1a',
  items=[
    {
      'plan': 'plan_CBXbz9i7AIOTzr', # or       "plan": "gold",
    },
  ],
  expand: ['latest_invoice.payment_intent'],
)