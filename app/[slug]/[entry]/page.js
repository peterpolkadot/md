import { getAllTopics, getTopic } from '@/lib/data';

export const revalidate = 3600;

const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export async function generateStaticParams() {
  const topics = await getAllTopics();
  const params = [];

  topics.forEach(t => {
    t.links.forEach(l => {
      params.push({ slug: t.slug, entry: slugify(l.title) });
    });
  });

  return params;
}

export default async function EntryPage({ params }) {
  const topic = await getTopic(params.slug);
  const entry = topic.links.find(l => slugify(l.title) === params.entry);

  return (
    <>
      <h1>{entry.title}</h1>
      <p>{entry.description}</p>
      <a href={entry.url} target='_blank' rel='nofollow noopener'>Visit ?</a>
    </>
  );
}