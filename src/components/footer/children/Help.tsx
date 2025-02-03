import React from "react";

interface Link {
  title: string;
  url: string; // Fixed to be singular for better clarity
}

interface NavSection {
  section: string;
  links: Link[];
}

const navLinks: NavSection[] = [
  {
    section: "About Us",
    links: [
      {
        title: "Contact Us",
        url: "",
      },
      {
        title: "Delivery Information",
        url: "",
      },
      {
        title: "Guides & News",
        url: "",
      },
      {
        title: "FAQ",
        url: "",
      },
      {
        title: "Get A Quote",
        url: "",
      },
      {
        title: "insulation4less.co.uk",
        url: "",
      },
      {
        title: "tiles4less.co.uk",
        url: "",
      },
    ],
  },
  {
    section: "Customer Care",
    links: [
      {
        title: "My Account",
        url: "",
      },
      {
        title: "Shipping Protection",
        url: "",
      },
      {
        title: "Returns",
        url: "",
      },
      {
        title: "Cancellations",
        url: "",
      },
      {
        title: "Klarna FAQ",
        url: "",
      },
      {
        title: "Rewards",
        url: "",
      },
    ],
  },
  {
    section: "Legal Links",
    links: [
      {
        title: "Privacy Policy",
        url: "",
      },
      {
        title: "Returns Policy",
        url: "",
      },
      {
        title: "Cookies Policy",
        url: "",
      },
      {
        title: "Terms and Conditions",
        url: "",
      },
    ],
  },
];

const Help = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1">
      {navLinks.map((navSection, index) => (
        <div key={index}>
          <h3 className="text-[18px] font-semibold mb-6">{navSection.section}</h3>
          <div>
            {navSection.links.map((link, linkIndex) => (
              <a key={linkIndex} href={link.url} className="block text-[12px] text-[#868686] pb-1 hover:underline">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      ))}
      <div className="">
        <h3 className="text-[18px] font-semibold mb-6">Contact Us</h3>
        <p className="text-[15px] text-[#868686]">
          <strong className="text-[#000000]">Phone: </strong>
          <a href="tel:02034811978">020-3481-1978</a>
          <br />
          <strong className="text-[#000000]">Email: </strong>
          <a href="mailto:sales@i4lgroup.co.uk">sales@i4lgroup.co.uk</a>
          <br />
        </p>
        <p className="text-[15px] text-[#868686]">
          <strong className="text-[#000000]">Build4Less.co.uk</strong>
          <br />
          3rd Floor <br />
          207 Regent Street <br />
          London <br />
          W1B 3HH <br />
          England <br />
        </p>
      </div>
    </div>
  );
};

export default Help;
