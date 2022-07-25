import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';
import { Actors, MovieInformation, Movies, Navbar, Profile } from './index';
function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/">
            <Movies />
          </Route>

          <Route exact path="/movies/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors></Actors>{' '}
          </Route>
          <Route exact path="/profile/:id">
            <Profile></Profile>{' '}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
