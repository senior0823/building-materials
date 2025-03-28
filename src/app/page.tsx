'use client'
import React from "react";
import { AppProps } from "next/app";
import Carousel from "@/components/Carousel/Carousel";
import ProductBar from "@/components/collection/productsRecommed/productBar";
import ScrollToTopButton from "@/components/common/ScrollToTopButton.jsx";
import BotButton from "@/components/BotService/BotButton";


const Home = () => {
  return (
    <div>
      <Carousel />
      <ProductBar />
      <ScrollToTopButton />
      <BotButton/>
    </div>
  );
}

export default Home;
