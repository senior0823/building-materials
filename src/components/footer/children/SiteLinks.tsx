// SiteLinks.tsx
import React from "react";

interface PartnerSite {
  siteType: string;
  value: string[];
}

const partnerSites: PartnerSite[] = [
  {
    siteType: "Bestseller",
    value: [
      "Bathroom Wall Tiles »",
      "Composite Decking Joists »",
      "Insulated Plasterboard »",
      "Bathroom Taps »",
      "Hot Water Cylinder Lagging Jacket »",
    ],
  },
  {
    siteType: "Staff Picks",
    value: [
      "Kingspan Insulated Board »",
      "Baxi Assure Combi Boiler »",
      "Roofing Felt »",
      "Roof Tiles »",
      "PIR Plywood Laminate Insulation Board »",
    ],
  },
  {
    siteType: "Top Categories",
    value: [
      "Plasterboard »",
      "Composite Decking »",
      "External Doors »",
      "Loft Insulation »",
      "Knauf Acoustic Roll »",
    ],
  },
  {
    siteType: "Trending Now",
    value: [
      "Screws »",
      "Composite Cladding »",
      "Insulation Board »",
      "Kitchen Wall Tiles »",
      "Level Top Louvre Fence Panel »",
    ],
  },
  {
    siteType: "New Arrivals",
    value: [
      "Oak External Doors »",
      "Marley Double Roman Roof Tiles »",
      "Forgefix Loft Leg »",
      "Walther Strong Deck Tape »",
      "Kingspan Kooltherm K118 Insulated Plasterboard »",
    ],
  },
];

interface SiteLinksProps {
  isVisiblePartnerLinks: boolean;
  setVisiblePartnerLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

const SiteLinks: React.FC<SiteLinksProps> = ({
  isVisiblePartnerLinks,
  setVisiblePartnerLinks,
}) => {
  return (
    <div className="partner-sites">
      <div className="flex items-center justify-between flex-col md:flex-row  mb-8">
        <p>Explore more across our partner sites</p>
        <a href="">
          <img src="/Footer/PartnerLinks/b4l-150x60-trans.webp" alt="" />
        </a>
        <a href="">
          <img src="/Footer/PartnerLinks/i4l-240x60-trans.webp" alt="" />
        </a>
        <a href="">
          <img src="/Footer/PartnerLinks/t4l-150x60-trans.webp" alt="" />
        </a>
        <a href="">
          <img src="/Footer/PartnerLinks/bso-80x60-trans.webp" alt="" />
        </a>
      </div>
      {isVisiblePartnerLinks && (
        <div>
          <div className="grid md:grid-cols-5 grid-cols-1">
            {partnerSites.map((partner, index) => (
              <div key={index}>
                <div className="mb-6 text-[20px] font-semibold">
                  {partner.siteType}
                </div>
                <div className="mb-8">
                  <ul>
                    {partner.value.map((site, siteIndex) => (
                      <li key={siteIndex} className="pb-1 pr-3 text-[#efefef]">
                        <a
                          href="#"
                          className="text-[12px] text-[#868686] block hover:underline "
                        >
                          {site} 
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[12px] pt-2 pb-4 text-[#969696]">
            ⓘ The above links will open in a new tab and navigate you away from
            this site and towards one of our partner sites.
          </p>
        </div>
      )}
      <div className="w-full text-center">
        <button
          onClick={() => {
            setVisiblePartnerLinks(!isVisiblePartnerLinks);
          }}
          className="mx-auto"
        >
          {isVisiblePartnerLinks ? "Hide" : "Show"} Partner Links
        </button>
      </div>
    </div>
  );
};

export default SiteLinks;
