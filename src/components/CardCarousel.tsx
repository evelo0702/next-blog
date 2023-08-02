"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PostCard from "./PostCard";
import { Post } from "@/service/posts";

type Props = { item: Post[] };
const CardCarousel = ({ item }: Props) => {
  const [category, setCategory] = useState("All");
  const [postData, setPostData] = useState(item);
  useEffect(() => {
    if (category != "All") {
      const newData = item.filter((item) => item.category === category);
      setPostData(newData);
    } else {
      setPostData(item);
    }
  }, [category]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-4">
      <div className="mb-4">
        <button
          className="rounded-lg me-4 bg-gray-50 px-2 py-1  font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
          onClick={() => setCategory("All")}
        >
          All
        </button>
        <button
          className="rounded-lg me-4 bg-gray-50 px-2 py-1  font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
          onClick={() => setCategory("TypeScript")}
        >
          TypeScript
        </button>
        <button
          className="rounded-lg me-4 bg-gray-50 px-2 py-1  font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
          onClick={() => setCategory("WEB")}
        >
          WEB
        </button>
        <button
          className="rounded-lg me-4 bg-gray-50 px-2 py-1  font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
          onClick={() => setCategory("PROGRAMMING")}
        >
          PROGRAMMING
        </button>
      </div>
      <Carousel infinite autoPlay itemClass="p-2" responsive={responsive}>
        {postData.map((post, index) => (
          <div key={index} className="text-center">
            <PostCard item={post} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardCarousel;
