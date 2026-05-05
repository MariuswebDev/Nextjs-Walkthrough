import UserList from "../components/UserList";

export interface User {
  id: number;
  name: string;
  email: string;
}

async function getUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
}

const DashboardPage = async () => {
  const users = await getUsers(); // Fetched on server
  return (
    <div>
      <h1 className="text-amber-500 text-4xl font-bold">Dashboard</h1>
      <UserList initialUsers={users} />
    </div>
  );
};

export default DashboardPage;
