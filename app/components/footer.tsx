import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-6 py-2 h-12">
      <span className="text-primary text-sm font-semibold ">
        You have 7 days left in your free trial
      </span>
      <button className="text-xs bg-orange-500 text-neutral-100 rounded-sm px-6 py-2 tracking-wide font-medium cursor-pointer">
        Subscribe
      </button>
    </footer>
  );
};

export default Footer;
