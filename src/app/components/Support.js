'use client';

import { useCallback, useRef, useState } from 'react';
import Recaptcha, { RECAPTCHA_SITE_KEY } from './Recaptcha';

function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const recaptchaRef = useRef(null);

  // Stable identity so the widget is never re-created as the form is typed in.
  const handleRecaptchaChange = useCallback((token) => {
    setRecaptchaToken(token);
    if (token) setError(null);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setError('Please confirm you are not a robot.');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSuccess(true);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again later.');
      console.error('Error submitting form:', err);
    } finally {
      // v2 tokens are single-use and Google will reject a replay, so the
      // checkbox has to be re-solved whether or not the send succeeded.
      recaptchaRef.current?.reset();
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="mx-auto my-8 max-w-[600px] rounded-lg bg-gray-800 p-8 shadow-xl">
      {error && (
        <div className="bg-red-900/50 text-red-200 p-4 mb-4 rounded border border-red-700">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-900/50 text-green-200 p-4 mb-4 rounded border border-green-700">
          Thank you for your message. We will get back to you soon!
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium text-gray-300">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="Enter your name"
            className="p-3 border border-gray-600 rounded-md bg-gray-700 text-white text-base disabled:bg-gray-800 disabled:cursor-not-allowed placeholder:text-gray-400 focus:border-[#33F0CE] focus:ring-1 focus:ring-[#33F0CE] outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-medium text-gray-300">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="Enter your email address"
            className="p-3 border border-gray-600 rounded-md bg-gray-700 text-white text-base disabled:bg-gray-800 disabled:cursor-not-allowed placeholder:text-gray-400 focus:border-[#33F0CE] focus:ring-1 focus:ring-[#33F0CE] outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="font-medium text-gray-300">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="Enter the subject of your message"
            className="p-3 border border-gray-600 rounded-md bg-gray-700 text-white text-base disabled:bg-gray-800 disabled:cursor-not-allowed placeholder:text-gray-400 focus:border-[#33F0CE] focus:ring-1 focus:ring-[#33F0CE] outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-medium text-gray-300">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="Type your message here..."
            className="p-3 border border-gray-600 rounded-md bg-gray-700 text-white text-base min-h-[150px] resize-y disabled:bg-gray-800 disabled:cursor-not-allowed placeholder:text-gray-400 focus:border-[#33F0CE] focus:ring-1 focus:ring-[#33F0CE] outline-none"
          />
        </div>
        <Recaptcha ref={recaptchaRef} onChange={handleRecaptchaChange} />
        <button
          type="submit"
          disabled={isSubmitting || !RECAPTCHA_SITE_KEY}
          className="bg-[#33F0CE] text-gray-900 px-4 py-4 rounded-md text-base font-semibold cursor-pointer transition-all hover:bg-[#2cd9b9] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default Support;
