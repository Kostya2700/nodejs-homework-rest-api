const { contactsSchema } = require("./contactsSchema");
const { updateFavoriteContact } = require("./favoriteSchema");
const { usersSchema } = require("./usersSchema");
const { loginSchema } = require("./loginSchema");
const { emailSchema } = require("./emailSchema");

module.exports = {
  contactsSchema,
  updateFavoriteContact,
  usersSchema,
  loginSchema,
  emailSchema,
};
