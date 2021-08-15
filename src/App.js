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
  var d = new Date();
  var date = d.getDate();
  var day = d.getDay();
  var month = d.getMonth();
  if (day === 1 && +localStorage.date !== date && +localStorage.month !== month) {
    localStorage.clear();
    localStorage.setItem("date", date);
    localStorage.setItem("month", month);
    console.log("its monday Date is reset");
  }
  else if (day !== 1 && (+localStorage.date !== date || +localStorage.month !== month)) {
    localStorage.setItem("date", date);
    localStorage.setItem("month", month);
    console.log("not monday, date is reset", +localStorage.getItem("date"), +localStorage.getItem("month") + 1)
  }
  else {
    console.log("local Storage up to date", +localStorage.getItem("date"), +localStorage.getItem("month") + 1)
  }
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
        <img id="bottomImg" src="/Assets/img/car.png" alt="car" />
        <Footer />
        <div id="bottom"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
