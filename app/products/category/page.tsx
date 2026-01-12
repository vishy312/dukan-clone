import React from "react";
import categoriesIllustration from "@/public/categories.svg";
import Button from "@/app/components/button";
import Placeholder from "@/app/components/placeholder";

const AudiencePage = () => {
  return (
    <div className="flex items-center">
      <Placeholder illustration={categoriesIllustration}>
        <Placeholder.Title>Create your first category now</Placeholder.Title>
        <Placeholder.Caption>
          Showcase your products and services to the customers by creating
          beutiful categories
        </Placeholder.Caption>
        <Placeholder.CTA>
          <Button>Add new category</Button>
        </Placeholder.CTA>
      </Placeholder>
    </div>
  );
};

export default AudiencePage;
