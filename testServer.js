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
        title: 'Running',
        enjoyment: 4,
        energy: 6,
        engagement: 4,
        timestamp: '02/2 06:15 pm',
        id: 66
      },
      {
        title: 'Journaling',
        enjoyment: 8,
        energy: 9,
        engagement: 10,
        timestamp: '01/30 02:05 pm',
        id: 25
      },
      {
        title: 'TV',
        enjoyment: 6,
        energy: 2,
        engagement: 7,
        timestamp: '01/28 09:20 pm',
        id: 266
      },
      {
        title: 'Biking',
        enjoyment: 8,
        energy: 6,
        engagement: 9,
        timestamp: '01/23 04:45 pm',
        id: 26634
      },
      {
        title: 'Swimming',
        enjoyment: 6,
        energy: 7,
        engagement: 6,
        timestamp: '01/13 12:45 pm',
        id: 26543
      },
      {
        title: 'Running',
        enjoyment: 4,
        energy: 6,
        engagement: 4,
        timestamp: '02/2 06:15 pm',
        id: 66
      },
      {
        title: 'Journaling',
        enjoyment: 8,
        energy: 9,
        engagement: 10,
        timestamp: '01/30 02:05 pm',
        id: 25
      },
      {
        title: 'TV',
        enjoyment: 6,
        energy: 2,
        engagement: 7,
        timestamp: '01/28 09:20 pm',
        id: 266
      },
      {
        title: 'Biking',
        enjoyment: 8,
        energy: 6,
        engagement: 9,
        timestamp: '01/23 04:45 pm',
        id: 26634
      },
      {
        title: 'Swimming',
        enjoyment: 6,
        energy: 7,
        engagement: 6,
        timestamp: '01/13 12:45 pm',
        id: 26543
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
        title: `It's working!`,
        enjoyment: 8,
        energy: 6,
        engagement: 9,
        timestamp: '02/2 06:15 pm', // Date.now() or moment.js
        id: 22
      },
      {
        title: 'Testing',
        enjoyment: 6,
        energy: 2,
        engagement: 7,
        timestamp: '01/28 09:20 pm',
        id: 2
      },
      {
        title: 'Testing Works',
        enjoyment: 8,
        energy: 6,
        engagement: 9,
        timestamp: '01/23 04:45 pm',
        id: 3
      },
      {
        title: 'Woo!',
        enjoyment: 6,
        energy: 7,
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
