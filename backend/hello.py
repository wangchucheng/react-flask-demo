from flask import Flask, request
from flask_cors import cross_origin

app = Flask(__name__)


@app.route("/api")
@cross_origin()
def hello_world():
  name = request.args.get('name')
  if name is None:
    name = 'World'
  response = {}
  response['message'] = f'Hello, {name}!'
  return response