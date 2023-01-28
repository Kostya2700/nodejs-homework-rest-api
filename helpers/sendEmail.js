const sgEmail = require("@sendgrid/mail");
require("dotenv").config();
const { MYAPI_SENDGRID } = process.env;

sgEmail.setApiKey(MYAPI_SENDGRID);

const sendEmail = async (body) => {
  try {
    const email = { ...body, from: "kostizavali@meta.ua" };
    await sgEmail.send(email);
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = sendEmail;
