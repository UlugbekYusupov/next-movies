import Link from "next/link";
import Image from "next/legacy/image";

const Navbar = () => {
  return (
    <nav className=" bg-gray-700">
      <div
        className="flex justify-between items-center  font-bold text-neutral-100 p-4 max-w-7xl mx-auto container
       tracking-widest font-neue"
      >
        <Link href="/">
          <span className="text-base md:text-2xl">Netflix</span>
          <span className="text-red-600 md:text-2xl uppercase">Me</span>
        </Link>
        
        <Link
          href={"https://github.com/UlugbekYusupov/next-movies"}
          target="_blank"
        >
          <button className="w-32 h-10 hover:bg-sky-700 bg-green-700 text-white px-6 rounded text-small">
            Go to GitHub
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
