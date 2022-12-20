/* eslint-disable @typescript-eslint/no-var-requires */
const { Schema, model } = require('mongoose');

const Role = new Schema({
  value: { type: String, default: 'USER' }
});

module.exports = model('Role', Role);
