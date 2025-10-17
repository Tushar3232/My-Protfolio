import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);
      setStatus("success");
      e.target.reset(); // ফর্ম ক্লিয়ার করে দেবে
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-black py-20 px-4">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-cyan-400">
          Contact Me
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-white">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full border border-gray-700 bg-[#0f0f0f] text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-white">Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full border border-gray-700 bg-[#0f0f0f] text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-white">Subject / Title</label>
            <input
              type="text"
              name="title"
              required
              placeholder="Subject"
              className="w-full border border-gray-700 bg-[#0f0f0f] text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-white">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-700 bg-[#0f0f0f] text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-cyan-400 text-black py-2 rounded hover:bg-cyan-500 transition font-semibold"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-500 text-center mt-2">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-500 text-center mt-2">
              ❌ Failed to send message. Try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
