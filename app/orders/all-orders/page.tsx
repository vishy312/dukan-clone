import React from "react";
import ordersIllustration from "@/public/orders.svg";
import Button from "@/app/components/button";
import Placeholder from "@/app/components/placeholder";

const AllOrdersPage = () => {
  return (
    <div className="flex items-center">
      <Placeholder illustration={ordersIllustration}>
        <Placeholder.Title>You don&apos;t have any orders.</Placeholder.Title>
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

export default AllOrdersPage;
