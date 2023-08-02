import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Evelo's blog",
    template: "Evelo's blog | %s",
  },
  description: "Create by Evelo",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="px-40 py-4">
          <header className="flex justify-between">
            <p className="text-2xl font-bold flex justify-start">
              <Link href={"/"}>Evelog</Link>
            </p>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
