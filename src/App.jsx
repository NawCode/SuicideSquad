import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Cards from './components/Cards';
import NotFound from './pages/NotFound';
import Universe from './pages/UniversePage';
import Marvel from './pages/MarvelPage';
import DCComics from './pages/DCComicsPage';
import Starwars from './pages/StarWarsPage';
import Allstar from './pages/AllstarPage';
import Fight from './pages/Fight';
import HerosDetails from './pages/HerosDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/universe" component={Universe} />
          <Route path="/cards" component={Cards} />
          <Route path="/marvel" component={Marvel} />
          <Route path="/dccomics" component={DCComics} />
          <Route path="/starwars" component={Starwars} />
          <Route path="/allstar" component={Allstar} />
          <Route path="/fight" component={Fight} />
          <Route path="/heroes/:id" component={HerosDetails} />
          <Route path="" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
