"use client";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Postpage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 10));
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="bg-amber-100 p-4">
      <h1 className="font-bold mb-2 text-4xl">Posts</h1>

      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2 className="mt-2 font-bold">{post.title}</h2>
            <p className="text-sm border-b-2 border-b-gray-400 pb-2">
              {post.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Postpage;
