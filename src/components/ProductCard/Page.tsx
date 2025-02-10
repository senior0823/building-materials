import React from "react";

interface PageProps {
  image: string;
  product: string;
  url: string;
}

const Page: React.FC<PageProps> = ({ image, product, url }) => {
  return (
    <div className="p-3 bg-white hover:scale-105 hover:shadow-2xl hover:shadow-white duration-300  border shadow-md max-w-[260px]">
      <a href={url}>
        <img src={image} alt={product} className="w-full aspect-square" />
        <p className="w-fit mx-auto my-4 font-bold text-black">{product}</p>
      </a>
    </div>
  );
};

export default Page;
