import Image from "next/legacy/image";

function MovieCard({ movie }) {
  console.log(movie);
  return (
    <div className="bg-white shadow-sm roudned-md cursor-pointer">
      <Image src={movie.poster} width={200} height={300}/>
    </div>
  );
}

export default MovieCard;
