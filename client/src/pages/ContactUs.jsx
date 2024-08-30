import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function ContactUs() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const { from_name, from_email, message } = formData;

    // Basic form validation
    if (!from_name || !from_email || !message) {
      setError('All fields are required.');
      return;
    }

    setError('');

    emailjs.sendForm('service_9mp4t3q', 'template_inqvfjh', form.current, 'oqTfP-HP0MvvlK8fs')
      .then(
        () => {
          toast.success('Message sent successfully!');
          console.log('SUCCESS!');
          setSuccess('Your message has been sent successfully.');
          setTimeout(() => navigate('/'), 2000); 
        },
        (error) => {
          toast.error('Failed to send message. Please try again later.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">Contact Us</h2>

          {/* Error Message */}
          {error && <p className="text-red-500 dark:text-red-400 text-center mb-4">{error}</p>}

          {/* Success Message */}
          {success && <p className="text-green-500 dark:text-green-400 text-center mb-4">{success}</p>}

          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label htmlFor="from_name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="from_name"
                name="from_name" // Ensure it matches the EmailJS template variable
                value={formData.from_name}
                onChange={handleChange}
                className="w-full px-3 py-2  dark:text-white border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-pink-500 transition duration-300"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="from_email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="from_email"
                name="from_email" // Ensure it matches the EmailJS template variable
                value={formData.from_email}
                onChange={handleChange}
                className="w-full  dark:text-white px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-pink-500 transition duration-300"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message" // Ensure it matches your EmailJS template variable
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full dark:text-white px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-pink-500 transition duration-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-700 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default ContactUs;
