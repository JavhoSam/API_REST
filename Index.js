const express = require('express');
const app = express();

app.use(express.json());

const Users = [
    {id: 0,
        Name: "Jefferson Gutierritos",
        Age: 19,
        Role: "Admin",
        Phone: "322-0000-000",
        Country: "Mexico",
        Email: "Example0@gmail.com",
        IsActivated: false},

    {id: 1,
        Name: "Alvin Yakitori",
        Age: 21,
        Role: "User",
        Phone: "322-0000-001",
        Country: "Colombia",
        Email: "Example16@gmail.com",
        IsActivated: true},

    {id: 2,
        Name: "Carlos Santana",
        Age: 20,
        Role: "User",
        Phone: "322-0000-002",
        Country: "Spain",
        Email: "Example2@gmail.com",
        IsActivated: true}]

app.get('/', (req, res) => {
    res.send('Welcome to my API_REST project');
});

app.get('/api/users', (req, res) => {
    res.send(Users);
});

app.get('/api/users/:id', (req, res) => {
    const User = Users.find(c => c.id === parseInt(req.params.id));
    if(!User) return res.status(404).send('User not found');
    else res.send(User);
});

app.post('/api/users', (req, res) =>{
    const User = {
        id: Users.length + 1,
        Name: req.body.Name,
        Age: parseInt(req.body.Age),
        Role: req.body.Role,
        Phone: req.body.Phone,
        Country: req.body.Country,
        Email: req.body.Email,
        IsActivated: (req.body.IsActivated === 'true')
    };

    Users.push(User);
    res.send(User);
});

app.delete('/api/users/:id', (req, res) => {
    const User = Users.find(c => c.id === parseInt(req.params.id));
    if(!User) return res.status(404).send('User not found');
    
    const index = Users.indexOf(User);
    Users.splice(index, 1);
    res.send(User);
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Listening on port ${port}`));