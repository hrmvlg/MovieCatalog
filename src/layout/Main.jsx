import MovieList from '../components/MovieList';
import Search from '../components/Search';
import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_API_OPTIONS;

export default function Main() {

    const [movies, setMovies] = useState(null);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: "Bearer " + API_KEY
        }
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
            .then(res => res.json())
            .then(res => setMovies(res.results))
            .catch(err => console.error(err));
    }, [])

    function onSearch(query, type) {
        if (query) {
            fetch(`https://api.themoviedb.org/3/search/${type}?query=${query}&include_adult=false&language=en-US&page=1`, options)
                .then(res => res.json())
                .then(res => setMovies(res.results))
                .catch(err => console.error(err));

        } else if (!query || query === '') {
            if (type === 'multi') type = 'all'

            fetch(`https://api.themoviedb.org/3/trending/${type}/day?language=en-US`, options)
                .then(res => res.json())
                .then(res => setMovies(res.results))
                .catch(err => console.error(err));
        }
    }

    return (
        <>
            <div className="content">
                <Search onSearch={onSearch} />
                <MovieList movies={movies} />
            </div>
        </>
    )
}