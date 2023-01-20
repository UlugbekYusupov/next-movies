import Image from "next/legacy/image";

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
       
      </div>
    </div>
  );
};

export default Hero;
