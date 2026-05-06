import { NextResponse } from "next/server";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

// Store todos in memory
export const todos: Todo[] = [];

export async function GET() {
  return NextResponse.json(todos);
}

interface AddTodoRequest {
  title: string;
}

export default async function POST(request: Request) {
  const body: AddTodoRequest = await request.json();

  const newTodo: Todo = {
    id: Date.now().toString(),
    title: body.title,
    completed: false,
  };

  todos.push(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
}
