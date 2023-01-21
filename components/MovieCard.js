import Image from "next/legacy/image";
import Link from "next/link";

function MovieCard({ movie }) {
  return (
    <Link href={`/movie-detail/${movie.id}`}>
      <div className="shadow-2xl bg-white rounded-2xl cursor-pointer">
        <Image
          src={movie.poster}
          width={300}
          height={400}
          layout={"responsive"}
          className="rounded-t-2xl hover:brightness-125 transition duration-200 ease-in-out"
        />
        <div className="p-4 py-2">
          <h1 className="text-gray-700 font-bold text-lg text-ellipsis truncate">
            {movie.title}
          </h1>
          <p className="text-gray-500 text-sm">{movie.year}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
