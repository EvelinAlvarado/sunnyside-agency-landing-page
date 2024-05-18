import { NavBar } from "./NavBar";
import logo from "../assets/images/logo.svg";

export const Header = () => {
  return (
    <header className=" absolute w-full px-6 pt-8 flex justify-between font-Barlow sm:items-center sm:relative sm:bg-light-blue">
      <img src={logo} alt="Logo" />
      <NavBar />
    </header>
  );
};
