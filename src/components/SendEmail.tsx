"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import nodemailer from "nodemailer";
import Banner, { BannerData } from "./Banner";
import sendContactEmail from "@/service/contact";
type Form = {
  sender: string;
  title: string;
  text: string;
};
const DEFAULT_DATA = {
  sender: "",
  title: "",
  text: "",
};
const SendEmail = () => {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendContactEmail(form)
      .then((res) => {
        setBanner({ msg: "메일 전송에 성공했습니다", state: "success" });
        setForm(DEFAULT_DATA);
        console.log(res);
      })
      .catch(() => {
        setBanner({
          msg: "메일전송에 실패했습니다. 다시 시도해 주세요",
          state: "error",
        });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };
  return (
    <>
      <div className=" rounded-md m-4 p-4 w-1/2 h-full bg-slate-200 ">
        <form method="POST" className="block" onSubmit={(e) => onSubmit(e)}>
          <div className="mb-4">
            <p className="font-bold mb-4">Sender Email</p>
            <input
              type="email"
              name="sender"
              autoFocus
              className="w-full p-4"
              required
              onChange={(e) => onChange(e)}
              value={form.sender}
            />
          </div>
          <div className="mb-4">
            <p className="font-bold mb-4">Subject</p>
            <input
              type="text"
              name="title"
              className="w-full p-4"
              required
              onChange={(e) => onChange(e)}
              value={form.title}
            />
          </div>
          <div className="mb-4">
            <p className="font-bold mb-4">Main Text</p>
            <textarea
              name="text"
              className="w-full h-48 p-4"
              required
              value={form.text}
              onChange={(e) => onChange(e)}
            />
          </div>
          <button className="rounded-xl font-bold bg-black hover:bg-white p-2 text-white hover:text-black w-full">
            Send
          </button>
          {banner && <Banner banner={banner} />}
        </form>
      </div>
    </>
  );
};

export default SendEmail;
