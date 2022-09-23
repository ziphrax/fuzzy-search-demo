const mongoose = require('mongoose');
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
});

UserSchema.plugin(mongoose_fuzzy_searching, { fields: ['firstName', 'lastName'] });

const User = mongoose.model('User', UserSchema);

module.exports = { User };