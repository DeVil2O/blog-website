import React, { useState, useEffect } from "react";

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        about: "",
        eventName: "",
        websiteLink: "",
        ctfLink: "",
        pastEventLink: "",
        pastEventAttendees: "",
        expectedAttendees: "",
        eventDates: "",
        socialMediaLinks: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted: ", formData);
      };
    
  return (
    <div className="h-full flex flex-col items-center bg-white bg-grid font-primary">
      <div className="text-[3.5rem] w-full flex justify-center text-center mt-7">
        <div className="w-4/5 text-center">
          <div className="font-bold">Get in Touch</div>
          <p className="text-base font-medium">
            Is it feedback, question, partnership? We are all ears!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-bold mt-16 text-6xl text-center">
          Have Questions
        </div>
        <div className="font-bold mt-4 text-6xl text-center">Contact Us!</div>
        <p className="text-base font-medium w-3/5 text-center my-4">
        If you didn’t find what you are looking for, reach out to us and we will get back to you as soon as possible.
        </p>
        <form
        onSubmit={handleSubmit}
        className="p-6 rounded-lg shadow-md w-full max-w-lg"
      >

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          required
        />

        <select
          name="about"
          value={formData.about}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          required
        >
          <option value="">Select an option</option>
          <option value="Event Sponsorship">Event Sponsorship</option>
          <option value="Community Collaboration">Community Collaboration</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>

        <input
          type="text"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
          placeholder="Enter event or community name"
          className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />

        <input
          type="url"
          name="websiteLink"
          value={formData.websiteLink}
          onChange={handleChange}
          placeholder="Enter website link"
          className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />

        <input
          type="url"
          name="ctfLink"
          value={formData.ctfLink}
          onChange={handleChange}
          placeholder="Enter CTF time link"
          className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />

        <input
          type="url"
          name="pastEventLink"
          value={formData.pastEventLink}
          onChange={handleChange}
          placeholder="Enter past event link"
          className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />

        <input
          type="text"
          name="pastEventAttendees"
          value={formData.pastEventAttendees}
          onChange={handleChange}
          placeholder="Enter number of past attendees"
          className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />

        <input
          type="number"
          name="expectedAttendees"
          value={formData.expectedAttendees}
          onChange={handleChange}
          placeholder="Enter expected attendees"
          className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />

        <input
          type="date"
          name="eventDates"
          value={formData.eventDates}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />

        <input
          type="url"
          name="socialMediaLinks"
          value={formData.socialMediaLinks}
          onChange={handleChange}
          placeholder="Enter social media links"
          className="w-full p-2 mb-4 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 py-2 px-4 rounded hover:bg-blue-700 text-white font-bold"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default GetInTouch;
