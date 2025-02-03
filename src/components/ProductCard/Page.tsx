import React from "react";

interface PageProps {
  image: string;
  product: string;
  url: string;
}

const Page: React.FC<PageProps> = ({ image, product, url }) => {
  return (
    <div className="p-3 bg-white w-full hover:scale-110 hover:shadow-2xl hover:shadow-white duration-300">
      <a href={url}>
        <img src={image} alt={product} className="w-full aspect-[3/2]" />
        <p className="w-fit mx-auto font-bold text-black">{product}</p>
      </a>
    </div>
  );
};

export default Page;
