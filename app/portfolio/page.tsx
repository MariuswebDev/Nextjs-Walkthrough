// "use client";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="mx-auto text-white font-sans">
      <header className="bg-gray-900 border-b border-b-gray-400 flex flex-col gap-2 p-6 items-center">
        <Image
          src="https://avatars.githubusercontent.com/u/236823006?s=400&u=50b7982621ec24c5aacb47286de1156e148c2510&v=4"
          alt="Profile image"
          width={200}
          height={200}
          className="rounded-full border ring-2 ring-gray-200 border-blue-100 mb-4"
        />
        <h1 className="text-white font-bold text-4xl mb-2">
          Front End <span className="text-purple-400">Developer.</span>
        </h1>
        <p className="text-gray-50">
          Building beautiful, functional web applications with Next.js and
          TypeScript. Passionate about clean code and user experience.
        </p>
      </header>
    </div>
  );
};

export default Dashboard;
