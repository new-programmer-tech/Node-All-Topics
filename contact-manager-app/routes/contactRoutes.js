const express = require('express');
const router = express.Router();
const {
   getAllContacts,
   getContactById,
   createContact,
   updateContact,
   deleteContact,
} = require('../controllers/contact-controller');

// Route Definitions
router.route('/').get(getAllContacts);        // Get all contacts
router.route('/:id').get(getContactById);     // Get contact by ID
router.route('/').post(createContact);        // Create a contact
router.route('/:id').put(updateContact);      // Update contact by ID
router.route('/:id').delete(deleteContact);   // Delete contact by ID

module.exports = router;
