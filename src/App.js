
import './App.scss';
import { Route } from 'react-router-dom';
import SeriesMain from './components/SeriesMain';
import Movie from './components/Movie';
import Navigation
 from './components/Navigation';
function App() {
  return (
    <div className="App">
      <Navigation/>
   <main className="main-container">
   <div className="body-wrapper">
      <Route path="/series">
        <SeriesMain/>
      </Route>
      <Route path="/movies">
        <Movie/>
      </Route>
      </div>
   </main>


        
    </div>
  );
}

export default App;
