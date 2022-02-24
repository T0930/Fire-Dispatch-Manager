const db = require('../config/connection');
const { Application } = require('../models');

const data = require('./data.json');

db.once('open', async () => {
  await Application.deleteMany({});

  await Application.insertMany(data);

  console.log('ApplicationData was seeded!');
  process.exit(0);
});