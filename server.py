#!/usr/bin/env python
# -*- coding: utf-8 -*-

#       _                              
#      | |                             
#    __| |_ __ ___  __ _ _ __ ___  ___ 
#   / _` | '__/ _ \/ _` | '_ ` _ \/ __|
#  | (_| | | |  __/ (_| | | | | | \__ \
#   \__,_|_|  \___|\__,_|_| |_| |_|___/ .
#
# A 'Fog Creek'–inspired demo by Kenneth Reitz™

import os
from flask import Flask, request, render_template, jsonify

# Connecting Heroku in Python: To use PostgreSQL as your database in Python applications https://devcenter.heroku.com/articles/heroku-postgresql#connecting-in-python
import os
import psycopg2

DATABASE_URL = os.environ['DATABASE_URL']

conn = psycopg2.connect(DATABASE_URL, sslmode='require')
# end of code for connecting Heroku in Python

# Support for gomix's 'front-end' and 'back-end' UI.
app = Flask(__name__, static_folder='public', template_folder='views')

# Set the app secret key from the secret environment variables.
app.secret = os.environ.get('SECRET')

# Dream database. Store dreams in memory for now. 
DREAMS = ['Python. Python, everywhere.']


@app.after_request
def apply_kr_hello(response):
    """Adds some headers to all responses."""
  
    # Made by Kenneth Reitz. 
    if 'MADE_BY' in os.environ:
        response.headers["X-Was-Here"] = os.environ.get('MADE_BY')
    
    # Powered by Flask. 
    response.headers["X-Powered-By"] = os.environ.get('POWERED_BY')
    return response


@app.route('/')
def homepage():
    """Displays the homepage."""
    return render_template('index.html')
    
@app.route('/dreams', methods=['GET', 'POST'])
def dreams():
    """Simple API endpoint for dreams. 
    In memory, ephemeral, like real dreams.
    """
  
    # Add a dream to the in-memory database, if given. 
    if 'dream' in request.args:
        DREAMS.append(request.args['dream'])
    
    # Return the list of remembered dreams. 
    return jsonify(DREAMS)

if __name__ == '__main__':
    app.run()
