const mongoose = require('mongoose');
const { User } = require('./user.js');
const csv = require("csvtojson");

const options = {
    useUnifiedTopology: true,
}

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/fuzz', options);

const run = async() => {
    const jsonArray = await csv().fromFile('./test-data.csv');
    console.log({ jsonArray });
    await User.create(jsonArray);
};

run();