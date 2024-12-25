"use client";

import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mqaazvwv");

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      <BackgroundAnimation />
      <div className="flex flex-col items-center justify-center px-4 h-screen z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center z-30"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg mb-4 leading-tight pb-2">
            Contact Us
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl font-bold max-w-xl mx-auto text-gray-300 tracking-wide leading-relaxed">
            We're here to help and answer any questions you might have!
          </p>
        </motion.div>

        {state.succeeded ? (
          <p className="text-green-500 mt-6">Thanks for joining!</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm sm:max-w-md mt-8 space-y-4 z-30"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md text-white bg-gray-800 border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-md text-white bg-gray-800 border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Send Message
            </button>
          </form>
        )}
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
        className="absolute w-72 sm:w-80 md:w-96 h-72 sm:h-80 md:h-96 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-70"
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
        className="absolute w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-70"
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
