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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjc0ZDZkY2E3MWMxMzY2ZWE1NWJmYWE1ODMxZjU1YyIsIm5iZiI6MTczMjUzMTU3NC4wMzU4NzQxLCJzdWIiOiI2NzNmNzVhYjIxZGE0Mjk2N2ZjNDk5OTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.C5wRDA5yQbOvj5TIlqed3w1uqlvLW3ib_04Y2W1GZc0'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
      .then(res => res.json())
      .then(res => setMovies(res.results))
      .catch(err => console.error(err));
  }, [])

  function onSearch(query) {
    if (query != '' && query) {
      fetch('https://api.themoviedb.org/3/search/multi?query=' + query + '&include_adult=false&language=en-US&page=1', options)
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
