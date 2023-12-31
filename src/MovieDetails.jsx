import { useParams } from 'react-router-dom';
import useMovieDetails from "../src/Hooks/movieDetailsHook" // Adjust the path as per your project structure
import Sidebar from './components/Sidebar';
import ShowCaseArea from './components/ShowCaseArea';
import Loading from '../src/assets/loading.svg';

const MovieDetails = () => {
    const { movieId } = useParams();
    const { movieDetails, loading, error } = useMovieDetails(movieId);

    if (loading) {
        return <div className='flex justify-center'>
            <img src={Loading} alt="loading" />
        </div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!movieDetails) {
        return <div>No details available for this movie</div>;
    }

    return (
        <div className='flex'>
            <Sidebar />
            <ShowCaseArea details={movieDetails} />

        </div>
    );
};

export default MovieDetails;
