import { Email } from "./sendEmail";
// 프론트엔드에서 api요청을 하기 위한 함수
export async function sendContactEmail(email: Email) {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.msg || "서버 요청에 실패함");
  }
  return data;
}

export default sendContactEmail;
