import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_stslghp", "template_wo2rfta", form.current, {
        publicKey: "ZRBw-xhTyQEbEp5Zo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <h2 className="text-center mb-8 text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
        Get in
        <span className="bg-gradient-to-r from-[#9a6680] to-[#641937] text-transparent bg-clip-text">
          {" "}
          Touch
        </span>
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full border p-8 rounded-md flex flex-col"
      >
        <div className="w-full flex flex-col my-4">
          <label className="mb-2" htmlFor="from_name">
            Your Name
          </label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            className=" outline-none rounded-md border-b px-4 py-2"
          />
        </div>

        <div className="w-full flex flex-col my-4">
          <label className="mb-2" htmlFor="from_email">
            Your Email
          </label>
          <input
            type="email"
            name="from_email"
            id="from_email"
            className=" outline-none rounded-md border-b px-4 py-2"
          />
        </div>

        <div className="w-full flex flex-col my-4">
          <label className="mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className=" outline-none rounded-md border-b px-4 py-2"
          />
        </div>

        <div className="w-full flex flex-col my-4">
          <label className="mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className=" outline-none rounded-md border-b px-4 py-2"
          />
        </div>

        <div className="w-full flex flex-col my-4">
          <label className="mb-2" htmlFor="date_received">
            Date Received
          </label>
          <input
            type="text"
            name="date_received"
            id="date_received"
            className=" outline-none rounded-md border-b px-4 py-2"
            value={new Date().toLocaleDateString()}
            readOnly
          />
        </div>

        <input
          type="submit"
          value="Send Message"
          className="bg-gradient-to-r from-[#9a6680] to-[#641937] px-4 py-2 rounded-md text-white"
        />
      </form>
    </div>
  );
};

export default Contact;
