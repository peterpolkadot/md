import { supabase } from "@/lib/supabase";
import Link from "next/link";

export default async function HomePage() {
  const { data } = await supabase
    .from("md_topics")
    .select("slug, title")
    .order("title");

  return (
    <>
      <h1>Money Directory</h1>
      <ul>
        {data?.map(item => (
          <li key={item.slug}>
            <Link href={`/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}