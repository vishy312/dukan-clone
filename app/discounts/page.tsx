import React from "react";
import Placeholder from "../components/placeholder";
import discountIllustration from "@/public/discount.svg";
import Button from "../components/button";

const AudiencePage = () => {
  return (
    <div className="flex items-center">
      <Placeholder illustration={discountIllustration}>
        <Placeholder.Title>Get more sales with coupons</Placeholder.Title>
        <Placeholder.Caption>
          Now you can create and share coupons for your store to get more and
          more orders on your store
        </Placeholder.Caption>
        <Placeholder.CTA>
          <Button>Create coupons</Button>
        </Placeholder.CTA>
      </Placeholder>
    </div>
  );
};

export default AudiencePage;
