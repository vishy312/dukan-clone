import React from "react";
import Image from "next/image";

const Placeholder = ({
  illustration,
  children,
}: {
  illustration: any;
  children?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <Image
        src={illustration}
        alt="receipt image"
        className="grayscale aspect-square"
        width={200}
      />
      {children}
    </div>
  );
};

export default Placeholder;

Placeholder.Title = function PlaceholderTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h3 className="text-primary text-base font-semibold">{children}</h3>;
};

Placeholder.Caption = function PlaceholderCaption({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="text-sm text-neutral-500 font-semibold w-[35em] text-center">
      {children}
    </p>
  );
};

Placeholder.CTA = function PlaceholderCTA({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex gap-4">{children}</div>;
};
