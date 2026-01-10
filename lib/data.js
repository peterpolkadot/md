import { supabase } from '@/lib/supabase';

export async function getAllTopics() {
  const { data, error } = await supabase
    .from('md_topics')
    .select('slug, title, links');

  if (error) throw error;
  return data || [];
}

export async function getTopic(slug) {
  const { data, error } = await supabase
    .from('md_topics')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) return null;
  return data;
}