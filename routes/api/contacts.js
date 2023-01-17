const express = require("express");
const createError = require("http-errors");

const router = express.Router();
const contactsOperations = require("../../models/contacts");
router.get("/", async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts();
    return res.json({
      status: "succes",
      code: 200,
      data: { result: contacts },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const contacts = await contactsOperations.getContactById(contactId);
    if (!contacts) {
      throw createError(404, `Contacts with ${contactId} not found`);
    }
    return res.json({
      status: "succes",
      code: 200,
      data: { result: contacts },
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
