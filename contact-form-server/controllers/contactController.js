const Contact = require('../models/Contact');
const { sendContactEmail } = require('../config/mailer');

const submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    // Save to database
    const newContact = new Contact({
      name,
      email,
      phone,
      course,
      message,
    });

    await newContact.save();

    // Send email
    await sendContactEmail({ name, email, phone, course, message });

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: newContact,
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false,
      message: 'Error submitting contact form',
      error: error.message,
    });
  }
};

module.exports = { submitContactForm };