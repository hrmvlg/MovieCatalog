import './assets/index.css'
import Header from "./layout/Header"
import Footer from './layout/Footer';
import Main from './layout/Main';
import { useEffect, useState } from 'react';

function App() {

  const [movies, setMovies] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer " + import.meta.env.VITE_API_OPTIONS
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
      <Header />
      <Main
        movies={movies}
        onSearch={onSearch} />
      <Footer />
    </>
  )
}

export default App
