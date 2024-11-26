/* eslint-disable react/prop-types */
import MovieItem from './MovieItem'

export default function MovieList({ movies }) {
    if (movies) {
        if (movies.length === 0) return <h4 className="">Nothing found ☹️</h4>
    }

    return (
        <ul className="movie-list">
            {
                movies.map(movie => {

                    const name = movie.title ? movie.title : movie.name;
                    const releaseDate = movie.first_air_date ? movie.first_air_date : movie.release_date;

                    return (
                        <MovieItem
                            poster={movie.poster_path}
                            title={name}
                            releaseDate={releaseDate}
                            type={movie.media_type}
                            key={movie.id}
                        />)
                })
            }
        </ul>
    )
}