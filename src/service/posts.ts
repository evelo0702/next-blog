import path from "path";
import { promises as fs } from "fs";
export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
  image: string;
};
export async function getAllPosts(): Promise<Post[]> {
  console.log("getAllPosts");
  // path.join(경로, .. .): 여러 인자를 넣으면 하나의 경로로 합쳐준다.

  const dir = path.join(
    process.cwd(), // 현재디렉토리
    "data",
    "posts.json"
  );
  const data = await fs.readFile(dir, "utf-8");
  return JSON.parse(data);
}
export async function getPostData(id: string): Promise<string> {
  const dir = path.join(process.cwd(), "data", "posts", `${id}.md`);
  const data = await fs.readFile(dir, "utf-8");
  return data;
}
