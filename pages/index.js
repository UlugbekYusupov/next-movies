import Hero from "@/components/Hero";
import Movies from "@/components/Movies";
import Pagination from "@/components/Pagination";
import { server } from "@/config";
import axios from "axios";
import { paginate } from "@/utils/paginate";

import { useState, useEffect } from "react";

let globalCurrentPage;
const pageSize = 10;

export default function Home({ movies }) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    globalCurrentPage = currentPage;
    return () => (globalCurrentPage = null);
  }, [currentPage]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(movies.data.movieList, currentPage, pageSize);

  return (
    <div className="bg-gray-700">
      <Hero />
      <Movies movies={paginatedPosts} />
      <Pagination
        totalItems={movies.data.movieList.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios(
    `${server}?page=${globalCurrentPage}&items=${266}`
  );
  const movies = response.data;
  return {
    props: {
      movies,
    },
  };
}
