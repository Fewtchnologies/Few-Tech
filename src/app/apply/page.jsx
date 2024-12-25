"use client";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const MotionDiv = motion.div;

export default function ApplyInternship() {
  const [state, handleSubmit] = useForm("mlddryvk");

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      <BackgroundAnimation />
      <div className="flex flex-col items-center justify-center h-screen z-10">
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center z-10"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg mb-4 leading-tight pb-2">
            Apply for Internships
          </h1>
          <p className="mt-6 text-lg sm:text-xl font-bold lg:text-2xl max-w-xl mx-auto text-gray-300 tracking-wide leading-relaxed">
            Join our team and start your career with us!
          </p>
        </MotionDiv>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mt-8 space-y-4 relative"
        >
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md text-black"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md text-black"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            className="w-full p-3 rounded-md text-black"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />

          <input
            id="resumeLink"
            type="url"
            name="resumeLink"
            placeholder="Link to Your Resume"
            required
            className="w-full p-3 rounded-md text-black"
          />
          <ValidationError
            prefix="Resume Link"
            field="resumeLink"
            errors={state.errors}
          />

          <textarea
            id="coverLetter"
            name="coverLetter"
            placeholder="Your Cover Letter"
            required
            className="w-full p-3 rounded-md text-black"
          />
          <ValidationError
            prefix="Cover Letter"
            field="coverLetter"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md font-semibold"
          >
            Submit Application
          </button>
        </form>

        {state.succeeded && (
          <p className="mt-4 text-green-500">
            Thank you for applying! We'll get back to you soon.
          </p>
        )}
      </div>
    </div>
  );
}

function BackgroundAnimation() {
  return (
    <MotionDiv
      className="absolute top-0 left-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
      style={{ zIndex: -1, pointerEvents: "none" }}
    >
      <MotionDiv
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
      <MotionDiv
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
    </MotionDiv>
  );
}
