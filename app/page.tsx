import MovieCrouselBannerWrapper from "@/components/MovieCrouselBannerWrapper";
import Moviecarousel from "@/components/Moviecarousel";
import {
  getUpcomingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  return (
    <main className="">
      <MovieCrouselBannerWrapper />
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <Moviecarousel title="Upcoming" movies={upcomingMovies} />
        <Moviecarousel title="Top Rated" movies={topRatedMovies} />
        <Moviecarousel title="Popular" movies={popularMovies} />
      </div>
    </main>
  );
}
