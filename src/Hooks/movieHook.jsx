import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;
const url = import.meta.env.VITE_API_URL;

const useTopRatedMovies = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [genreData, setGenreData] = useState([]);

    useEffect(() => {
        // Fetch genre data
        axios.get(`${url}/3/genre/movie/list`, {
            params: {
                api_key: apiKey
            }
        })
            .then(response => {
                setGenreData(response.data.genres);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const fetchTopRatedMovies = async () => {
            try {
                const response = await axios.get(`${url}/3/movie/top_rated`, {
                    params: {
                        api_key: apiKey
                    }
                });

                if (response.status !== 200) {
                    throw new Error('Network response was not ok');
                }

                const data = response.data;
                const movies = data.results.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    genres: movie.genre_ids.map(id => {
                        const genre = genreData.find(g => g.id === id);
                        return genre ? genre.name : '';
                    }),
                    rating: movie.vote_average,
                    poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
                    overview: movie.overview,
                    releaseDate: movie.release_date,
                }));

                setTopRatedMovies(movies);
            } catch (error) {
                setError(error.message);
                toast.error('An error occurred while fetching movies.');
            } finally {
                setLoading(false);
            }
        };

        fetchTopRatedMovies();
    }, [genreData]);

    return { topRatedMovies, loading, error };
};

export default useTopRatedMovies;
