import './App.css';
import Homescreen from './Component/Homescreen';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Banner from './Component/Banner';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Homescreen/>
      <Footer/>
    </div>
  );
}

export default App;
