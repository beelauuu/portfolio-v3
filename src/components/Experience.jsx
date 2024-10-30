import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaAmazon, FaAws } from "react-icons/fa";
import { GiTurtleShell, GiSubmarineMissile } from "react-icons/gi";
import { SiPalantir } from "react-icons/si";

const experienceData = [
  {
    date: "May 2025",
    title: "Software Development Engineering Intern @ Palantir - Gotham",
    description: [
      "• Incoming software engineer intern on the Gotham product (Defense Tech, Summer 2025)",
    ],
    icon: <SiPalantir />,
    iconColor: "#000",
  },
  {
    date: "May 2024 - August 2024",
    title: "Software Development Engineering Intern @ AWS - Batch Scaling",
    description: [
      "• Integrated and prepared multiple key Kubernetes features from EKS onto Batch for millions of customers (Persistent Volume Claims, Annotations, Subpaths, Subpath Expressions)",
      "• Designed and developed a cluster level namespace watcher to automatically log namespace events in an EKS cluster acting as a POC for future features.",
      "• Fixed unit tests and improved error handling across multiple Batch on EKS packages leading to more robust code.",
    ],
    icon: <FaAws />,
    iconColor: "#ff9f00",
  },
  {
    date: "May 2023 - August 2023",
    title: "Software Development Engineering Intern @ Amazon - Display Ads",
    description: [
      "• Provided better insight into the “health” of over 1,500+ high value actions (HVAs) across multiple AWS regions saving hours for on call engineers, marketing managers, and internal advertisers",
      "• Implemented HVA stage metric alarms with React TypeScript, Java, and multiple AWS tools",
      "• Set up API endpoints using Java & Smithy in order to expose HVA metadata for use across 20+ different packages. ",
      "• Granted visibility into an HVAs click/impression counts through a custom scheduled SQL query implemented using AWS Lambda, Redshift, and S3.",
    ],
    icon: <FaAmazon />,
    iconColor: "#ff9f00",
  },
  {
    date: "June 2022 - Current",
    title: "Lead TA @ University of Maryland: College Park - CMSC",
    description: [
      "• Lead TA for multiple CMSC courses, including:",
      "   1. CMSC122 (Introduction to Computer Programming via the Web)",
      "   2. CMSC131 (Object Oriented Programming I)",
      "   3. CMSC132 (Object Oriented Programming II)",
      "• Created rubrics and managed grading for exams and projects.",
      "• Taught a discussion section of ~30 students bi-weekly, reviewing course content and exploring additional topics.",
      "• Held weekly office hours, assisting students with questions and project guidance.",
      "• Graded hundreds of projects and exams, focusing on style and accuracy.",
      "• Proctored exams/quizzes, upholding academic integrity for over 300 students.",
    ],
    icon: <GiTurtleShell />,
    iconColor: "#D60620",
  },
  {
    date: "May 2022 - August 2022",
    title: "Software Engineering Intern @ Northrop Grumman - Mission Systems",
    description: [
      "• Created a custom Jira plugin to display current server metrics using the Atlassian SDK accompanied by HTML, Java, and Python.",
      "• Worked with the Jira REST API and web hooks to gather information on the current server. ",
      "• Created a Java servlet with a Java backend and Python + HTML/CSS frontend to display all plugin information onto the current Jira network",
      "• Employed Jenkins and Bitbucket to streamline more efficient builds and tests of the plugin.",
    ],
    icon: <GiSubmarineMissile />,
    iconColor: "#000",
  },
];

const Experience = () => {
  return (
    <section className="c-space" id="experience">
      <div className="w-full h-full">
        <div className="text-center mb-3">
          <p className="c-space my-20 heading">Experience</p>
        </div>

        <VerticalTimeline lineColor="#000">
          {experienceData.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: "#F5F5F5", color: "#000" }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              date={exp.date}
              icon={exp.icon}
              iconStyle={{ background: exp.iconColor, color: "#fff" }}
            >
              <div className="text-left">
                <h3 className="mt-5 text-2xl font-semibold text-black sm:text-2xl">
                  {exp.title}
                </h3>
                <ul className="ml-6 mt-3 space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
