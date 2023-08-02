import React from "react";
import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
type Props = { item: Post };

const PostCard = ({ item }: Props) => {
  return (
    <Link href={`/content/${item.path}`}>
      <div className="border w-full  h-96 rounded-lg">
        <div className="relative w-full h-1/2 mb-4">
          {item.image.length > 1 ? (
            <Image
              className="rounded-lg"
              src={`${item.image}`}
              fill
              alt=""
            ></Image>
          ) : (
            <div className="flex justify-center items-center h-52">
              등록된 이미지가 없습니다
            </div>
          )}
        </div>
        <span className="flex justify-end me-4 mb-4">
          <div className="rounded-lg me-4 bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            {item.category}
          </div>
          <span className="rounded-lg bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
            {item.date}
          </span>
        </span>
        <div className="font-bold mb-4">{item.title}</div>
        <div className="text-sm">{item.description}</div>
      </div>
    </Link>
  );
};

export default PostCard;
