import Link from 'next/link';
import { getAllTopics } from '@/lib/data';

export const revalidate = 3600;

export default async function HomePage() {
  const topics = await getAllTopics();

  return (
    <>
      <h1>Money Directory</h1>
      <div className='grid'>
        {topics.map(t => (
          <Link key={t.slug} href={`/${t.slug}`} className='card'>
            <h2>{t.title}</h2>
            <p>{t.links.length} resources</p>
          </Link>
        ))}
      </div>
    </>
  );
}