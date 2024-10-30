import React from "react";
import { FaGithub, FaLinkedin, FaStrava } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "Github",
      url: "https://github.com/beelauuu",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/brian-lau-462999220/",
      icon: <FaLinkedin />,
    },
    {
      name: "Strava",
      url: "https://www.strava.com/athletes/41098360",
      icon: <FaStrava />,
    },
  ];

  const renderSocialLinks = () => {
    return socialLinks.map((link, index) => (
      <a
        key={index}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`social-link ${link.name.toLowerCase()} text-2xl mx-2`}
      >
        {link.icon}
      </a>
    ));
  };

  return (
    <div className="container mx-auto py-4">
      <div className="text-center">
        <p className="text-xl font-bold">&copy; Brian Lau</p>
      </div>
      <div className="flex justify-center mt-2">{renderSocialLinks()}</div>
    </div>
  );
};

export default Footer;
