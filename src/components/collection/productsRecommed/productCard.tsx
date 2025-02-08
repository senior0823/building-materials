//@use client

import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

interface ProductCardProps {
  index: number;
  image: StaticImageData; // Define the type for the image prop
  altText: string; // Optional: Alt text for better accessibility
  data: {
    price: number,
    description: string
  }
}


const ProductCard: React.FC<ProductCardProps> = ({ image, altText, data }) => {
  
  const [price, setPrice] = useState(() => Math.abs(Math.random()*100).toFixed(2));
  
  return (
    <div className="w-52 p-4 m-2 h-72 border-2 bg-white flex flex-col justify-start items-center">
      <div className='w-[160px] h-[120px] mx-auto flex justify-center items-center mb-4'>
        <Image
          alt={altText} // Use the alt text passed as a prop
          src={image}
          width={120} // Define the width
          height={120} // Define the height
          priority // Prioritize the image loading, optional
        />
      </div>
      <div className="flex text-center overflow-hidden text-black font-sans justify-between my-[5px] mx-[1px] h-16">
        {data.description}
      </div>
      <div className='flex justify-between items-center'>
        <p className='text-black font-sans font-bold px-2'>
          {data.price}
        </p>
        <div className='text-black font-serif font-light px-1'>
          {'inc vat.'}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;