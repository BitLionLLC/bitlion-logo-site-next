import React, { useState } from 'react';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setSuccess(true);
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('Error submitting form:', err);
    } finally {
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
    <div className='w-screen h-screen fixed bg-black'>
      <div className="max-w-[600px] mx-auto my-8 p-8 bg-gray-800 rounded-lg shadow-xl">
        <h1 className='text-white mb-8 text-center font-bold text-2xl'>App Store Support</h1>
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
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#33F0CE] text-gray-900 px-4 py-4 rounded-md text-base font-semibold cursor-pointer transition-all hover:bg-[#2cd9b9] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Support; 