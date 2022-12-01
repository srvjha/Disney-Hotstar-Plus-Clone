import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Login from "./components/Login";
import Header from "./components/Header";
import './App.css';
import Tv from './components/Tv';
import Detail from './components/Detail';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
      <Switch>
       <Route exact path="/">
        <Login />
       </Route>
       <Route exact path="/tv">
        <Tv/>
        </Route>
        <Route path='/detail/:id'>
          <Detail/>
       </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
