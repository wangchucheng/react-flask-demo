React and Flask Demo

## Run

```bash
# start backend, should have Flask and flask-cors installed.
cd backend
export FLASK_APP=hello.py
flask run
cd ..

## start frontend
cd frontend
npm start
```

Open `http://localhost:3000`, then you will see the `Hello, Name!` message. You can change the `name` variable in React to get a different message from flask.