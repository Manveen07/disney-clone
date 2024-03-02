import { getDiscoverMovies } from "@/lib/getMovies";
import CaroselBanner from "./CaroselBanner";

type Props = {
  id?: string;
  keywords?: string;
};

async function MovieCrouselBannerWrapper({ id, keywords }: Props) {
  const movies = await getDiscoverMovies(id, keywords);
  return <CaroselBanner movies={movies} />;
}

export default MovieCrouselBannerWrapper;
