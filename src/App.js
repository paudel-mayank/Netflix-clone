import Row from './components/Row';
import './App.css'
import Navbar from './components/Navbar';

import requests from './requests';
import Banner from './components/banner';
function App() {
  return (
    <div className="app">
      <Navbar />

      <Banner />

      <Row title='NETFLIX ORIGINALs' isLargeRow='true' fetchURL={requests.fetchNetflixOriginals} />
      <Row title="Trending Movies" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fectchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fectchComedyMovies} />
      <Row title="Horror MOvies" fetchURL={requests.fetchHorrormovies} />
      <Row title="Romance MOvies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
