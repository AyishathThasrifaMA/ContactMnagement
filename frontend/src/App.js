
import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import api from './api';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selected, setSelected] = useState(null);

  const fetchContacts = async () => {
    const res = await api.get('/');
    setContacts(res.data);
  };

  const deleteContact = async (id) => {
    await api.delete(`/${id}`);
    fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div>
      <h1>📇 Contact Management App</h1>
      <ContactForm selected={selected} fetchContacts={fetchContacts} clearSelected={() => setSelected(null)} />
      <hr />
      <ContactList contacts={contacts} onEdit={setSelected} onDelete={deleteContact} />
    </div>
  );
};

export default App;
