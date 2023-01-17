const { v4: idContacts } = require("uuid");
const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.resolve("./contacts.json");
console.log("contactsPath", contactsPath);

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    console.table(contacts);
  } catch (error) {
    console.log("error", error);
  }
};

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    const getContact = contacts.find((item) => item.id === contactId);
    if (!getContact) {
      console.log(`Contact with ${contactId} not found`);
      return null;
    }
    console.table(getContact);
  } catch (error) {
    console.log("error", error);
  }
};

const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    const contact = contacts.filter((item) => item.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(contact));
    const deleteContacts = await fs.readFile(contactsPath, "utf-8");
    console.table(JSON.parse(deleteContacts));
  } catch (error) {
    console.log("error", error);
  }
};

const addContact = async (body) => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    const addContact = { ...body, id: idContacts() };
    contacts.push(addContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    const newContacts = await fs.readFile(contactsPath, "utf-8");
    console.table(JSON.parse(newContacts));
  } catch (error) {
    console.log("error", error);
  }
};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
