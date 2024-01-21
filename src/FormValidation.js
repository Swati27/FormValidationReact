import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState('');

  const validateAndSubmit = () => {
    // Validation logic
    const nameRegex = /^[a-zA-Z ]{1,20}$/;
    const mobileRegex = /^[0-9]{10}$/;
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9.]{1,10}@[a-zA-Z]{2,20}\.[a-zA-Z]{2,10}$/;

    if (!nameRegex.test(name)) {
      setError('Invalid name. Please enter only letters and spaces, up to 20 characters.');
      return;
    }

    if (!mobileRegex.test(mobile)) {
      setError('Invalid mobile number. Please enter 10 digits.');
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Invalid email. Please enter a valid email address.');
      return;
    }

    // If all validations pass, reset form data, hide error, and update contacts
    setError('');
    setName('');
    setMobile('');
    setEmail('');
    setContacts([...contacts, { name, mobile, email }]);
  };

  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form>
        <label>Contact Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Mobile Number:</label>
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} required />

        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <button type="button" onClick={validateAndSubmit}>
          Submit
        </button>
      </form>

      <table style={{ display: contacts.length > 0 ? 'table' : 'none' }}>
        <thead>
          <tr>
            <th>Contact Name</th>
            <th>Mobile Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.mobile}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactForm;
