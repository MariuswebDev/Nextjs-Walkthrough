// "use client";
import Image from "next/image";

const Projetcs = () => {
  return (
    <div className="py-10 px-6 border-b border-b-gray-400">
      <h2 className="text-5xl font-bold text-amber-600 mb-10 text-center">
        Featured Projects
      </h2>
      <section className="flex flex-wrap items-center justify-between">
        <div className="bg-gray-300 mix-blend-exclusion p-6 w-100 h-100 rounded-lg shadow-amber-100 space-y-2 hover:-mt-4 transition hover:scale-103 cursor-pointer">
          <Image
            className="rounded-lg bg-gray-500"
            src="/filteringApp.png"
            width={300}
            height={300}
            alt="This is a project image."
          />
          <h2 className="font-bold">Filtering App</h2>
          <p className="mb-2 text-shadow-mauve-700 text-sm">
            Built with React.js, TypeScript and tailwind.css. Product include
            product filtering according to specific categories and features.
          </p>
          <div className="flex gap-2">
            <button className="bg-gray-900 py-1 rounded-lg text-neutral-400 text-sm px-2 cursor-pointer hover:bg-gray-50 hover:font-bold transition-colors hover:border-2 hover:text-gray-700">
              React.js
            </button>
            <button className="bg-gray-900 py-1 rounded-lg text-neutral-400 text-sm px-2 cursor-pointer hover:bg-gray-50 hover:font-bold transition-colors hover:border-2 hover:text-gray-700">
              TypeScript
            </button>
            <button className="bg-gray-900 py-1 rounded-lg text-neutral-400 text-sm px-2 cursor-pointer hover:bg-gray-50 hover:font-bold transition-colors hover:border-2 hover:text-gray-700">
              Tailwind.css
            </button>
          </div>
        </div>
        <div className="bg-gray-300 mix-blend-exclusion p-6 w-100 h-100 rounded-lg shadow-amber-100 space-y-2 hover:-mt-4 transition hover:scale-103 cursor-pointer">
          <Image
            className="rounded-lg bg-gray-500"
            src="/noteApp.png"
            width={300}
            height={300}
            alt="This is a project image."
          />
          <h2 className="font-bold">Note App</h2>
          <p className="mb-2 text-shadow-mauve-700 text-sm">
            Note App with react.js with the feature to create notes with tags.
            It alse contains the feature to filter with tags.
          </p>
          <div className="flex gap-2">
            <button className="bg-gray-900 py-1 rounded-lg text-neutral-400 text-sm px-2 cursor-pointer hover:bg-gray-50 hover:font-bold transition-colors hover:border-2 hover:text-gray-700">
              React.js
            </button>
            <button className="bg-gray-900 py-1 rounded-lg text-neutral-400 text-sm px-2 cursor-pointer hover:bg-gray-50 hover:font-bold transition-colors hover:border-2 hover:text-gray-700">
              TypeScript
            </button>
            <button className="bg-gray-900 py-1 rounded-lg text-neutral-400 text-sm px-2 cursor-pointer hover:bg-gray-50 hover:font-bold transition-colors hover:border-2 hover:text-gray-700">
              Tailwind.css
            </button>
          </div>
        </div>
        <div className="bg-gray-300 mix-blend-exclusion p-6 w-100 h-100 rounded-lg shadow-amber-100 space-y-2 hover:-mt-4 transition hover:scale-103 cursor-pointer">
          <Image
            className="rounded-lg bg-gray-500"
            src="/todoApp.png"
            width={300}
            height={300}
            alt="This is a project image."
          />
          <h2 className="font-bold">Todo App</h2>
          <p className="mb-2 text-shadow-mauve-700 text-sm">
            This app has the feature to create, update, edit and delete tasks.
            Also possessing task tracking.
          </p>
          <div className="flex gap-2">
            <button className="bg-gray-900 py-1 rounded-lg text-neutral-400 text-sm px-2 cursor-pointer hover:bg-gray-50 hover:font-bold transition-colors hover:border-2 hover:text-gray-700">
              React.js
            </button>
            <button className="bg-gray-900 py-1 rounded-lg text-neutral-400 text-sm px-2 cursor-pointer hover:bg-gray-50 hover:font-bold transition-colors hover:border-2 hover:text-gray-700">
              TypeScript
            </button>
            <button className="bg-gray-900 py-1 rounded-lg text-neutral-400 text-sm px-2 cursor-pointer hover:bg-gray-50 hover:font-bold transition-colors hover:border-2 hover:text-gray-700">
              Tailwind.css
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projetcs;
