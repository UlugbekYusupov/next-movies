import Hero from "@/components/Hero";
import Movies from "@/components/Movies";
import { server } from "@/config";
import axios from "axios";

export default function Home({ movies }) {
  return (
    <div className="bg-gray-700">
      <Hero />
      <Movies movies={movies.data.movieList} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios(`${server}?page=${1}&items=${20}`);
  const movies = response.data;
  return {
    props: {
      movies,
    },
  };
}
