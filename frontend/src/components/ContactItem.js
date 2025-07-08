// frontend/src/components/ContactItem.js
import React from 'react';

const ContactItem = ({ contact, onEdit, onDelete }) => {
  return (
    <div className="contact-card">
      <h4>{contact.firstName} {contact.lastName}</h4>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Address: {contact.address}</p>
      <button onClick={() => onEdit(contact)}>Edit</button>
      <button onClick={() => onDelete(contact._id)}>Delete</button>
    </div>
  );
};

export default ContactItem;
