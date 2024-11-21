/* eslint-disable react/prop-types */
import MovieItem from './MovieItem'

export default function MovieList({ movies }) {

    return (
        <ul className="movie-list">
            {
                movies ?
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
                    : (<h5>Movie list is empty</h5>)
            }
        </ul>
    )
}