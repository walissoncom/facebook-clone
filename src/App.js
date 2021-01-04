import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Contacts from './components/Contacts/Contacts';

import { useStateValue } from './StateContext';

import './App.css';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">

      {!user ? (
        <Login />
      ) : (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              <Feed />
              <Contacts />
            </div>
          </>
        )}
    </div>
  );
}

export default App;
