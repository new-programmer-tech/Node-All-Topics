// contactController.js

// Get all contacts
const getAllContacts = (req, res) => {
   res.send("Get all contacts");
};

// Get a single contact by ID
const getContactById = (req, res) => {
   const { id } = req.params;
   res.send(`Get contact with ID: ${id}`);
};

// Create a new contact
const createContact = (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(400)
    throw new Error("All fields are required");
  }
   res.send("Create a new contact");
};

// Update an existing contact by ID
const updateContact = (req, res) => {
   const { id } = req.params;
   res.send(`Update contact with ID: ${id}`);
};

// Delete a contact by ID
const deleteContact = (req, res) => {
   const { id } = req.params;
   res.send(`Delete contact with ID: ${id}`);
};

module.exports = {
   getAllContacts,
   getContactById,
   createContact,
   updateContact,
   deleteContact,
};
