"use client";

import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

export default function MyPostPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
        <h1>My Posts</h1>
        {posts.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <small>By {post.author}</small>
            </div>
        ))}
    </div>
  );
}
