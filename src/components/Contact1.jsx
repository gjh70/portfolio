import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact1 = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4cpxyv1",
        "template_yavl23l",
        form.current,
        "gmdvr_JSWWrf0Ll92"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14 w-full max-w-md">
        <h1 className="text-center text-5xl md:text-7xl whitespace-nowrap">
  <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
    Get in Touch
  </span>
</h1>

        <p className="text-center text-lg font-semibold text-gray-500">Connect using the form below</p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="rounded border border-gray-300 p-3 text-black"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="rounded border border-gray-300 p-3 text-black"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="rounded border border-gray-300 p-3 text-black"
          />
          <button
            type="submit"
            className="rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
          >
            Send Message
          </button>
        </form>

        {statusMessage && (
          <p className="mt-4 text-center  text-white">{statusMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Contact1;
