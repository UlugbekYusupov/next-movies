import { server } from "@/config";
import axios from "axios";
import { movieDetail } from "@/config";
import Image from "next/legacy/image";
import { globalCurrentPage } from "@/pages";

function Movie({ movie }) {
  console.log(movie);
  return (
    <div className="container max-w-4xl mx-auto pt-6">
      <div className="px-3 text-center">
        <Image
          src={movie.poster}
          width={1000}
          height={600}
          className="rounded-md"
        />
        <h1>
          <span className="font-bold text-lg">Name:</span> {movie.title}
        </h1>
        <p>
          <span className="font-bold text-lg">Slogan: </span> {movie.slogan}
        </p>
        <p>
          <span className="font-bold text-lg">Release Year: </span>
          {movie.year}
        </p>
        <p>
          <span className="font-bold text-lg">Budget: </span>
          {movie.budget}
        </p>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await axios(`${movieDetail}?id=${id}`);
  const movie = response.data.data;
  return {
    props: {
      movie,
    },
  };
}

export async function getStaticPaths() {
  const response = await axios(
    `${server}?page=${globalCurrentPage}&items=${266}`
  );
  const movies = response.data.data.movieList;
  const paths = movies.map((movie) => ({
    params: { id: movie.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default Movie;
