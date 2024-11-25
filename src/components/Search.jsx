/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Search({ onSearch }) {

    const [search, setSearch] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onSearch(search);
        }
    }

    return (
        <div className="search row">
            <div className="input-field col s12">
                <input
                    className="validate"
                    type="search"
                    placeholder="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    className="btn btn-search blue-grey darken-3"
                    onClick={() => { onSearch(search) }}
                >
                    Search
                </button>
            </div>
        </div >
    )
}