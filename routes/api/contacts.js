const express = require("express");
const createError = require("http-errors");
const Joi = require("joi");
const productSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

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
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      throw createError(400, "missing required name field");
    }
    const result = contactsOperations.addContact(req.body);
    console.log("result", result);
    res.status(201).json({
      status: "succes",
      code: 201,
      data: {
        result: req.body,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      throw createError(400, "missing fields");
    }
    const { contactId } = req.params;
    const result = await contactsOperations.updateContactById(
      contactId,
      req.body
    );
    return res.json({ status: "succes", code: 200, data: { result } });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
