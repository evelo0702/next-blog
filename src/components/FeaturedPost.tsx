import React from "react";
import { Post } from "@/service/posts";
import PostGird from "./PostGird";
type Props = { item: Post[] };

const FeaturedPost = async ({ item }: Props) => {
  return (
    <div className="w-full text-center">
      <PostGird item={item} />
    </div>
  );
};

export default FeaturedPost;
