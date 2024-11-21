/* eslint-disable react/prop-types */
export default function MovieItem({ poster, title, releaseDate, type }) {

    const posterUrl = `https://image.tmdb.org/t/p/w300${poster}`;
    const releaseYear = new Date(releaseDate).getFullYear();

    return (
        <li className="card">
            <img src={posterUrl} alt={`${title} poster`} className="card__image" />
            <div className="card__description">
                <h5 className="description__title">{title}</h5>
                <div className="description__footer">
                    <div className="description__footer-year">{releaseYear}</div>
                    <div className="description__footer-type">{type}</div>
                </div>
            </div>
        </li>
    )
}