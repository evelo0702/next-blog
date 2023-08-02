import { sendEmail } from "@/service/sendEmail";
import * as yup from "yup";
const bodySchema = yup.object().shape({
  sender: yup.string().email().required(),
  title: yup.string().required(),
  text: yup.string().required(),
});
export async function POST(req: Request) {
  const body = await req.json();
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ msg: "메일 전송에 실패함" }), {
      status: 400,
    });
  }
  return sendEmail(body)
    .then(() => {
      return new Response(
        JSON.stringify({ msg: "메일을 성공적으로 전송했습니다" }),
        {
          status: 200,
        }
      );
    })
    .catch((err) => {
      console.error(err);
      return new Response(JSON.stringify({ msg: "메일 전송에 실패함" }), {
        status: 500,
      });
    });
}
