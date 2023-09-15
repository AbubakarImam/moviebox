import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const apiKey = import.meta.env.VITE_API_KEY; // Adjust as needed
const url = import.meta.env.VITE_API_URL; // Adjust as needed

const useMovieDetails = (movieId) => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`${url}/3/movie/${movieId}`, {
                    params: {
                        api_key: apiKey,
                    },
                });

                if (response.status !== 200) {
                    throw new Error('Network response was not ok');
                }

                const data = response.data;
                // const movie = {
                //     id: data.id,
                //     title: data.title,
                //     overview: data.overview,
                //     poster: `https://image.tmdb.org/t/p/original${data.poster_path}`,
                //     runtime: data.runtime, // Assuming the API provides runtime in minutes
                //     // Add other details as needed
                // };

                setMovieDetails(data);
            } catch (error) {
                setError(error.message);
                toast.error("Error occur")
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails(movieId);
    }, [movieId]);

    return { movieDetails, loading, error };
};

export default useMovieDetails;
