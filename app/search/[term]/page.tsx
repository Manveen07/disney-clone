import Moviecarousel from "@/components/Moviecarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";
import React from "react";
type Props = {
  params: {
    term: string;
  };
};

async function Searchpage({ params: { term } }: Props) {
  if (!term) notFound();
  const termToUse = decodeURI(term);
  const movies = await getSearchedMovies(termToUse);
  const popularmovies = await getPopularMovies();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42 ">
        <h1 className="font-bold px-10 text-6xl">Results for {termToUse}</h1>
        <Moviecarousel movies={movies} isVertical title="Movies" />
        <Moviecarousel movies={popularmovies} title="You may also like" />
      </div>
    </div>
  );
}

export default Searchpage;
