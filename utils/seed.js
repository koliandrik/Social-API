const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    try {
        await User.deleteMany({});
        await Thought.deleteMany({});
        await User.create(users);
        await Thought.create(thoughts);
        console.log('Seeding complete! 🌱');
    } catch (error) {
        console.error(error);
    }
    process.exit(0);
    }
);
