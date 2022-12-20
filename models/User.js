/* eslint-disable @typescript-eslint/no-var-requires */
const { Schema, model } = require('mongoose');

const User = new Schema({
  username: { type: 'string', required: true, unique: true },
  password: { type: 'string', required: true },
  roles: [{ type: Schema.Types.String, ref: 'Role' }]
});

module.exports = model('User', User);
