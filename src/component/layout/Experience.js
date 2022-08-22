import React from "react";

const Experience = () => {
  const skills = [
    {
      id: "1",
      title: " Client Side",
      desc: "HTML, CSS, JS, React, Next, Context api, Redux, TypeScript, Jwt, Bootstrap, Tailwind css",
    },
    {
      id: "2",
      title: "Server Side",
      desc: "MySQL, NodeJS, Firebase, MongoDB, Rest Api, HTTP/2",
    },
    {
      id: "2",
      title: "Intrest Development & Operations",
      desc: "JUnit, NUnit, PyUnit, TestCafe, Mocha, Jest, Scrum, Agile, GIT, Azure DevOps",
    },
  ];

  return (
    <div>
      <div className="block space-y-8 text-fade-black py-1 md:pt-20">
        <div className="text-xl text-black">Experience</div>
        {skills.map((skill, i) => {
          return (
            <div key={skill.id}>
              <div className="font-semibold"> {skill.title}</div>
              <div>{skill.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
