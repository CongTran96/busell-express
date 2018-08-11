var { mongoose, uniqueValidator } = require('../services/mongoose');
var bcrypt = require('bcryptjs');

/**
 * ----- SCHEMA ------
 */

var UserSchema = new mongoose.Schema({
  firstname: { type: String, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9\s]+$/, 'is invalid'] },
  lastname: { type: String, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9\s]+$/, 'is invalid'] },
  username: { type: String, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
  email: { type: String, unique: true, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
  password: { type: String, select: false }
}, { timestamps: true });

/**
 * ------ SATATIC METHOD ------
 */

// assign a function to the "statics" object of our UserSchemal
UserSchema.statics.getAll = function (callback) {
  return this.find({}, callback);
};

UserSchema.statics.setPassword = function (password) {
  return bcrypt.hashSync(password, 8);
}


/**
 * ------ Virtuals FIELD ------
 */
UserSchema.virtual('fullName')
  .get(function () {
    return this.name.first + ' ' + this.name.last;
  })
  .set(function (fullname) {
    this.firstname = fullname.substr(0, fullname.indexOf(' '));
    this.lastname = fullname.substr(fullname.indexOf(' ') + 1);
  });


/**
 * ------ INSTANCE METHOD ------
 */

UserSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, 8);
};

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

/**
 * ----- PLUGIN ------
 */

UserSchema.plugin(uniqueValidator, { message: 'user is already taken.' });

/**
 * ----- MODEL ------
 */
var User = mongoose.model('User', UserSchema);

module.exports = User;