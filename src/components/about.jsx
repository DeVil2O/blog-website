import React, { useState, useEffect } from "react";

const About = () => {
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
      </div>
    </div>
  );
};

export default About;
