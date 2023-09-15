import { useState } from "react";
import PropTypes from 'prop-types';
import imdb from "../assets/imdb.png";
import tomato from "../assets/tomato.png";
import { FaHeart } from 'react-icons/fa';

const Card = ({ imagePath, title, releaseDate, rating, genre }) => {
    const genreNames = genre;
    const imageurl = "https://image.tmdb.org/t/p/original/" + imagePath;

    const [isFavorite, setIsFavorite] = useState(false);

    const handleAddToFavorites = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className="flex flex-col relative" data-testid="movie-card">
            {/* Heart Icon */}
            <button
                className={`absolute rounded-full top-2 right-2 p-2 bg-opacity-50 bg-white ${isFavorite ? 'text-red-500' : 'text-gray-500'}`}
                onClick={handleAddToFavorites}
            >
                <FaHeart className="text-base text-white text-opacity-70" />
            </button>

            {/* Poster */}
            <div>
                <img
                    src={imageurl}
                    alt={title}
                    data-testid="movie-poster"
                />
            </div>
            {/* Info */}
            <div className="flex flex-col">
                {/* Release Date */}
                <p
                    className="text-[#9CA3AF] text-xs font-bold mt-4"
                    data-testid="movie-release-date"
                >
                    {releaseDate}
                </p>
                {/* Title */}
                <h1 className="font-bold text-lg mt-5" data-testid="movie-title">
                    {title}
                </h1>
                {/* Rating */}
                <div className="flex mb-3">
                    <div className="mr-4">
                        <img src={imdb} alt="IMDb logo" className="inline-block h-4" />
                        <p className="inline-block text-xs ml-1">{rating}</p>
                    </div>
                    <div className="ml-4">
                        <img src={tomato} alt="IMDb logo" className="inline-block h-4" />{" "}
                        <p className="inline-block text-xs">50</p>
                    </div>
                </div>
                {/* Genre */}
                <p className="text-[#9CA3AF] text-xs font-bold mt-3 mb-20">
                    {genreNames.map((genre) => {
                        return `${genre} `;
                    })}
                </p>
            </div>
        </div>
    );
};
Card.propTypes = {
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genre: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Card;
