import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { Buttons } from "./Button";
import NavLinks from "./NavLinks";

export const Navbar = ({ scrollToSection }) => {
    const [open, setOpen] = useState(false);
    console.log(open);
    return (
        <nav className="bg-white sticky top-0">
            <div className="flex items-center font-medium justify-around">
                <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                    <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
                    <button onClick={() => setOpen(!open)} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                </div>
                <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/#" onClick={() => scrollToSection('section1')}className="py-7 px-3 inline-block">
                            A propos
                        </Link>
                    </li>
                    <li>
                        <Link to="/#" onClick={() => scrollToSection('section2')}className="py-7 px-3 inline-block">
                            ofrres
                        </Link>
                    </li>
                    <NavLinks  />
                    <li>
                        <Link to="/#" onClick={() => scrollToSection('section3')} className="py-7 px-3 inline-block">
                            Contactez-nous
                        </Link>
                    </li>
                </ul>

                <div className="md:block hidden">
                    <Buttons />
                </div>
                {/* Mobile nav */}
                <ul
                    id="navbar-default"
                    className={`
                                md:hidden bg-stone-200 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
                                duration-500 ${open ? "left-0" : "left-[-100%]"}
                            `}
                >
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/#" className="py-7 px-3 inline-block">
                            A propos
                        </Link>
                    </li>
                    <NavLinks />
                    <li>
                        <Link to="/#" className="py-7 px-3 inline-block">
                            Contactez-nous
                        </Link>
                    </li>
                    <div className="py-5">
                        <Buttons />
                    </div>
                </ul>
            </div>
        </nav>
    );
};

