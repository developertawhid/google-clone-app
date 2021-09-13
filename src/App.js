import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search/:input">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
