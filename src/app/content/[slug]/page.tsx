import React from "react";
import MarkdownViewer from "@/components/MarkdownViewer";
import { getAllPosts, getPostData } from "@/service/posts";
import { FcCalendar } from "react-icons/Fc";
import { Metadata } from "next";
type Props = {
  params: {
    slug: string;
  };
};
export async function generateMetadata({ params }: Props) {
  const postInfo = await getAllPosts().then(
    (post) => post.filter((item) => item.path === params.slug)[0]
  );
  return {
    title: postInfo.title,
    description: postInfo.description,
  };
}
const ContentPage = async ({ params }: Props) => {
  const post = await getPostData(params.slug);
  const postInfo = await getAllPosts().then(
    (post) => post.filter((item) => item.path === params.slug)[0]
  );

  return (
    <div>
      <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
        <section className="flex flex-col p-4 w-full">
          <div className="flex">
            <div className="mb-2 flex items-center rounded-lg me-4 font-bold bg-gray-50 px-2 py-1 text-base  ring-1 ring-inset ring-gray-500/10">
              <FcCalendar className="me-1" />
              {postInfo.date.toString()}
            </div>
            <div className="mb-2 flex items-center rounded-lg me-4 font-bold bg-gray-50 px-2 py-1 text-base  ring-1 ring-inset ring-gray-500/10">
              {postInfo.category}
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">{postInfo.title}</h1>
          <p className="text-base font-bold">{postInfo.description}</p>
          <div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
          <MarkdownViewer post={post}></MarkdownViewer>
        </section>
      </article>
    </div>
  );
};

export default ContentPage;
