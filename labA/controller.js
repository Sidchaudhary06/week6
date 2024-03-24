const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
});

const Contact = mongoose.model("Contact", contactSchema);

// Get all Contacts
const getContacts = async (req, res) => {
  const contacts = await Contact.find({});
  res.status(200).json(contacts);
};

// Add one Contact
const addContact = async (req, res) => {
  const { firstName, lastName, email , phone ,address } = req.body;
  const newContact = new Contact({ firstName, lastName, email , phone ,address });
  await newContact.save();
  res.status(201).json(newContact);
}
module.exports = { getContacts, addContact};