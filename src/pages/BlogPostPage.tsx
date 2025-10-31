import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPost, Post } from '../utils/posts';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (slug) {
      getPost(slug).then(setPost);
    }
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="prose prose-invert lg:prose-xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 mb-8">{new Date(post.date).toLocaleDateString()}</p>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </main>
  );
};

export default BlogPostPage;