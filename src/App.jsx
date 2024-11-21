import './assets/index.css'
import Header from "./layout/Header"
import Footer from './layout/Footer';
import Main from './layout/Main';
import { useEffect, useState } from 'react';

function App() {

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjc0ZDZkY2E3MWMxMzY2ZWE1NWJmYWE1ODMxZjU1YyIsIm5iZiI6MTczMjIxMjQ0MS44MzIyMDU4LCJzdWIiOiI2NzNmNzVhYjIxZGE0Mjk2N2ZjNDk5OTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wQ19OOLbVngmKank3XbQHpjgG8lO99GhsnMORvDLn94'
      }
    };

    fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
      .then(res => res.json())
      .then(res => setMovies(res.results))
      .catch(err => console.error(err));
  }, [])

  return (
    <>
      <Header />
      <Main movies={movies} />
      <Footer />
    </>
  )
}

export default App
