import MovieList from '../components/MovieList';
import Search from '../components/Search';
import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_API_OPTIONS;
import Preloader from '../components/Preloader';

export default function Main() {

    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);

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
            .then(res => { setMovies(res.results); setLoading(false) })
            .catch(err => console.error(err));
    }, [])

    function onSearch(query, type) {
        if (query) {
            setLoading(true);
            fetch(`https://api.themoviedb.org/3/search/${type}?query=${query}&include_adult=false&language=en-US&page=1`, options)
                .then(res => res.json())
                .then(res => { setMovies(res.results); setLoading(false) })
                .catch(err => console.error(err));

        } else if (!query || query === '') {

            setLoading(true);

            if (type === 'multi') type = 'all'

            fetch(`https://api.themoviedb.org/3/trending/${type}/day?language=en-US`, options)
                .then(res => res.json())
                .then(res => { setMovies(res.results); setLoading(false) })
                .catch(err => console.error(err));
        }
    }

    return (
        <>
            <div className="content">
                <Search onSearch={onSearch} />
                {loading ? (
                    <Preloader />
                ) : (
                    <MovieList movies={movies} />
                )}
            </div>
        </>
    )
}