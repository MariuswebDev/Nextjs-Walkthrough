interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
}

interface UserPageProps {
  params: {
    id: string;
  };
}

const Userpage = async ({ params }: UserPageProps) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
  );
  const user: User = await response.json();
  return (
    <div>
      <h1 className="font-bold">{user.name}</h1>
      <div className="bg-white p-6 space-y-4">
        <div>
          <label className="font-bold text-gray-700">Email</label>
          <p>{user.email}</p>
        </div>
        <div>
          <label className="font-bold text-gray-700">Phone</label>
          <p>{user.phone}</p>
        </div>
        <div>
          <label className="font-bold text-gray-700">Address</label>
          <p>
            {user.address.street}, {user.address.city}, {user.address.zipcode}
          </p>
        </div>
        <div>
          <label className="font-bold text-gray-700">Company</label>
          <p>{user.company.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Userpage;
