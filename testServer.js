const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let nextId = 6;

let users = [
  {
    userId: 123, // Generate a random ID
    username: 'testing',
    password: 'password',
    profileImg: '',

    ActivityLogView: [
      {
        activityName: 'running',
        enjoymentRating: 4,
        energyLevel: 3,
        engagement: 1,
        timestamp: 'tuesday 2nd ' // Date.now() or moment.js
      }
    ],

    ReflectionLog: [
      {
        journalEntry: 'today was good',
        insights: 'nothing to report',
        trends: 'trending now!',
        surprises: 'oh yeah',
        timestamp: 'tuesday, 1st' // Date.now() or moment.js
      }
    ]
  }
];

app.use(bodyParser.json());

app.use(cors());

app.get('/api/users', (req, res) => {
  setTimeout(() => {
    res.send(users);
  }, 1000);
});

app.get('/api/users/:id', (req, res) => {
  const friend = users.find(f => f.id == req.params.id);

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.post('/api/users', (req, res) => {
  const friend = { id: getNextId(), ...req.body };

  users = [...users, friend];

  res.send(users);
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;

  const friendIndex = users.findIndex(f => f.id == id);

  if (friendIndex > -1) {
    const friend = { ...users[friendIndex], ...req.body };

    users = [
      ...users.slice(0, friendIndex),
      friend,
      ...users.slice(friendIndex + 1)
    ];
    res.send(users);
  } else {
    res.status(404).send({ msg: 'Friend not found' });
  }
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;

  users = users.filter(f => f.id !== Number(id));

  res.send(users);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
