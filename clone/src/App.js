import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Circuits from './components/Pages/circuits';
import Drivers from './components/Pages/drivers';
import Constructors from './components/Pages/constructors';
import Home from './components/Pages/home';
import Footer from './components/layout/footer';
import RaceResults from './components/Pages/raceResults';
import Results from './components/results Dashboard/results';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/circuits" component={Circuits} />
          <Route path="/drivers" component={Drivers} />
          <Route path="/race_results" component={RaceResults} />
          <Route path="/constructors" component={Constructors} />
          <Route path="/results/:year/:round/:totalRound" component={Results} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
