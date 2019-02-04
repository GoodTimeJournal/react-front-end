const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let nextId = 6;

let user = {
  userId: 123, // Generate a random ID
  username: 'testing',
  password: 'password',
  profileImg: '',

  activityLog: [
    {
      title: 'Running',
      enjoyment: 4,
      energy: 6,
      engagement: 4,
      timestamp: '02/2 06:15 pm' // Date.now() or moment.js
    },
    {
      title: 'Journaling',
      enjoyment: 8,
      energy: 9,
      engagement: 10,
      timestamp: '01/30 02:05 pm' // Date.now() or moment.js
    },
    {
      title: 'TV',
      enjoyment: 6,
      energy: 2,
      engagement: 7,
      timestamp: '01/28 09:20 pm' // Date.now() or moment.js
    },
    {
      title: 'Biking',
      enjoyment: 8,
      energy: 6,
      engagement: 9,
      timestamp: '01/23 04:45 pm' // Date.now() or moment.js
    },
    {
      title: 'Swimming',
      enjoyment: 6,
      energy: 7,
      engagement: 6,
      timestamp: '01/13 12:45 pm' // Date.now() or moment.js
    }
  ],

  reflectionLog: [
    {
      journalEntry: 'today was good',
      insights: 'nothing to report',
      trends: 'trending now!',
      surprises: 'oh yeah',
      timestamp: 'tuesday, 1st' // Date.now() or moment.js
    }
  ]
};

app.use(bodyParser.json());

app.use(cors());

app.get('/api/user', (req, res) => {
  setTimeout(() => {
    res.send(user);
  }, 1000);
});

app.get('/api/user/:id', (req, res) => {
  const user = user.find(f => f.id == req.params.id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send({ msg: 'user not found' });
  }
});

app.post('/api/user', (req, res) => {
  const user = { id: getNextId(), ...req.body };

  user = [...user, user];

  res.send(user);
});

app.put('/api/user/:id', (req, res) => {
  const { id } = req.params;

  const userIndex = user.findIndex(f => f.id == id);

  if (userIndex > -1) {
    const user = { ...user[userIndex], ...req.body };

    user = [...user.slice(0, userIndex), user, ...user.slice(userIndex + 1)];
    res.send(user);
  } else {
    res.status(404).send({ msg: 'user not found' });
  }
});

app.delete('/api/user/:id', (req, res) => {
  const { id } = req.params;

  user = user.filter(f => f.id !== Number(id));

  res.send(user);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
