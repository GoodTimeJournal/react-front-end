const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let nextId = 6;

let users = [
  {
    id: 123, // Generate a random ID
    username: 'testing',
    password: 'password',
    profileImg: '',

    activityLog: [
      {
        name: 'Running',
        enjoymentRating: 4,
        energyLevel: 6,
        engagement: 4,
        timestamp: '02/2 06:15 pm',
        id: 66
      },
      {
        name: 'Journaling',
        enjoymentRating: 8,
        energyLevel: 9,
        engagement: 10,
        timestamp: '01/30 02:05 pm',
        id: 25
      },
      {
        name: 'TV',
        enjoymentRating: 6,
        energyLevel: 2,
        engagement: 7,
        timestamp: '01/28 09:20 pm',
        id: 266
      },
      {
        name: 'Biking',
        enjoymentRating: 8,
        energyLevel: 6,
        engagement: 9,
        timestamp: '01/23 04:45 pm',
        id: 26634
      },
      {
        name: 'Swimming',
        enjoymentRating: 6,
        energyLevel: 7,
        engagement: 6,
        timestamp: '01/13 12:45 pm',
        id: 26543
      },
      {
        name: 'Running',
        enjoymentRating: 4,
        energyLevel: 6,
        engagement: 4,
        timestamp: '02/2 06:15 pm',
        id: 6611
      },
      {
        name: 'Journaling',
        enjoymentRating: 8,
        energyLevel: 9,
        engagement: 10,
        timestamp: '01/30 02:05 pm',
        id: 2511
      },
      {
        name: 'TV',
        enjoymentRating: 6,
        energyLevel: 2,
        engagement: 7,
        timestamp: '01/28 09:20 pm',
        id: 26611
      },
      {
        name: 'Biking',
        enjoymentRating: 8,
        energyLevel: 6,
        engagement: 9,
        timestamp: '01/23 04:45 pm',
        id: 2663411
      },
      {
        name: 'Swimming',
        enjoymentRating: 6,
        energyLevel: 7,
        engagement: 6,
        timestamp: '01/13 12:45 pm',
        id: 2654311
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
  },
  {
    id: 125, // Generate a random ID
    username: 'testing',
    password: 'password',
    profileImg: '',

    activityLog: [
      {
        name: `It's working!`,
        enjoymentRating: 8,
        energyLevel: 6,
        engagement: 9,
        timestamp: '02/2 06:15 pm', // Date.now() or moment.js
        id: 22
      },
      {
        name: 'Testing',
        enjoymentRating: 6,
        energyLevel: 2,
        engagement: 7,
        timestamp: '01/28 09:20 pm',
        id: 2
      },
      {
        name: 'Testing Works',
        enjoymentRating: 8,
        energyLevel: 6,
        engagement: 9,
        timestamp: '01/23 04:45 pm',
        id: 3
      },
      {
        name: 'Woo!',
        enjoymentRating: 6,
        energyLevel: 7,
        engagement: 6,
        timestamp: '01/13 12:45 pm',
        id: 4
      }
    ],

    reflectionLog: [
      {
        journalEntry: 'today was good',
        insights: 'nothing to report',
        trends: 'trending now!',
        surprises: 'oh yeah',
        timestamp: 'tuesday, 1st'
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
  const user = users.find(f => f.id == req.params.id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send({ msg: 'user not found' });
  }
});

app.post('/api/users', (req, res) => {
  const user = { id: getNextId(), ...req.body };

  users = [...users, user];

  res.send(users);
});

app.put('/api/users/:id', (req, res) => {
  const { id } = req.params;

  const userIndex = users.findIndex(f => f.id == id);

  if (userIndex > -1) {
    const user = { ...users[userIndex], ...req.body };

    users = [
      ...users.slice(0, userIndex),
      users,
      ...users.slice(userIndex + 1)
    ];
    res.send(users);
  } else {
    res.status(404).send({ msg: 'user not found' });
  }
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;

  user = users.filter(f => f.id !== Number(id));

  res.send(user);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
