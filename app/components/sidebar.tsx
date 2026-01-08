"use client";

import React, { useState } from "react";
import { BsShop } from "react-icons/bs";
import { RiWallet3Line } from "react-icons/ri";
import { navItems } from "../utils/navitems";

const Sidebar = () => {
  const [selected, setSelected] = useState("");
  const [selectedSubitem, setSelectedSubitem] = useState("");

  return (
    <div className="border relative border-neutral-900 w-1/7 min-h-screen bg-[hsl(225,34,16)] text-neutral-200 p-3 font-sans">
      <div className="flex gap-3 items-start">
        <BsShop className="size-8 text-neutral-400 p-1 bg-neutral-100 rounded-sm aspect-square border" />
        <span className="text-xs p-0">Saurabh Design Agency</span>
      </div>
      <div className="mt-4">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const ActiveIcon = item.activeIcon;
          return (
            <>
              <div
                key={index}
                className={`p-2 flex gap-2 text-neutral-400 cursor-pointer hover:bg-neutral-50/5 rounded-sm ${
                  selected === item.title ? "bg-neutral-50/10" : ""
                }`}
                onClick={() => {
                  setSelected(item.title);
                  setSelectedSubitem("");
                }}
              >
                {selected === item.title && <ActiveIcon />}
                {selected !== item.title && <Icon />}
                <span className="text-xs text-neutral-300">{item.title}</span>
              </div>
              <ul className="mx-6 py-1 list-none text-[10px] flex flex-col text-neutral-400 ">
                {item.title === selected &&
                  item.subItems.map((subitem, ind) => (
                    <li
                      key={ind}
                      className={`cursor-pointer hover:bg-neutral-50/5 rounded-sm px-2 py-1 ${
                        selectedSubitem === subitem ? "text-neutral-200" : ""
                      }`}
                      onClick={() => setSelectedSubitem(subitem)}
                    >
                      {subitem}
                    </li>
                  ))}
              </ul>
            </>
          );
        })}
      </div>
      <div className="flex gap-3 items-start bg-neutral-50/10 rounded-md p-2  bottom-3 left-3 right-3">
        <RiWallet3Line className="size-8 text-neutral-100 p-1 bg-neutral-50/20 rounded-sm aspect-square" />
        <div className="text-xs p-0 flex flex-col justify-start ">
          <span className="text-neutral-400">Available credits </span>
          <span className="text-neutral-100">0</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
