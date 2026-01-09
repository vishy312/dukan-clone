import React from "react";
import { HiSpeakerphone } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <header className="flex justify-between px-6 py-2 h-12">
      <div className="flex items-center gap-4 grow">
        <div className="text-primary font-semibold ">Analytics</div>
        <div className="flex text-neutral-600 text-xss items-center gap-1 cursor-pointer">
          <span className="border border-neutral-600 size-3 rounded-full flex items-center justify-center">
            ?
          </span>
          <span>How it works</span>
        </div>
      </div>
      <div className="flex bg-neutral-200 items-center px-3 py-2 rounded-sm grow gap-2">
        <IoSearchOutline className="text-sm peer" />
        <input
          type="text"
          placeholder="Search features, tutorials, etc."
          className="text-xss outline-0 grow"
        />
      </div>

      <div className="flex gap-4 grow justify-end">
        <div className="bg-neutral-200 p-2 rounded-full text-neutral-700">
          <HiSpeakerphone />
        </div>
        <div className="bg-neutral-200 p-2 rounded-full text-neutral-700">
          <RxHamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
