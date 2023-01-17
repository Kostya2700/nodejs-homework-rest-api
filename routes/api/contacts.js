const express = require("express");

const router = express.Router();
const contactsOperations = require("../../models/contacts");
router.get("/", async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts();
    return contacts;
  } catch (error) {
    console.log("error", error);
  }
  res.json({ message: "template message" });
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
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
