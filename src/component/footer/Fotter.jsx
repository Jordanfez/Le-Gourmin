import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";
import ItemsContainer from "./ItemsContainer";
import { Icons } from "./Menus";
import SocialIcons from "./SocialIcons";

export const FooterApp = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // Durée des animations en ms
        });
    }, []);
    return (
        <footer className="bg-gray-900 text-white">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
                <h1
                    className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5"
                >
                    <span className="text-teal-400">Gratuit</span> jusqu'à ce que vous soyez prêt à lance
                </h1>
                <div data-aos='fade-down'>
                    <input
                        type="text"
                        placeholder="Envoyer nous un message..."
                        className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
                    />
                    <button
                        className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full"
                    >
                        Newsletter
                    </button>
                </div>
            </div>
            <ItemsContainer />
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  text-center pt-2 text-gray-400 text-sm pb-8"
            >
                <span>© 2024. All rights reserved by JORDAN FEZEU.</span>
                <span>Terms · Privacy Policy</span>
                <SocialIcons Icons={Icons} />
            </div>
        </footer>
    );
};
