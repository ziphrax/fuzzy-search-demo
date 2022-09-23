const mongoose = require('mongoose');
const { User } = require('./user.js');

const options = {
    useUnifiedTopology: true,
}

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/fuzz', options);

const run = async() => {
    let users = await User.fuzzySearch('jo');

    console.log(users);

    users = await User.fuzzySearch('ja');

    console.log(users);

    users = await User.fuzzySearch('do');

    console.log(users);

    users = await User.fuzzySearch('doe');

    console.log(users);

    users = await User.fuzzySearch('jail');

    console.log(users);
};

run();