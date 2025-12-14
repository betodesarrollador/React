import React from "react";
import { Link } from "react-router";
import Logo from "../assets/logo.png";
import Menu from "../assets/menu.svg";
import Search from "../assets/search.svg";
import Basket from "../assets/basket.svg";
import User from "../assets/user.svg";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="max-padd-container absolute top-0 left-0 right-0 w-full flex items-center justify-between py-4 transition-all">
      {/* Logo */}
      <Link href={"/"} className="flex gap-1">
        <img src={Logo} height={33} width={33} alt="logo" />
        <h3 className="text-2x1 hidden sm:block">
          Vitrina<span className="text-destructive font-bold"> Colombia</span>
        </h3>
      </Link>


      {/* Desktop Menu */}
      <div className="hidden sm:flex">
        <div className="hidden sm:flex gap-4 md:gap-12 mr-4">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
           <Link to="/collection" onClick={() => setOpen(false)}>Collection</Link>
        </div>
      </div>

      <div className="flex items-center gap-3 lg:gap-8">
        {/* menu */}
        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          <img src={Menu} height={25} width={25} alt="menu" />
        </button>
        {/* search */}
        <img
          src={Search}
          height={25}
          width={25}
          alt="seach"
          className="hidden sm:block"
        />
        {/* cart */}
        <Link href={"/cart"} className="relative cursor-pointer">
          <img src={Basket} height={25} width={25} alt="basket" />

          <button className="absolute -top-3 -right-2 text-xs text-white bg-destructive w-[18px] h-[18px] rounded-full">
            0
          </button>
        </Link>

        {/* User/Auth */}
        <button className="btn-destructive flexCenter gap-1 px-4">
          <img
            src={User}
            height={19}
            width={19}
            alt="user"
            className="invert-100"
          />
          Login
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start px-5 text-sm md:hidden`}
      >
        <div className="flex flex-col gap-4 mb-4">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
