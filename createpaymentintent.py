##from https://stripe.com/docs/payments/cards/saving-cards-after-payment
stripe.PaymentIntent.create(
  amount=1099,
  currency='cad',
  setup_future_usage='off_session',
)

