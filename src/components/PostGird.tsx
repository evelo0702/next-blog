import React from "react";
import { Post } from "@/service/posts";
import PostCard from "./PostCard";
type Props = { item: Post[] };
const PostGrid = ({ item }: Props) => {
  return (
    <>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-4">
        {item.map((item) => (
          <li key={item.path}>
            <PostCard item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostGrid;
