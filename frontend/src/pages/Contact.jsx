import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 flex items-center justify-center px-4">
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl w-full max-w-lg shadow">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="
              w-full p-3 rounded border
              bg-white text-gray-900 border-gray-300
              dark:bg-transparent dark:text-white dark:border-gray-600
              placeholder:text-gray-500 dark:placeholder:text-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="
              w-full p-3 rounded border
              bg-white text-gray-900 border-gray-300
              dark:bg-transparent dark:text-white dark:border-gray-600
              placeholder:text-gray-500 dark:placeholder:text-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="
              w-full p-3 rounded border
              bg-white text-gray-900 border-gray-300
              dark:bg-transparent dark:text-white dark:border-gray-600
              placeholder:text-gray-500 dark:placeholder:text-gray-300
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
