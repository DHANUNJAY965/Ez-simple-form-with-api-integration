import React, { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Email is required');
      return;
    }
    if (!validateEmail(email)) {
      setMessage('Invalid email');
      return;
    }

    try {
      const response = await fetch('http://34.225.132.160:8002/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 422) {
        setMessage('Email ends with @ez.works is not allowed');
      } else if (response.status === 200) {
        setMessage('Form Submitted');
      }
    } catch (error) {
      setMessage('Error submitting the form');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center py-10">
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded-md"
      />
      <button type="submit" className="bg-orange-600 text-white p-2 rounded-md ml-4">Contact Me</button>
      {message && <div className="mt-4 text-red-600">{message}</div>}
    </form>
  );
};

export default ContactForm;
