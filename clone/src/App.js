import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Circuits from './components/Pages/circuits';
import Drivers from './components/Pages/drivers';
import Constructors from './components/Pages/constructors';
import Seasons from './components/Pages/seasons';
import Home from './components/Pages/home';
import Footer from './components/layout/footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/circuits" component={Circuits} />
          <Route path="/drivers" component={Drivers} />
          <Route path="/seasons" component={Seasons} />
          <Route path="/constructors" component={Constructors} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
