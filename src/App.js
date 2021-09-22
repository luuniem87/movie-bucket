
import './App.scss';
import SeriesMain from './components/SeriesMain';
import Navigation
 from './components/Navigation';
function App() {
  return (
    <div className="App">
      <div className="body-wrapper">
      <Navigation/>
        <SeriesMain/>
      </div>
        
    </div>
  );
}

export default App;
