# This creates a new Customer and attaches the PaymentMethod in one API call.
stripe.Customer.create(
  payment_method=intent.payment_method
)