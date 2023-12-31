import React from "react";
import { Metadata } from "next";
import strapi from "@/utils/strapi";
import Card from "@/blocks/sections/blog/card";
import Banner from "@/blocks/molecules/banner/banner";
import Container from "@/blocks/sections/blog/main";

export default async function page() {
  const blogs = await strapi.find<any>("blogs", {
    populate: ["*", "thumbnail"],
  });
  return (
    <>
      <Banner>
        <div className="grid grid-cols-1 text-center mt-10 ">
          <h3 className="md:text-4xl text-3xl md:leading-normal leading-normal font-medium !text-white z-50">
            Blogs & News
          </h3>
        </div>
      </Banner>
      <Container>
        {blogs.data.map(({ attributes }: any, index: number) => (
          <Card
            key={index}
            cardData={{
              imageSrc: attributes.thumbnail.data.attributes.url,
              category: attributes.category,
              date: attributes.updatedAt,
              readingTime: "3 min",
              title: attributes.title,
              link: attributes.slug,
            }}
          />
        ))}
      </Container>
    </>
  );
}

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blogs | Buy, Rent, and Invest in Real Estate",
  description:
    "Explore a wide range of properties for sale, rent, and investment in Dubai. Find luxury villas, apartments, commercial spaces, and more.",
  keywords: [
    "Dubai properties",
    "real estate",
    "buy property in Dubai",
    "rent property in Dubai",
    "investment properties",
  ],
  authors: [{ name: "", url: "" }],
  abstract: "",
  publisher: "K&N PROPERTIES",
};
