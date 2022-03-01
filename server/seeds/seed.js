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

// db.once('open', async () => {
//   try {
//     await Application.deleteMany({});
//     await User.deleteMany({});
//     await User.create(userSeeds);
//     for (let i = 0; i < thoughtSeeds.length; i++) {
//       const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
//       const user = await User.findOneAndUpdate(
//         { username: thoughtAuthor },
//         {
//           $addToSet: {
//             thoughts: _id,
//           },
//         }
//       );
//     }
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
//   console.log('all done!');
//   process.exit(0);
// });