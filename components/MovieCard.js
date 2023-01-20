import Image from "next/legacy/image";

function MovieCard({ movie }) {
  console.log(movie);
  return (
    <div className="bg-white shadow-sm rounded-md cursor-pointer">
      <Image
        src={movie.poster}
        width={250}
        height={300}
        className="rounded-t-md"
      />
      <div className="p-4 py-2">
        <h1 className="text-gray-700 font-bold text-xl">{movie.title}</h1>
        <p className="text-gray-500 text-sm">{movie.year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
