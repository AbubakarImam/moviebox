import PropTypes from 'prop-types';

const MovieDescription = ({ description }) => {
  return (
    <div className="col-span-2">
      {/* Name/release date/rating/etc */}

      <h1 className="mt-4 mx-4 text-xl font-bold">
        <span data-testid="movie-title">{description.title}</span> • <span data-testid="movie-release-date">{description.date}</span> •{" "}
        {description.rating} • <span data-testid="movie-runtime">{description.runtime}</span>
        {description?.genres?.map((des) => {
          return (
            <span
              key={des}
              className="rounded-2xl border-[#F8E7EB] border text-[#B91C1C] py-1 px-2 text-sm font-light mx-3"
            >
              {des}
            </span>
          );
        })}
      </h1>

      {/* description*/}

      <p className="mx-4 mt-4" data-testid="movie-overview">{description.overView}</p>

      {/* cast*/}
      <h1 className="mx-4 mt-4 font-bold text-lg">Production Companies:</h1>
      <ul className=" px-3 mx-4 mt-4">
        {description?.productionCompanies?.map((des) => {
          return (
            <li className="mb-5" key={des.name}>
              <span className="text-[#BE123C]">{des.name}</span>
            </li>
          );
        })}
      </ul>

      {/* banner */}
      <div className="flex rounded-xl border text-black border-[#C7C7C7]">
        <h1 className="w-[30%] bg-[#BE123C] rounded-xl text-[#FFFFFF] p-2 text-center">
          Top rated movie #65
        </h1>
        <h1 className="w-[70%] px-3 py-2">Awards 9 nominations</h1>
      </div>
    </div>
  );
};

// Add PropTypes validation
MovieDescription.propTypes = {
  description: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.string,
    runtime: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    overView: PropTypes.string,
    productionCompanies: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string
    }))
  })
};

export default MovieDescription;
