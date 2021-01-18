import Login from './components/Login/Login';
import Home from './pages/Home/Home';
import News from './pages/News/News';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { useStateValue } from './StateContext';

import './App.css';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>

        {!user ? (
          <Login />
        ) : (
            <>
              <Switch>

                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/news">
                  <News />
                </Route>

              </Switch>
            </>
          )}
      </Router>
    </div>
  );
}

export default App;
