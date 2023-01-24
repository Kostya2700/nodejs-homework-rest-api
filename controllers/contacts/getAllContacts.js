const { modelContact } = require("../../models");

const getAllContacts = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const { _id } = req.user;
    const contacts = await modelContact.Contact.find(
      { owner: _id },
      "name phone email favorite ",
      { skip, limit: Number(limit) }
    );
    console.log("contacts", contacts);
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
