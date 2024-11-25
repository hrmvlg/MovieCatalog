/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Search({ onSearch }) {

    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState('multi')

    const handleSearch = (event) => {
        if (event.type === 'keydown' && event.key !== 'Enter') {
            return;
        }

        const trimmedQuery = query.replace(/\s+/g, ' ').trim();
        setQuery(trimmedQuery);

        if (trimmedQuery) {
            onSearch(trimmedQuery, filter);
        }
        else {
            onSearch(null, filter)
        }
    }

    return (
        <div className="search row">
            <div className="input-field col s12">
                <input
                    className="validate"
                    type="search"
                    placeholder="search"
                    value={query}
                    onChange={(e) => { setQuery(e.target.value) }}
                    onKeyDown={handleSearch}
                />
                <form className='search__filter'>
                    <p>
                        <label>
                            <input
                                type="radio"
                                checked={filter === 'multi'}
                                value="multi"
                                onChange={(e) => setFilter(e.target.value)}
                            />
                            <span>All</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                type="radio"
                                checked={filter === 'tv'}
                                value="tv"
                                onChange={(e) => setFilter(e.target.value)}
                            />
                            <span>TV</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                type="radio"
                                checked={filter === 'movie'}
                                value='movie'
                                onChange={(e) => setFilter(e.target.value)}
                            />
                            <span>Movie</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                type="radio"
                                checked={filter === 'person'}
                                value="person"
                                onChange={(e) => setFilter(e.target.value)}
                            />
                            <span>Person</span>
                        </label>
                    </p>
                </form>
                <button
                    className="btn btn-search blue-grey darken-3"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div >
    )
}