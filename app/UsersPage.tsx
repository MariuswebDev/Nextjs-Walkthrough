"use client";

interface User {
  id: number;
  name: string;
  email: string;
  phone: number;
  website: string;
}

export const USersPage = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const users: User[] = await response.json();

    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>;
  } catch (error) {
    return (
      <div>
        <h1>Error</h1>
        <p>Failed to load users. Please try again later.</p>
      </div>
    );
  }
};
