const db = require('../config/connection');
const { Application, User } = require('../models');

const data = require('./data.json');
const userSeed = require('./userSeeds.json')

db.once('open', async () => {
  await Application.deleteMany({});
  await User.deleteMany({});

  await Application.insertMany(data);
  await User.insertMany(userSeed);

  console.log('ApplicationData was seeded!');
  process.exit(0);
});