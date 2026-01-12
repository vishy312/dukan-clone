import React from "react";
import Button from "./button";

const Footer = () => {
  return (
    <footer className="flex justify-between items-start px-6 py-2 h-12">
      <span className="text-primary text-sm font-semibold ">
        You have 7 days left in your free trial
      </span>
      <Button type="secondary">Subscribe</Button>
    </footer>
  );
};

export default Footer;
