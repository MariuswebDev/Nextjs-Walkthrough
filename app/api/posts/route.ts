import { NextResponse } from "next/server";

const posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is my first blog post",
    author: "Alice",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is my second blog post",
    author: "Bob",
  },
];

export const GET = async () => {
  return NextResponse.json(posts);
};

// create new post
interface PostRequest {
  title: string;
  content: string;
  author: string;
}

export const POST = async (request: Request) => {
  // Get data from the request
  const body: PostRequest = await request.json();

  // create new post
  const newPost = {
    id: posts.length + 1,
    title: body.title,
    content: body.content,
    author: body.author,
  };

  // Add to our list;
  posts.push(newPost);

  // Send it back
  return NextResponse.json(newPost, { status: 201 });
};
