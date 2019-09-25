##If you have an existing Customer, you can attach the PaymentMethod to that object instead. https://stripe.com/docs/payments/cards/saving-cards-after-payment#submit-payment
payment_method = stripe.PaymentMethod.attach(
  intent.payment_method,
  customer='{{CUSTOMER_ID}}'
)