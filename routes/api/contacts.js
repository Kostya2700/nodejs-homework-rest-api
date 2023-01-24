const express = require("express");

const { contacts } = require("../../controllers");
const auth = require("../../middleware/auth");
const isValidId = require("../../middleware/helpers");

const router = express.Router();
router.get("/", auth, contacts.getAllContacts);

router.get("/:contactId", isValidId, contacts.getById);

router.post("/", auth, contacts.addContacts);

router.delete("/:contactId", contacts.deleteContacts);

router.put("/:contactId", isValidId, contacts.updateContacts);

router.patch("/:contactId/favorite", isValidId, contacts.updateStatusContact);

module.exports = router;
