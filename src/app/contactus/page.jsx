"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {  // Use relative API path
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Your message has been sent successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setMessage("Failed to send message. Please try again later.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      <BackgroundAnimation />
      <div className="flex flex-col items-center justify-center h-screen z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center z-30"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg mb-4 leading-tight pb-2">
            Contact Us
          </h1>
          <p className="mt-6 text-lg sm:text-xl font-bold lg:text-2xl max-w-xl mx-auto text-gray-300 tracking-wide leading-relaxed">
            We're here to help and answer any questions you might have!
          </p>
        </motion.div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mt-8 space-y-4 z-30"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md text-white bg-gray-800 border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md text-white bg-gray-800 border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md text-white bg-gray-800 border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            Send Message
          </button>
        </form>

        {message && <p className="mt-4 text-green-500">{message}</p>}
      </div>
    </div>
  );
}

function BackgroundAnimation() {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-70"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.5, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-70"
        animate={{
          x: [100, -100, 100],
          y: [100, -100, 100],
          scale: [1, 1.5, 1],
          rotate: [360, 0],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
    </motion.div>
  );
}