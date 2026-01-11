import React from "react";

const Card = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`p-4 rounded-sm bg-white flex flex-col gap-4 ${
        className ? className : ""
      }`}
    >
      <h3 className="text-neutral-600 text-xs font-semibold flex gap-1">
        {title + " "}
        <span className="size-3.5 flex justify-center items-center border border-neutral-500 text-neutral-500 rounded-full text-xss cursor-pointer">
          i
        </span>
      </h3>

      {children}
    </div>
  );
};

export default Card;
