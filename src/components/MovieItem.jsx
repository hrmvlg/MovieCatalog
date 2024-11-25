/* eslint-disable react/prop-types */
export default function MovieItem({ poster, title, releaseDate, type }) {

    const posterUrl = poster ? `https://image.tmdb.org/t/p/w300${poster}` : 'https://placehold.co/310x465?text=No\\nImage';
    const releaseYear = new Date(releaseDate).getFullYear();

    return (
        <li className="card">
            <img src={posterUrl} alt={`${title} poster`} className="card__image" />
            <div className="card__description">
                <h5 className="description__title">{title}</h5>
                <div className="description__footer">
                    <div className="description__footer-year">{releaseYear ? releaseYear : ''}</div>
                    <div className="description__footer-type">{type}</div>
                </div>
            </div>
        </li>
    )
}