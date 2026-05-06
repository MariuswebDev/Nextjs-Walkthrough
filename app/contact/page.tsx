import Link from "next/link";

const Contact = () => {
  return (
    <div className="border-t border-t-gray-400 my-6 flex flex-col items-center gap-15 p-20 border-gray-50 hover:bg-white cursor-pointer">
      <section className="space-y-4">
        <h1 className="font-extrabold text-4xl text-center mb-4 text-teal-400">
          Get In Touch
        </h1>
        <p className="text-gray-400">
          Have a project in mind? Lets collaborate!
        </p>
        <div className="flex gap-4">
          <button className="py-2 px-4 bg-teal-400 text-gray-900 font-bold cursor-pointer hover:bg-gray-900 hover:text-gray-50 transition rounded-md">
            <Link href="mariusdakid@gmail.com">Email</Link>
          </button>

          <button className="py-2 px-4 bg-teal-400 text-gray-900 font-bold cursor-pointer hover:bg-gray-900 hover:text-gray-50 transition rounded-md">
            <Link href="https://www.linkedin.com/in/ndifor-marius/">
              LinkedIn
            </Link>
          </button>

          <button className="py-2 px-4 bg-teal-400 text-gray-900 font-bold cursor-pointer hover:bg-gray-900 hover:text-gray-50 transition rounded-md">
            <Link href="https://github.com/MariuswebDev">GitHub</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
