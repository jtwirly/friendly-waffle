##notify customer to complete payment if needed
try:
  stripe.PaymentIntent.create(
    amount=1099,
    currency='usd',
    payment_method_types=['card'],
    confirm=True,
    payment_method='{{PAYMENT_METHOD_ID}}',
  )
except stripe.error.CardError as e:
  body = e.json_body
  err  = body.get('error', {})
  print("Message is: %s" % err.get('message'))
  payment_intent_id = err.get('payment_intent')['id']
  payment_intent = stripe.PaymentIntent.retrieve(payment_intent_id)
  