const { modelContact } = require("../../models");

const getAllContacts = async (req, res, next) => {
  try {
    const contacts = await modelContact.Contact.find({}, "name phone email");
    return res.json({
      status: "success",
      code: 200,
      data: { result: contacts },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getAllContacts;
