import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core';
import './App.css';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import ListPage from 'views/ListPage/ListPage';
import ShowPage from 'views/ShowPage/ShowPage';
import ErrorPage from 'views/ErrorPage/ErrorPage';

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      padding: '48px 0',
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <section className={classes.content}>
        <Router>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/list' />
            </Route>
            <Route path='/list' component={ListPage} exact />
            <Route path='/list/:code' component={ShowPage} exact />
            <Route path='*' component={ErrorPage} />
          </Switch>
        </Router>
      </section>
      <Footer />
    </>
  );
}

export default App;
