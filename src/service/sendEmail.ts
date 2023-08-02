import nodemailer from "nodemailer";

export type Email = {
  sender: string;
  title: string;
  text: string;
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEmail({ title, sender, text }: Email) {
  const info = await transporter.sendMail({
    from: sender,
    to: process.env.AUTH_USER,
    subject: `[BLOG] ${title}`,
    html: `
    <h1>${title}</h1>
    <div>${text}</div>
    <br/>
    <p>보낸사람: ${sender}</p>
    `,
  });
  return info;
}
