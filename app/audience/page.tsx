import React from "react";
import Placeholder from "../components/placeholder";
import receiptIllustration from "@/public/receipt.svg";
import Button from "../components/button";

const AudiencePage = () => {
  return (
    <div className="flex items-center">
      <Placeholder illustration={receiptIllustration}>
        <Placeholder.Title>
          You don&apos;t have any customers yet
        </Placeholder.Title>
        <Placeholder.Caption>
          Share your store&apos;s link with your customers on social media to
          get more orders
        </Placeholder.Caption>
        <Placeholder.CTA>
          <Button type="ghost">Add Customer</Button>
          <Button>Import customers</Button>
        </Placeholder.CTA>
      </Placeholder>
    </div>
  );
};

export default AudiencePage;
