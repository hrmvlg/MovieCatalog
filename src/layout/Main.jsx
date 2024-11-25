/* eslint-disable react/prop-types */
import MovieList from '../components/MovieList';
import Search from '../components/Search';

export default function Main({ movies, onSearch }) {
    return (
        <>
            <div className="content">
                <Search onSearch={onSearch} />
                <MovieList movies={movies} />
            </div>
        </>
    )
}