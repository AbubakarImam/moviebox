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
    <div className="flex-1 p-8 h-screen">
      <div className="grid grid-cols-1 gap-4">
        {/* Showcase Image */}
        <div className="rounded-xl relative aspect-w-16 aspect-h-9">
          <img src={imgURL} alt="display image" className="w-full h-full rounded-xl object-cover" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white">
              <div className="py-4 px-2 rounded-full bg-opacity-50 bg-white flex justify-center items-center">
                <FaPlay />
              </div>
              <div>
                <h1 className="text-white">Watch Trailer</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {/* Description */}
          <MovieDescription description={{
            ...description,
            runtime: formatRuntime(description.runtime)
          }} />

          {/* Genre */}
          <div className="mt-4 mx-4">
            <div className="flex items-end text-left">
              <p className=""></p>
            </div>
            {/* Buttons */}
            <div>
              <button className="bg-[#BE123C] rounded-md py-2 px-4 w-full mb-2">
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
          </div>
        </div>
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
