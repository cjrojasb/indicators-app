import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core';
import './App.css';

import Header from 'components/Header/Header';

import ListPage from 'views/ListPage/ListPage';
import ShowPage from 'views/ShowPage/ShowPage';

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
          <Route path='/list' component={ListPage} exact />
          <Route path='/list/:code' component={ShowPage} exact />
        </Router>
      </section>
    </>
  );
}

export default App;
