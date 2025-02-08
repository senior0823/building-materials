// Page.tsx
"use client";

import React, { useState } from "react";
import SiteLinks from "./children/SiteLinks";
import Help from "./children/Help"

const Footer: React.FC = () => {
  const [isVisiblePartnerLinks, setVisiblePartnerLinks] = useState(false);

  return (
    <div className="bg-[#f6f6f6] py-[55px]">
      <div className="max-w-[1220px] mx-auto  px-[55px]">
        <SiteLinks
          isVisiblePartnerLinks={isVisiblePartnerLinks}
          setVisiblePartnerLinks={setVisiblePartnerLinks}
        />
        <hr className="border-b border-[#dddddd] my-5" />
        <div className="h-32 flex flex-col justify-center">
          <form action="" className="flex items-start">
            <p className="font-semibold text-[17px] w-[45%] py-3 px-3">
              Join 100,000+ members for free & receive new exclusives direct to
              your inbox.
            </p>
            <div className="py-3 pl-5 w-full  w-[45%]">
              <input
                type="text"
                className="w-full  h-[45px] pl-4 border"
                placeholder="Email"
              />
            </div>
            <div className="py-3 w-[10%]">
              <button
                type="submit"
                className="w-full h-[45px] rounded-sm bg-[#54bbc4]  text-white"
              >
                Join Club
              </button>
            </div>
          </form>
        </div>
        <hr className="border-b border-[#dddddd] my-5" />
        <br />
        <Help />
        <hr className="border-b border-[#dddddd] my-5" />
        <div className="flex items-center">
            <p className="text-[20px] font-bold px-4 w-[66%]">Keep up-to-date on all future manufacturer price increases</p>
            <button className="border-[3px] border-[#54bbc4] text-[#54bbc4] hover:bg-[#339ea5] hover:text-white px-10 py-3 w-[33%]">View price increases</button>
        </div>
        <hr className="border-b border-[#dddddd] my-5" />
        <div className="flex flex-col items-end">
            <div className="flex">
            <a href=""><img src="/facebook.svg" alt="" /></a>
            <a href=""><img src="/twitter.svg" alt="" /></a>
            <a href=""><img src="/youtube.svg" alt="" /></a>
            </div>
            <p>© 2025, Build4less Registered in England No. 08270985.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;