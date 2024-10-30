import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Contract from "../../public/assets/contract.png";
import NBA from "../../public/assets/nba.gif";
import Cloudify from "../../public/assets/cloud.png";
import Strava from "../../public/assets/strava.png";
import TA from "../../public/assets/ta.png";

const projectsData = [
  {
    title: "TA Site",
    description: [
      "Website used to house all of my TA materials",
      "Utilized MARP to create discussion slides",
    ],
    link: "https://beelau.vercel.app/",
    image: TA,
  },
  {
    title: "Strava Jokes",
    description: [
      "A Strava-based web application and web hook which listens to a users activities and automatically appends a joke to their most recent activity",
      "Utilized Python Flask for the back end and React Javascript for the front end.",
    ],
    link: "https://jokepy.vercel.app/",
    image: Strava,
  },
  {
    title: "ContractScope",
    description: [
      "A faster way to analyze of DOD contracts with a custom NLP model backed by BURT and AWS Services.",
      '🏆 Winners of "Best AI Powered Solution for Defense Contracts - Bloomberg Industry Group" from Bitcamp 2024. 🏆',
    ],
    link: "https://devpost.com/software/contractscope",
    image: Contract,
  },
  {
    title: "NBA Hall of Fame Predictor",
    description: [
      "Jupyter Notebook based machine learning project to predict whether an NBA player will be inducted into the Hall of Fame after their career",
      "Utilized decision trees and support vector machines (SVM) to make predictions",
    ],
    link: "https://beelauuu.github.io/NBA-Hall-of-Fame-Predictor/",
    image: NBA,
  },
  {
    title: "Cloudify",
    description: [
      "A Spotify-based web-application which generates unique wordclouds based on a users top-50 artists.",
      "Amassed over 5,000 users in a week and over 10,000 generated wordclouds",
      "Utilized Python Flask for the back end and React Javascript for the front end.",
    ],
    link: "https://cloudify.herokuapp.com/",
    image: Cloudify,
  },
];

const Projects = () => (
  <section className="c-space" id="projects">
    <div className="w-full h-full">
      <div className="text-center mb-3">
        <p className="c-space my-20 heading">Projects</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card bg-white shadow-lg rounded-lg p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <ul className="text-gray-700 mb-4 list-disc ml-5">
                  {project.description.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Click to view project
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Projects;
