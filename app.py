##from https://stripe.com/docs/payments/cards/saving-cards-after-payment
@app.route('/checkout')
def checkout():
  intent = # ... Fetch or create the PaymentIntent
  return render_template('checkout.html', client_secret=intent.client_secret)

