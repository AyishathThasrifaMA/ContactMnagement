// frontend/src/components/ContactList.js
import React from 'react';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  return (
    <div className="contact-list">
      <h3>Contact List</h3>
      {contacts.length === 0 && <p>No contacts found.</p>}
      {contacts.map(contact => (
        <ContactItem key={contact._id} contact={contact} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ContactList;
