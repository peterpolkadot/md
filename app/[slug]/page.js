import { getAllTopics, getTopic } from '@/lib/data';

export const revalidate = 3600;

export async function generateStaticParams() {
  const topics = await getAllTopics();
  return topics.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const topic = await getTopic(params.slug);
  if (!topic) return {};

  return {
    title: `${topic.title} ? Money Directory`,
    description: `Curated list of ${topic.links.length} ${topic.title} resources`
  };
}

export default async function TopicPage({ params }) {
  const topic = await getTopic(params.slug);
  if (!topic) return null;

  return (
    <>
      <h1>{topic.title}</h1>
      <div className='grid'>
        {topic.links.map((item, i) => (
          <article key={i} className='card'>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.url} target='_blank' rel='nofollow noopener'>Visit ?</a>
          </article>
        ))}
      </div>
    </>
  );
}