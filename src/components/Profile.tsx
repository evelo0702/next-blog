"use client";
import Image from "next/image";
import githubImg from "../../public/images/github.png";
import velogImg from "../../public/images/velog.png";
import Link from "next/link";
import React, { useState } from "react";
import image from "../../public/images/image.png";
import nodemailer from "nodemailer";
import SendEmail from "./SendEmail";

const Profile = () => {
  const [contact, setContact] = useState(false);
  return (
    <div className="flex justify-center mt-10 mb-10 ">
      <div className="me-10">
        <Image
          src={image}
          alt="logo"
          className="rounded-3xl w-52 h-70 border mb-4"
        />
        <div className="text-3xl font-bold text-center">EVELO - 노영석</div>
        <div className="text-xl text-center">Web Developer</div>
        <div className="text-base text-center">항상 배울 점을 찾는 개발자</div>
        <div className="text-base text-center font-bold">
          evelo0702@gmail.com
        </div>
        <div className="flex items-center justify-center">
          <div className="text-center w-10 h-10 m-2">
            <Link href={"https://github.com/evelo0702"} target="_blank">
              <Image src={githubImg} alt=""></Image>
            </Link>
          </div>

          <div className="text-center w-8 h-8 m-2">
            <Link href={"https://velog.io/@evelo"} target="_blank">
              <Image src={velogImg} alt=""></Image>
            </Link>
          </div>
        </div>
        <div className="text-center m-4">
          <Link
            href="https://swift-stilton-e55.notion.site/b4f8dda38fb8461fbae8ea1b3db63bfe"
            target="_blank"
            className="hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2  rounded"
          >
            Profile
          </Link>
          |
          <button
            onClick={() => setContact(!contact)}
            className="hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2  rounded"
          >
            Contact
          </button>
        </div>
      </div>
      {contact ? <SendEmail /> : null}
    </div>
  );
};

export default Profile;
