import React from "react";
import { Link } from "react-router-dom";

const Works = () => {
  const works = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Contact Keeper App",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, Nonea! Maiores et perferendis eaque,exercitationem praesentium nihil.",
      url: "/",
    },
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Contact Keeper App",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit Voluptatibus quia, Nonea! Maiores et perferendis eaque,exercitationem praesentium nihil.",
      url: "/",
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
