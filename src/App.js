import './App.css';
import Row from './Components/Row';
import requests from './request';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row text="Netflix Orinals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row text="Trending now" fetchUrl={requests.fetchTrending} />
      <Row text="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row text="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row text="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row text="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row text="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row text="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
