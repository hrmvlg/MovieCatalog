/* eslint-disable react/prop-types */
import MovieList from '../components/MovieList';

export default function Main({ movies }) {
    return (
        <>
            <div className="content">
                <MovieList movies={movies} />
            </div>
        </>
    )
}