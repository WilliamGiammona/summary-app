import React from "react";

const Footer = () => {
  return (
    <section id="#footer" className="w-full bg-[#f1f6f4] p-14">
      <div className="flex w-full mb-16">
        <div className="w-1/4">
          <ul className="flex flex-col">
            <li className="font-bold">Actions</li>
            <li>Summarist Magazine</li>
            <li>Cancel Subscription</li>
            <li>Help</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="w-1/4">
          <ul className="flex flex-col">
            <li className="font-bold">Useful Links</li>
            <li>Pricing</li>
            <li>Summarist Business</li>
            <li>Gift Cards</li>
            <li>Authors & Publishers</li>
          </ul>
        </div>
        <div className="w-1/4">
          <ul className="flex flex-col">
            <li className="font-bold">Company</li>
            <li>About</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Code of Conduct</li>
          </ul>
        </div>
        <div className="w-1/4">
          <ul className="flex flex-col">
            <li className="font-bold">Other</li>
            <li>Sitemap</li>
            <li>Legal Notice</li>
            <li>Terms of Service</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
      </div>
      <div className="text-center">Copyright © 2024 Summarist.</div>
    </section>
  );
};

export default Footer;
