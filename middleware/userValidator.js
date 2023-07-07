const joi = require('@hapi/joi');

const schema = joi.object().keys({
      name: joi.string().min(3).max(30).required(),
      email: joi.string().email().lowercase().required(),
      password: joi.string().min(2).required(),
});

module.exports = schema;