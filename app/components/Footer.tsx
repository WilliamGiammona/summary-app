import React from "react";

const Footer = () => {
  return (
    <section id="#footer" className="w-full bg-red-300 p-14">
      <div className="flex w-full bg-blue-400">
        <div className="w-1/4">
          <ul className="flex flex-col">
            <li>Actions</li>
            <li>Summarist Magazine</li>
            <li>Cancel Subscription</li>
            <li>Help</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="w-1/4">
          <ul className="flex flex-col">
            <li>Useful Links</li>
            <li>Pricing</li>
            <li>Summarist Business</li>
            <li>Gift Cards</li>
            <li>Authors & Publishers</li>
          </ul>
        </div>
        <div className="w-1/4">
          <ul className="flex flex-col">
            <li>Company</li>
            <li>About</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Code of Conduct</li>
          </ul>
        </div>
        <div className="w-1/4">
          <ul className="flex flex-col">
            <li>Other</li>
            <li>Sitemap</li>
            <li>Legal Notice</li>
            <li>Terms of Service</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
      </div>
      <div>Copyright © 2024 Summarist.</div>
    </section>
  );
};

export default Footer;
