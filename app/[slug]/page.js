import { supabase } from "@/lib/supabase";

export async function generateStaticParams() {
  const { data } = await supabase.from("md_topics").select("slug");
  return data?.map(r => ({ slug: r.slug })) || [];
}

export default async function TopicPage({ params }) {
  const { data } = await supabase
    .from("md_topics")
    .select("*")
    .eq("slug", params.slug)
    .single();

  if (!data) return <p>Not found</p>;

  return (
    <>
      <h1>{data.title}</h1>
      <ul>
        {data.links?.map((l, i) => (
          <li key={i}>
            <a href={l.url} target="_blank">{l.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}