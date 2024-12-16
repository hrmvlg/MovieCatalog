/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Search({ onSearch }) {

    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("multi")

    const handleFilter = (event) => {
        setFilter(event.target.dataset.type);
    }

    const handleQuery = (event) => {
        setQuery(event.target.value)
    }

    const handleSearch = (event) => {
        if (event.type === "keydown" && event.key !== "Enter") {
            return;
        }

        const trimmedQuery = query.replace(/\s+/g, " ").trim();
        setQuery(trimmedQuery);

        if (trimmedQuery) {
            onSearch(trimmedQuery, filter);
        }
        else {
            onSearch(null, filter)
        }
    }

    const handleRadioButtonClick = (event) => {
        onSearch(null, event.target.dataset.type);   
    }

    return (
        <div className="search row">
            <div className="input-field col s12">
                <input
                    className="validate"
                    type="search"
                    placeholder="search"
                    value={query}
                    onChange={handleQuery}
                    onKeyDown={handleSearch}
                />
                <form className="search__filter">
                    <p>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                data-type="multi"
                                onChange={handleFilter}
                                checked={filter === 'multi'}
                                onClick={handleRadioButtonClick}
                            />
                            <span>All</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                data-type="tv"
                                onChange={handleFilter}
                                onClick={handleRadioButtonClick}
                            />
                            <span>TV</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                data-type="movie"
                                onChange={handleFilter}
                                onClick={handleRadioButtonClick}
                            />
                            <span>Movie</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                type="radio"
                                name="type"
                                data-type="person"
                                onChange={handleFilter}
                                onClick={handleRadioButtonClick}
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