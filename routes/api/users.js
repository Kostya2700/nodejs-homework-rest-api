const express = require("express");
const { users } = require("../../controllers");
const auth = require("../../middleware/auth");

const router = express.Router();

router.post("/register", users.register);

router.get("/users/verify/:verificationToken", users.verifyEmail);

router.post("/users/verify", users.resendEmail);

router.post("/login", users.login);

router.post("/logout", auth, users.logout);

module.exports = router;
