'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/ProductCard/Page'
import ScrollToTopButton from "@/components/common/ScrollToTopButton.jsx";

const Products = [
  {
    image: "/Products/breather_1_-min_9789b540-cc3f-49cb-86e6-da291cb1f165.jpg",
    product: "PlasterBoard",
    url: ""
  },
  {
    image: "/Products/brick_be3cad86-9af0-4bf4-81a2-ba4b126f0da3.jpg",
    product: "Brick & Block",
    url: ""
  },
  {
    image: "/Products/metal_studding_9a46cda2-5504-4f36-8fff-195467c9cfc9.jpg",
    product: "Breather Membrane",
    url: ""
  },
  {
    image: "/Products/plasterboard-min_429065c1-bfc1-4e51-8ddb-8af55324ce36.jpg",
    product: "Tools & Workwear",
    url: ""
  },
  {
    image: "/Products/tools_1352ca34-2c8f-4c17-a4ed-2a7fb8805ae4.jpg",
    product: "Lead",
    url: ""
  },
  {
    image: "/Products/tools_1352ca34-2c8f-4c17-a4ed-2a7fb8805ae4.jpg",
    product: "Lead",
    url: ""
  },
  {
    image: "/Products/tools_1352ca34-2c8f-4c17-a4ed-2a7fb8805ae4.jpg",
    product: "Lead",
    url: ""
  },
  {
    image: "/Products/tools_1352ca34-2c8f-4c17-a4ed-2a7fb8805ae4.jpg",
    product: "Lead",
    url: ""
  },
]

const BuildingMaterials = () => {

  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <div className='mx-auto w-[75%]'>
      <div className="my-5">
        <h1 className="text-2xl font-bold">Building Materials</h1>
        <p className="">
          Building materials are the core of completing whatever DIY project you’re working on. What do we mean by ‘building material’? Building material is any material that is used for construction purposes – from the bricks that create the shell of a home, to the silicone sealant used to make a waterproof seal around a bath. Building materials are your favourite bricks, fixings, sealants, wood finishes, and even earplugs that you need in your building site.
          <span id="moreText" className={cn(!isShowMore ? "hidden" : "block")}>
            The type of building and construction materials you’ll need will depend on the job you’re planning. If you have a large build in mind, then you might want to begin by browsing our brick, blocks, plasterboard, or ceiling products. If you’re undertaking a smaller piece of DIY, or have moved on to the finishing touches of a larger project, then head on over to our fixings, supports, sealants, or adhesive sections.

            If you’re just starting on your project or have a smaller DIY building task at hand, make sure you have the right tools and workwear. Have a look at some of our best sellers such as loft ladders, hot air guns, power mixers, and heavy-duty latex coated gloves that are a must-have in every toolkit.

            Many building materials are naturally occurring substances such as clay, rocks, sand, wood, and even twigs and leaves, have been used to construct buildings. At Build4Less we continue to provide these materials in their highest quality to ensure your building materials are sturdy, ready to withstand every wear, tear, and weather report. There are a lot of options, and if you’ve never undertaken this particular DIY project before, then it’s always wise to seek advice from someone with experience, if you need advice or have any questions, then please contact us 020 3582 6399 or via Live Chat . We’ll be happy to steer you towards the right building materials for the job.
          </span>
        </p>
        <button onClick={() => setIsShowMore(!isShowMore)}
          id="toggleButton"
          className="mt-2 font-semibold text-blue-600 hover:underline"
        >
          {!isShowMore ? "Show More »" : "Show Less «"}
        </button>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-y-3 justify-items-center'>
        {Products.map((item, index) => (
          <ProductCard key={index} url={item.url} image={item.image} product={item.product} />
        ))}
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default BuildingMaterials;
