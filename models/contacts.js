const { v4: idContacts } = require("uuid");
const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");
console.log("contactsPath", contactsPath);

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    return contacts;
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
      return null;
    }
    return getContact;
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

const updateContact = async (contactId, body) => {
  try {
    const allContacts = await listContacts();
    const contactsIndex = allContacts.findIndex(
      (contact) => contact.id === contactId
    );
    if (contactsIndex !== -1) {
      allContacts[contactsIndex].email = body.email;
      allContacts[contactsIndex].name = body.name;

      await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));
    }
  } catch (error) {}
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
