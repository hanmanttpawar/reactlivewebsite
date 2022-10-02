import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

// app () -this is commponent and jsx return

function App() {
  return (
    <div className="App"> {/* class name object property*/}
      <Navbar/>
      <div className='title'>Explore Our Events</div>
      <Home/>
    </div>
  );
}

export default App;
