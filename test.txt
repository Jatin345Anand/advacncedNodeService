'use strict';

const express = require('express');
const app = express();
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

// In-memory storage for users
let users = [];

app.post('/candidates', function(req, res) {
    const { id, name, skills } = req.body;

    // Validate input
    if (!id || !name || !skills) {
        return res.status(400).json({ error: 'Please provide id, name, and skills' });
    }

    // Check if user already exists
    const existingUser = users.find(user => user.id === id);
    if (existingUser) {
        return res.status(409).json({ error: 'User with this ID already exists' });
    }

    // Add new user to the memory
    const newUser = { id, name, skills };
    users.push(newUser);

    res.status(201).json({ message: 'User added successfully', user: newUser });
});


app.get('/candidates/search', function(req, res) {
    let skills = req.query.skills;
    skills = skills.split(',')
    if (!skills) {
        return res.status(400).json({ error: 'Please provide skills' });
    }

    const user = users.filter(obj => {
        return skills.every(element => obj.skills.includes(element));
      });
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.status(201).json({ message: 'User searched successfully', user: user });


});

app.listen(process.env.HTTP_PORT || 3000);
