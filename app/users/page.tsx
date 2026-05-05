interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const UsersPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
