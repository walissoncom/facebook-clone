import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Contacts from './components/Contacts/Contacts';

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
              <Header />

              <Switch>

                <Route exact path="/">
                  <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <Contacts />
                  </div>
                </Route>

                <Route path="/news">
                  <h1>News</h1>
                </Route>
              </Switch>
            </>
          )}
      </Router>
    </div>
  );
}

export default App;
