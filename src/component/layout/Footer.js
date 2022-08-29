import React from "react";

const Footer = () => {
  return (
    <div className=" grid grid-cols-2 items-center text-fade-black pt-10 pb-3 md:py-8 md:pt-10">
      <div>Made ❤️ js</div>

      <div className="">
        <ul className="flex items-center justify-center space-x-6">
          {/* <li>Twitter</li> */}
          <li>
            <a href="https://github.com/ochukoemmanuel">Git</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
