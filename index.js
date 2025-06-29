const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());
let users = [
  {
    id: "1",
    name: "nand",
    email: "nand@gmail.com"
  },
  {
    id: "2",
    name: "shivanand",
    email: "shivanand@gmail.com"
  }
];


app.get('/', (req, res) => {
  res.send('Welcome to the Users API');
});



app.post('/users', (req, res) => {
  const user = req.body;
  user.id = Date.now().toString();
  users.push(user);
  res.status(201).json(user);
});


app.get('/users', (req, res) => {
  res.json(users);
});


app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});


app.put('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'User not found' });
  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
});


app.delete('/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'User not found' });
  const deletedUser = users.splice(index, 1);
  res.json(deletedUser[0]);
});


app.use((req, res) => {
  res.status(404).send('404 Not Found');
});


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
