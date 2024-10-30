import {
  DiJava,
  DiPython,
  DiJavascript,
  DiCss3,
  DiHtml5,
  DiPhp,
  DiRuby,
  DiRust,
  DiMysql,
} from "react-icons/di";
import {
  SiTypescript,
  SiOcaml,
  SiC,
  SiCsharp,
  SiCplusplus,
  SiLatex,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiFlask,
  SiDjango,
  SiUnity,
  SiAwslambda,
  SiAmazoncloudwatch,
  SiAmazons3,
  SiAmazondynamodb,
  SiDocker,
  SiGit,
  SiJira,
  SiConfluence,
  SiVim,
  SiGnuemacs,
  SiGnubash,
  SiWindows,
  SiApple,
  SiLinux,
  SiJenkins,
  SiMarkdown,
  SiPostman,
  SiApachemaven,
} from "react-icons/si";
import { FaAws, FaCube } from "react-icons/fa";

const skills = [
  { name: "Java", icon: DiJava, category: "Languages" },
  { name: "Python", icon: DiPython, category: "Languages" },
  { name: "JavaScript", icon: DiJavascript, category: "Languages" },
  { name: "TypeScript", icon: SiTypescript, category: "Languages" },
  { name: "C", icon: SiC, category: "Languages" },
  { name: "C++", icon: SiCplusplus, category: "Languages" },
  { name: "C#", icon: SiCsharp, category: "Languages" },
  { name: "OCaml", icon: SiOcaml, category: "Languages" },
  { name: "PHP", icon: DiPhp, category: "Languages" },
  { name: "Ruby", icon: DiRuby, category: "Languages" },
  { name: "Rust", icon: DiRust, category: "Languages" },
  { name: "SQL", icon: DiMysql, category: "Languages" },
  { name: "MATLAB", icon: FaCube, category: "Languages" },
  { name: "LaTeX", icon: SiLatex, category: "Languages" },

  { name: "HTML", icon: DiHtml5, category: "Frameworks" },
  { name: "CSS", icon: DiCss3, category: "Frameworks" },
  { name: "React", icon: SiReact, category: "Frameworks" },
  { name: "NodeJS", icon: SiNodedotjs, category: "Frameworks" },
  { name: "Flask", icon: SiFlask, category: "Frameworks" },
  { name: "Django", icon: SiDjango, category: "Frameworks" },
  { name: "Unity", icon: SiUnity, category: "Frameworks" },
  { name: "TailwindCSS", icon: SiTailwindcss, category: "Frameworks" },
  { name: "SASS", icon: SiSass, category: "Frameworks" },
  { name: "Bootstrap", icon: SiBootstrap, category: "Frameworks" },

  { name: "AWS", icon: FaAws, category: "Developer Tools" },
  { name: "Lambda", icon: SiAwslambda, category: "Developer Tools" },
  { name: "CloudWatch", icon: SiAmazoncloudwatch, category: "Developer Tools" },
  { name: "S3", icon: SiAmazons3, category: "Developer Tools" },
  { name: "DynamoDB", icon: SiAmazondynamodb, category: "Developer Tools" },
  { name: "Docker", icon: SiDocker, category: "Developer Tools" },
  { name: "Git", icon: SiGit, category: "Developer Tools" },
  { name: "Jira", icon: SiJira, category: "Developer Tools" },
  { name: "Jenkins", icon: SiJenkins, category: "Developer Tools" },
  { name: "MongoDB", icon: SiMongodb, category: "Developer Tools" },
  { name: "Confluence", icon: SiConfluence, category: "Developer Tools" },
  { name: "Postman", icon: SiPostman, category: "Developer Tools" },
  { name: "Maven", icon: SiApachemaven, category: "Developer Tools" },
];

const About = () => {
  const categorizedSkills = skills.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const getBorderColor = (category) => {
    switch (category) {
      case "Languages":
        return "hover:shadow-blue-500";
      case "Frameworks":
        return "hover:shadow-green-500";
      case "Developer Tools":
        return "hover:shadow-purple-500";
    }
  };

  return (
    <section className="c-space my-20" id="skills">
      <p className="heading">Skills</p>
      {Object.entries(categorizedSkills).map(([category, skillsInCategory]) => (
        <div key={category} className="mb-8">
          <h3 className="category-heading text-2xl text-center font-semibold mb-4">
            {category}
          </h3>
          <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skillsInCategory.map((skill, index) => (
              <div
                key={index}
                className={`skill-card flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md transition-transform duration-300 ${getBorderColor(
                  skill.category
                )} hover:scale-1.5`}
              >
                <skill.icon
                  className="skill-icon mb-2 text-blue-500"
                  size={40}
                />
                <h4 className="skill-name text-sm font-semibold">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default About;
