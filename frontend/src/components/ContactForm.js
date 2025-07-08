// frontend/src/components/ContactForm.js
import React, { useState, useEffect } from 'react';
import api from '../api';

const ContactForm = ({ selected, fetchContacts, clearSelected }) => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', address: ''
  });

  useEffect(() => {
    if (selected) setForm(selected);
  }, [selected]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selected) {
        await api.put(`/${selected._id}`, form);
      } else {
        await api.post('/', form);
      }
      fetchContacts();
      clearSelected();
      setForm({ firstName: '', lastName: '', email: '', phone: '', address: '' });
    } catch (err) {
      alert(err.response.data.error || 'Error saving contact');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
      <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
      <button type="submit">{selected ? 'Update' : 'Add'} Contact</button>
      {selected && <button type="button" onClick={clearSelected}>Cancel</button>}
    </form>
  );
};

export default ContactForm;
