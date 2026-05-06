// "use client";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="mx-auto text-white font-sans">
      <nav className="bg-gray-700 px-3 flex p-6 justify-between items-center top-0 sticky">
        <span className="text-white font-bold text-3xl cursor-pointer">
          Marius <span className="text-blue-400">Dev</span>
        </span>
        <div className="space-x-4 font-semibold cursor-pointer">
          <Link
            className={`hover:text-amber-600 transition-colors hover:font-bold`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`hover:text-amber-600 transition-colors hover:font-bold `}
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className={`hover:text-amber-600 transition-colors hover:font-bold `}
            href="/about"
          >
            Skills
          </Link>
          <Link
            className={`hover:text-amber-600 transition-colors hover:font-bold `}
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </nav>
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
