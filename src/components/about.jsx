import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";

const teamList = [
  {
    name: "Chirag Garg",
    role: "Co-Founder",
    subRole: "Blockchain Developer",
    avatar: "https://avatars.githubusercontent.com/u/38765776?v=4",
    twitterHandle: "@DeVil2O",
    githubLink: "https://github.com/DeVil2O/",
    twitterLink: "https://twitter.com/ChiragG60642348",
  },
  {
    name: "Gaurav Tiwari",
    role: "Co-Founder",
    avatar: "https://avatars.githubusercontent.com/u/45980323?v=4",
    twitterHandle: "@krsihndaas",
    githubLink: "https://github.com/Gauravtwr",
    twitterLink: "https://x.com/Gaurav_Tiwari07",
  },
];

const About = () => {
  return (
    <div className="h-full min-h-screen flex flex-col items-center bg-white bg-grid font-primary">
      <div className="text-[3.5rem] w-full flex justify-center text-center mt-7">
        <div className="w-4/5 text-center">
          <div className="font-bold">Team</div>
          <p className="text-base font-medium">
            We are Web3, AI, and robotics experts, contributing to top
            open-source projects that power decentralized networks and
            intelligent systems globally.
          </p>
        </div>
      </div>
      <div className="w-3/5 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamList.map((member, index) => (
          <div
            key={index}
            className="relative flex flex-col my-6 bg-white border border-slate-200 w-72 p-6"
          >
            <div className="flex justify-center items-center mb-4">
              <img
                src={member.avatar}
                alt={member.name}
                className="relative inline-block h-16 w-16 rounded-full object-cover object-center"
              />
            </div>
            <p className="text-[#000000] font-semibold text-center text-[15px] mb-1 font-Inter">
              {member.name}
            </p>
            <p className="text-[#6d6d6d] font-medium text-center text-[14px] mb-4 font-Inter">
              {member.role}
            </p>
            <p className="text-[#6d6d6d] font-medium text-center text-[14px] mb-1 font-Inter">
              {member.subRole}
            </p>
            <p className="text-[#6d6d6d] font-medium text-center text-[14px] font-Inter">
              {member.twitterHandle}
            </p>
            <div className="flex justify-center items-center space-x-6 mt-8">
              {/* GitHub Logo */}
              <a
                href={member.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition duration-300"
              >
                <FaGithub size={22} />
              </a>

              {/* Twitter/X Logo */}
              <a
                href={member.twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition duration-300"
              >
                <TbBrandX size={22} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
