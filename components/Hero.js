import Image from "next/legacy/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image
          src={"/home-cinema.png"}
          width={200}
          height={200}
          layout={"responsive"}
        />
        <h1 className="text-2xl text-gray-700 uppercase font-bold">
          Netflix Me
        </h1>
        <p className="text-gray-500">This is the test for Turon Telecom</p>
        <Link href={""}>
          <button className="bg-gray-700 text-white py-3 px-6 rounded text-small mt-4">
            Go to GitHub
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
