const mongoose = require('mongoose');
mongoose.set("strictQuery", false);

const mongoDB = 'mongodb+srv://atril3123:NBvBiWLR7LpKSDcU@developerdb.brhu2mj.mongodb.net/'

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoDB);

  const Schema = mongoose.Schema;
  const userSchema = new Schema({
    name: String,
    email: String,
    age: Number
  });

  const User = mongoose.model('User', userSchema);

  // Example: Creating a new user
  const newUser = new User({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30
  });

  await newUser.save();
  console.log('User created successfully');
}

console.log(mongoDB);
