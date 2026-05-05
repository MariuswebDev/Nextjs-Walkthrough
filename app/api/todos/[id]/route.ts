import { NextResponse } from "next/server";
import { Todo } from "../route";

let todos: Todo[] = [];

interface RouteParams {
  params: {
    id: string;
  };
}

export async function DELETE({ params }: RouteParams) {
  const todoId = params.id;
  todos = todos.filter((todo) => todo.id !== todoId);
  return NextResponse.json({ success: true });
}

interface UpdateTodoRequest {
  completed?: boolean;
}

export async function PUT(request: Request, { params }: RouteParams) {
  const body: UpdateTodoRequest = await request.json();
  const todo = todos.find((t) => t.id === params.id);

  if (!todo) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (body.completed !== undefined) {
    todo.completed = body.completed;
  }

  return NextResponse.json(todo);
}
