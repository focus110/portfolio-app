import React from "react";
import { Link } from "react-router-dom";
// import p from "../../assets/images/../images/";

const Works = () => {
  const works = [
    {
      id: "1",
      img: "../../assets/images/work1.png",
      title: "Music Blog web app (UI)",
      desc: "Music Blog frontend development with dynamic pages and search function, Album & single music component",
      url: "https://youthful-archimedes-9c6917.netlify.app/",
    },
    {
      id: "2",
      img: "../../assets/images/work2.png",
      title: "Portfolio web app",
      desc: "Designer frontend portfolio website with slide and on hover images effect",
      url: "https://loving-clarke-f0b77a.netlify.app/",
    },
  ];

  return (
    <div className="block space-y-14 text-fade-black py-1 md:pt-20">
      <div className="text-xl text-black">Some Concept Works</div>
      {works.map((work, i) => {
        const { id, img, title, desc, url } = work;
        return (
          <div className=" w-full lg:max-w-full lg:flex">
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{
                backgroundImage: `url(${img}
            )`,
              }}
              title="Mountain"
            ></div>

            <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="block text-gray-900 font-bold text-xl mb-2">
                  <Link to={url}> {title}</Link>
                </div>
                <p className="block text-gray-700 text-base md:w-3/5">
                  <Link to={url}>{desc}</Link>
                </p>
              </div>
              <div className="block items-center">
                <p>
                  <Link to={url}>More Info</Link>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Works;
