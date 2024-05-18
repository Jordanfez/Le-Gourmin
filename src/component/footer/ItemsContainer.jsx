import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Item from "./Item";
import { COMPANY, PRODUCTS, RESOURCES, SUPPORT } from "./Menus";

const ItemsContainer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Durée des animations en ms
    });
  }, []);
  return (
    <div data-aos='fade-down'className="grid text-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;