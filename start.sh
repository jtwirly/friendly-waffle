# For development use (simple logging, etc):
python app.py
python attachnewpaymenttocustomer.py
python attachpaymentexistingcust.py
python createcustomer.py
python createpaymentintent.py
python createsubscription.py
python handlingsca.py
python identifycharges.py
python notifycustomer.py
python reattemptpayment.py
python server.py
python webhook.py
python createpaymentintentonserver.py
python createpaymentintentwithapaymentmethod.py
# For production use: 
gunicorn server:app -w 1 --log-file -
