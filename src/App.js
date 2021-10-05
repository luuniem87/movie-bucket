
import './App.scss';
import { Route } from 'react-router-dom';
import SeriesMain from './components/Series/SeriesMain';
import MovieList from './components/Movies/MovieList';
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
        <MovieList/>
      </Route>
      </div>
   </main>


        
    </div>
  );
}

export default App;
