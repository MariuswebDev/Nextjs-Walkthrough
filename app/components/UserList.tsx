"use client";
import { useState } from "react";
import { User } from "../dashboard/page";
interface USerListProps {
  initialUsers: User[];
}

const UserList = ({ initialUsers }: USerListProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  return (
    <div>
      <ul className="space-y-6">
        {initialUsers.map((user) => (
          <li
            className={`p-4 cursor-pointer rounded ${
              selectedId === user.id ? "bg-blue-100" : "bg-gray-100"
            }`}
            key={user.id}
            onClick={() => setSelectedId(user.id)}
          >
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
