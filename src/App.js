import './App.css';
import Row from './Component/Row';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Banner from './Component/Banner';
import requests from './Requests';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <Banner/>
      <Row 
        title = 'NETFLIX ORIGINAL'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title = 'Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title = 'Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title = 'Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title = 'Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title = 'Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title = 'Documentaries' fetchUrl={requests.fetchDocumentaries} />
      <Footer/>
    </div>
  );
}

export default App;
