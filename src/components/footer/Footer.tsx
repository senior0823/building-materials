// Page.tsx
"use client";

import React, { useState } from "react";
import SiteLinks from "./children/SiteLinks";
import Help from "./children/Help"

const Footer: React.FC = () => {
  const [isVisiblePartnerLinks, setVisiblePartnerLinks] = useState(false);

  return (
    <div className="bg-[#f6f6f6] py-[55px]">
      <div className="max-w-[1220px] mx-auto px-[10px] md:px-[55px] ">
        <SiteLinks
          isVisiblePartnerLinks={isVisiblePartnerLinks}
          setVisiblePartnerLinks={setVisiblePartnerLinks}
        />
        <hr className="border-b border-[#dddddd] my-5" />
        <div className="h-32 md:flex md:flex-col sm:table justify-center py-3">
          <form action="" className="md:flex sm:table items-start">
            <p className="font-semibold text-[17px] md:w-[45%] sm:w-full md:py-3 md:px-3 sm:py-4 sm:px-0">
              Join 100,000+ members for free & receive new exclusives direct to
              your inbox.
            </p>
            <div className="w-full">
              <div className="flex md:py-3 md:pl-5 sm:py-4 sm:px-0 justify-center items-center">
                <input
                  type="text"
                  className="md:w-[80%] h-[45px] md:pl-4 sm:pl-0 border"
                  placeholder="Email"
                />
                <div className="md:w-[20%] sm:py-4">
                  <button
                    type="submit"
                    className="w-full h-[45px] rounded-sm bg-[#54bbc4]  text-white"
                  >
                    Join Club
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <hr className="border-b border-[#dddddd] my-4" />
        <br />
        <Help />
        <hr className="border-b border-[#dddddd] my-4" />
        <div className="flex items-center">
          <p className="text-[20px] font-bold md:px-4 w-[66%]">Keep up-to-date on all future manufacturer price increases</p>
          <button className="border-[3px] border-[#54bbc4] text-[#54bbc4] hover:bg-[#339ea5] hover:text-white ml-1 md:px-10 md:py-3 w-[33%]">View price increases</button>
        </div>
        <hr className="border-b border-[#dddddd] my-5" />
        <div className="flex flex-col items-end">
          <div className="flex">
            <a href=""><img src="/facebook.svg" alt="" /></a>
            <a href=""><img src="/twitter.svg" alt="" /></a>
            <a href=""><img src="/youtube.svg" alt="" /></a>
          </div>
          <p>© 2025, Registered in *** No. ***.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;