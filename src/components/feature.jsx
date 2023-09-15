
import { Link } from "react-router-dom";
import useTopRatedMovies from "../Hooks/movieHook";
import Loading from "../assets/loading.svg";
import Card from "./Card";

function Feature() {
    const { topRatedMovies, loading } = useTopRatedMovies();

    if (loading) {
        return (
            <div className="loading">
                <img src={Loading} alt="loading" />
            </div>
        );
    }

    return (
        <div className="px-40 py-16">
            {/* Header */}
            <div className="flex justify-between mb-8">
                <div>
                    <h1 className="font-bold text-4xl">Featured Movie</h1>
                </div>
                <div><a href="#" target='_blank' className="text-[#BE123C] text-lg font-normal">See more &gt;</a></div>
            </div>
            {/* Grid */}
            <div className="grid gap-4 grid-cols-4">
                {topRatedMovies.map((movie) => {
                    return (
                        <Link to={`/${movie.id}`} key={movie.id}>
                            <Card
                                imagePath={movie.poster}
                                title={movie.title}
                                releaseDate={movie.releaseDate}
                                rating={movie.rating}
                                genre={movie.genres}
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default Feature;
