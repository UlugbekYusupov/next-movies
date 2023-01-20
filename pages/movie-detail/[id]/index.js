import { server } from "@/config";
import axios from "axios";
import { movieDetail } from "@/config";

function Movie({ movie }) {
  console.log(movie);
  return <div>{movie.title}</div>;
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
  const response = await axios(`${server}?page=${1}&items=${20}`);
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
