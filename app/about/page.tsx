const Skills = () => {
  return (
    <div className=" flex flex-col items-center space-y-6 my-10">
      <h1 className="font-extrabold text-4xl text-white">Skills</h1>

      <section className="flex gap-40 border-10 border-double p-20 border-gray-50 hover:bg-white cursor-pointer transition">
        <div className="space-y-2">
          <h2 className="text-teal-400 font-bold text-3xl">FRONTEND</h2>
          <ul className="text-white space-y-2 font-semibold">
            <li>React & Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind Css</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-teal-400 font-bold text-3xl">TOOLS</h2>
          <ul className="text-white space-y-2 font-semibold">
            <li>Git & GitHub</li>
            <li>Vercel</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Skills;
