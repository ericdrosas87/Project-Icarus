const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose')
const routes = require('./routes')


mongoose.connect(process.env.MONGOD_URI || "mongodb://localhost/projectIcharus")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


//Geo-fencing add on
const cors = require('cors');
const uuid = require('uuid').v4;
const next = require('next');
const Pusher = require('pusher');
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handler = app.getRequestHandler();

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  encrypted: true
});

const initializePeople = ({ lat, lng }) => {

	const randomInRange = num => (width = 0.01) => ((Math.random() * width * 2) + num - width);

	const randomLat = randomInRange(lat);
	const randomLng = randomInRange(lng);

	const people = [ 'Jesus', 'David', 'Zach', 'Aaron', 'Nellie', 'Eric', 'Tanner', 'Trevor', 'Wesley', 'Yesenia', 'Doug', 'Thierry', 'Erin' ];

	return people.map(name => ({
    name,
    id: uuid(),
    position: { lat: randomLat(0.0075), lng: randomLng(0.02) },
    online: false
  }));

};

app.prepare()
  .then(() => {
    const server = express();
    const referencePosition = { lat: 32.222607, lng: -110.974709 };

    let people = initializePeople(referencePosition);

    server.use(cors());
    server.use(logger('dev'));
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.get('/people', (req, res, next) => {
      res.json({ status: 'success', people });
    });

    server.post('/transit/:id', (req, res, next) => {
      const id = req.params.id;
      const { lat, lng } = req.body;

      people.forEach((person, index) => {
        if (person.id === id) {
          people[index] = { ...person, position: { lat, lng } };
          return pusher.trigger('map-geofencing', 'transit', { person: people[index], people });
        }
      });
    });

    server.post('/:presence/:id', (req, res, next) => {
      const id = req.params.id;
      const presence = req.params.presence;

      if (['online', 'offline'].includes(presence)) {
        people.forEach((person, index) => {
          if (person.id === id) {
            return people[index] = { ...person, online: presence === 'online' };
          }
        });
      }
    });

    server.get('*', (req, res) => {
      return handler(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });