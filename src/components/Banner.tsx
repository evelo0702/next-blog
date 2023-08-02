import React from "react";
export type BannerData = {
  msg: string;
  state: "success" | "error";
};
const Banner = ({ banner: { msg, state } }: { banner: BannerData }) => {
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "❌";
  return (
    <div
      className={`mt-4 p-2 rounded-xl w-full text-center ${
        isSuccess ? "bg-green-300" : "bg-red-300"
      }`}
    >{`${icon} ${msg}`}</div>
  );
};

export default Banner;
