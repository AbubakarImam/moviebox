
import PropTypes from 'prop-types';
import MovieDescription from "../components/MovieDescription";
import { FaPlay } from 'react-icons/fa';
import { IoTicketSharp } from "react-icons/io5";
import { IoIosOptions } from "react-icons/io";
import something from "../assets/smallposter.png";

const ShowCaseArea = ({ details }) => {
  const imgURL = `https://image.tmdb.org/t/p/original${details.backdrop_path}`
  const description = {
    title: details?.original_title,
    date: new Date(details?.release_date).toUTCString(),
    rating: details?.adult ? "PG-18" : "PG-13",
    runtime: details?.runtime,
    genres: details?.genres?.map((genre) => genre.name),
    overView: details?.overview,
    productionCompanies: details?.production_companies
  };

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };


  return (
    <div className="flex-1 p-8 grid grid-cols-3 grid-rows-2  h-[100vh]">
      {/* Showcase Image */}
      <div className="col-span-3 rounded-xl relative">
        <img src={imgURL} alt="display image" className="w-full h-full rounded-xl" />

        {/* Overlay with centered content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white">
            <div className="mb-2 p-4 rounded-full bg-opacity-50 bg-white flex justify-center items-center">
              <FaPlay />
            </div>
            <div>
              <h1 className="text-white">Watch Trailer</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Description */}
      <MovieDescription description={{
        ...description,
        runtime: formatRuntime(description.runtime)
      }} />
      {/* Serenre */}
      <div className="w-full mt-4 mx-4">
        <div className="flex items-end text-left">
          <p className=""></p>

        </div>
        {/* Buttons */}
        <div>
          <button className="bg-[#BE123C] rounded-md py-2 px-4 w-full">
            <h1 className="text-white flex items-center justify-center ">
              <IoTicketSharp />
              <span className="px-2">See Showtimes</span>
            </h1>
          </button>

          <div className="rounded-md py-2 px-4 w-full border-[#BE123CB2] border bg-[#fcf5f7] text-center my-2 flex items-center justify-center">
            <IoIosOptions />
            <span className="px-2">More Watch</span>
          </div>
        </div>
        {/* Images */}
        <img src={something} alt="movie alt" />
      </div>
    </div>
  );
};

ShowCaseArea.propTypes = {
  details: PropTypes.shape({
    backdrop_path: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    adult: PropTypes.bool,
    runtime: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
    })),
    overview: PropTypes.string,
    production_companies: PropTypes.arrayOf(PropTypes.shape({
      // Define the shape of production company object
    })),
  }),
};

export default ShowCaseArea;
