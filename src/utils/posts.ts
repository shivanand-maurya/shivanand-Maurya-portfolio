import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  cover_image: string;
  content: string;
}

export async function getPosts(): Promise<Post[]> {
  const postModules = import.meta.glob('/src/content/posts/*.md', { as: 'raw' });

  const posts = await Promise.all(
    Object.entries(postModules).map(async ([path, resolver]) => {
      const rawContent = await resolver();
      const { data, content } = matter(rawContent);
      const slug = path.split('/').pop()!.replace('.md', '');
      
      return {
        slug,
        title: data.title,
        date: data.date,
        tags: data.tags,
        excerpt: data.excerpt,
        cover_image: data.cover_image,
        content,
      } as Post;
    })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = await getPosts();
  return posts.find(post => post.slug === slug) || null;
}
