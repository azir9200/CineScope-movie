import { useGetMoviesQuery } from "@/redux/api/api";

const TopMovies = () => {
  const { data, isLoading } = useGetMoviesQuery({});
  console.log(data);
  if (isLoading)
    return (
      <p className="text-3xl text-center text-yellow-500 my-2 font-bold">
        Loading....
      </p>
    );
  return (
    <div>
      <h2 className="text-2xl font-bold my-2  border-l-4 border-l-yellow-400 px-1">
        Top Rated Movies
      </h2>
    </div>
  );
};

export default TopMovies;
