import Image from "next/image";
import logo from "../../public/images/logo.png";
import image from "../../public/images/image.jpg";
import FeaturedPost from "@/components/FeaturedPost";
import Link from "next/link";
import CardCarousel from "@/components/CardCarousel";
import { getAllPosts } from "@/service/posts";
import Profile from "@/components/Profile";
export default async function Home() {
  const PostData = await getAllPosts();
  const featuredPost = PostData.filter((item) => item.featured === true);

  return (
    <div className="w-full mx-auto p-4 ">
      {/* 소개 */}

      <Profile />

      {/* 추천 글  */}
      <div>
        <p className="ms-2 font-bold text-xl">Recommend</p>
        <FeaturedPost item={featuredPost} />
      </div>
      {/* 그 외  */}
      <hr className="mt-4" />
      <div>
        <CardCarousel item={PostData} />
      </div>
    </div>
  );
}
