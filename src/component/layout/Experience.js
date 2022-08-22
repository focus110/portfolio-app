import React from "react";

const Experience = () => {
  const skills = [
    {
      id: "1",
      title: " Client Side",
      desc: "HTML, CSS, JS, Angular, React, Vue, Redux, TypeScript, Backbone, Bootstrap",
    },
    {
      id: "2",
      title: "Server Side",
      desc: "PythonNum, TensorFlow, MySQL, NodeJS, Redis, AWS, MongoDB, Spark, HTTP/2",
    },
    {
      id: "2",
      title: "Development & Operations",
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
              <div> {skill.title}</div>
              <div>{skill.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
