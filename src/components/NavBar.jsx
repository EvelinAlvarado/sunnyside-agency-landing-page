import { useState } from "react";
import iconMenu from "../assets/images/icon-hamburger.svg";

export const NavBar = () => {
  const [menuIsClicked, setMenuIsClicked] = useState(false);

  const handleClickMenu = () => {
    setMenuIsClicked(!menuIsClicked);
  };

  return (
    <nav className="text-xl">
      {/* flex */}
      <ul
        className={`${
          menuIsClicked ? "" : "hidden"
        }   text-Very-dark-desaturated-blue bg-White w-80 absolute left-0 right-0 mx-auto top-[106px] flex flex-col gap-8 items-center p-8 after:content-[""] after:absolute after:top-[-24px] after:right-0 after:border-[13px] after:border-t-transparent after:border-l-transparent after:border-b-white after:border-r-white `}
      >
        {" "}
        {/* sm:flex gap-8 */}
        <li className="cursor-pointer">
          <a href="#">About</a>
        </li>
        <li className="cursor-pointer">
          <a href="#">Services</a>
        </li>
        <li className="cursor-pointer">
          <a href="#">Projects</a>
        </li>
        <li className="cursor-pointer bg-Yellow py-2 px-4 rounded-full uppercase font-bold font-Fraunces">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="sm:hidden">
        <img onClick={handleClickMenu} src={iconMenu} alt="Menu icon" />
      </div>
    </nav>
  );
};
