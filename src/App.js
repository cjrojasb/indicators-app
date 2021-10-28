import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/App/app';
import "./App.css";

import Header from 'components/Header/Header';

import ListPage from 'views/ListPage/ListPage';
import ShowPage from 'views/ShowPage/ShowPage';

const useStyles = makeStyles(styles);

function App() {
  const classes = useStyles();

  return (
    <section>
      <Header />
      <Router>
        <Route path='/list' component={ListPage} exact />
        <Route path='/list/:code' component={ShowPage} exact />
      </Router>
      {/* <Container className={classes.customApp}>
      </Container> */}
    </section>
  );
}

export default App;
