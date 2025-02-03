'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import ProductCard from './productCard';
import { StaticImageData } from 'next/image';

interface ProductData {
    price: number;
    description: string;
}

interface ProductParams {
    title: string;
    imageArray: StaticImageData[];
    productData: ProductData[];
}

const RecommandedProducts: React.FC<ProductParams> = ({ title, imageArray, productData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    const imageBarRef = useRef<HTMLDivElement | null>(null);
    const imageAreaRef = useRef<HTMLDivElement | null>(null);
    const limit = imageArray.length <= 4 ? imageArray.length : 4;

    const updateWidth = useCallback(() => {
        if (imageBarRef.current && imageAreaRef.current) {
            const firstChild = imageBarRef.current.children[0] as HTMLElement;
            setItemWidth(firstChild?.offsetWidth || 0);
        }
    }, []);

    useEffect(() => {
        updateWidth();
        // window.addEventListener('resize', updateWidth);
        // return () => window.removeEventListener('resize', updateWidth);
    }, [updateWidth]);

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, imageArray.length - 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const isNextButtonDisabled = currentIndex >= imageArray.length - limit;

    return (
        <div className="max-w-[1200px] mx-auto px-4 xl:px-0 md:px-4 sm:px-4 pb-5">
            <h2 className="text-black text-lg font-bold mt-5 mb-4">{title}</h2>
            <div ref={imageAreaRef} className="relative overflow-hidden">
                <div
                    className="flex space-x-4 transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * itemWidth}px)` }}
                    ref={imageBarRef}
                >
                    {imageArray.map((image, index) => (
                        <ProductCard key={index} index={index} altText={`Product ${index + 1}`} image={image} data={productData[index]} />
                    ))}
                </div>
                <div className="absolute inset-y-0 flex items-center justify-between w-full px-2">
                    <button
                        className={`w-8 h-8 rounded-full bg-gray-500 font-bold hover:bg-black transition duration-200 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handlePrev}
                        aria-label="Previous product"
                        disabled={currentIndex === 0}
                    >
                        {"<"}
                    </button>
                    <button
                        className={`w-8 h-8 rounded-full bg-gray-500 font-bold hover:bg-black transition duration-200 ${isNextButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={handleNext}
                        aria-label="Next product"
                        disabled={isNextButtonDisabled}
                    >
                        {">"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecommandedProducts;