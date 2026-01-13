"use client";

import React, { useState } from "react";
import { BsShop } from "react-icons/bs";
import { RiWallet3Line } from "react-icons/ri";
import { navItems } from "../utils/navitems";
import Link from "next/link";

const Sidebar = () => {
  const [selected, setSelected] = useState("");
  const [selectedSubitem, setSelectedSubitem] = useState("");

  return (
    <div className="border relative border-neutral-900 w-1/7 h-screen bg-primary text-neutral-200 px-3 pt-3 font-sans overflow-y-scroll no-scrollbar">
      <div className="flex gap-3 items-start h-9">
        <BsShop className="size-8 text-neutral-400 p-1 bg-neutral-100 rounded-sm aspect-square border" />
        <span className="text-xs p-0">Saurabh Design Agency</span>
      </div>
      <div className="mt-2">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const ActiveIcon = item.activeIcon;
          return (
            <div key={index}>
              <Link
                href={item.endpoint}
                onClick={(e) => {
                  if (item.subItems.length > 0) e.preventDefault();
                }}
              >
                <div
                  className={`p-2 flex gap-2 cursor-pointer hover:bg-neutral-50/5 rounded-sm ${
                    selected === item.title
                      ? "bg-neutral-50/10 text-neutral-200"
                      : "text-neutral-400"
                  }`}
                  onClick={() => {
                    setSelected(item.title);
                    setSelectedSubitem("");
                  }}
                >
                  <span>
                    {selected === item.title && <ActiveIcon />}
                    {selected !== item.title && <Icon />}
                  </span>
                  <span className="text-xs ">{item.title}</span>
                </div>
              </Link>
              {item.subItems.length > 0 && item.title === selected && (
                <ul className="mx-6 py-1 list-none text-xss flex flex-col text-neutral-400 ">
                  {item.title === selected &&
                    item.subItems.map((subitem, ind) => (
                      <Link key={ind} href={subitem.endpoint}>
                        <li
                          className={`cursor-pointer hover:bg-neutral-50/5 rounded-sm px-2 py-1 ${
                            selectedSubitem === subitem.title
                              ? "text-neutral-200"
                              : ""
                          }`}
                          onClick={() => {
                            setSelectedSubitem(subitem.title);
                          }}
                        >
                          {subitem.title}
                        </li>
                      </Link>
                    ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
      <div className="flex gap-3 h-10 items-center p-1 bg-neutral-50/10 rounded-md absolute bottom-2 left-3 right-3">
        <RiWallet3Line className="size-8 text-neutral-100 p-1 bg-neutral-50/20 rounded-sm aspect-square" />
        <div className="text-xs p-0 flex flex-col justify-start ">
          <span className="text-neutral-400 text-xss">Available credits </span>
          <span className="text-neutral-100">0</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
