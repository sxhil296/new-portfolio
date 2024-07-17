import React from "react";
import MagicButton from "./ui/MagicButton";

import { FaEnvelope } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Eager to enhance <span className="text-purple">your</span> online
          visibility?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Connect with me today to find out how I can help you meet your goals.
        </p>
        <a
          href="mailto:sahilx296@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Get in Touch"
            icon={<FaEnvelope />}
            position={"right"}
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright &copy; 2024 Sahil
        </p>
        <div className="flex gap-2 items-center md:gap-3 lg:gap-6 mt-4 sm:mt-0">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer "
              >
                <img src={profile.img} alt="profile" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
