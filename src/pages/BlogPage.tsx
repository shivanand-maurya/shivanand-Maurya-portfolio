import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, Post } from '../utils/posts';
import Card from '../components/ui/Card';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map(post => (
          <Link to={`/blog/${post.slug}`} key={post.slug}>
            <Card>
              <img src={post.cover_image} alt={post.title} className="rounded-t-lg"/>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-400 mb-2">{new Date(post.date).toLocaleDateString()}</p>
                <p>{post.excerpt}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default BlogPage;