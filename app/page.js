import { getAllTopics } from '@/lib/data';

export const revalidate = 3600;

export default async function HomePage() {
  const topics = await getAllTopics();

  return (
    <>
      <h1>Money Directory</h1>
      {topics.map(t => (
        <section key={t.slug} style={{ marginBottom: '2rem' }}>
          <h2>{t.title}</h2>
          <ul>
            {t.links.map((l, i) => (
              <li key={i}>
                <a href={`/${t.slug}/${l.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>{l.title}</a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}