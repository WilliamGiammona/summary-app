import React from "react";

const Footer = () => {
  return (
    <section id="#footer" className="w-full bg-[#f1f6f4] p-14">
      <div className="flex w-full mb-16">
        <div className="w-1/4">
          <ul className="flex flex-col">
            <li className="font-bold mb-2">Actions</li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">
              Summarist Magazine
            </li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">
              Cancel Subscription
            </li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">Help</li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">
              Contact us
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <ul className="flex flex-col">
            <li className="font-bold mb-2">Useful Links</li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">Pricing</li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">
              Summarist Business
            </li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">
              Gift Cards
            </li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">
              Authors & Publishers
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <ul className="flex flex-col">
            <li className="font-bold mb-2">Company</li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">About</li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">Careers</li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">Partners</li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">
              Code of Conduct
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <ul className="flex flex-col">
            <li className="font-bold mb-2">Other</li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">Sitemap</li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">
              Legal Notice
            </li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">
              Terms of Service
            </li>
            <li className="text-sm mb-1 hover:cursor-not-allowed">
              Privacy Policies
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center font-medium">Copyright © 2024 Summarist.</div>
    </section>
  );
};

export default Footer;
