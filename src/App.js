// import logo from './logo.svg';
import { Container, AppBar, Grid, Grow, Typography } from '@material-ui/core';
// import { mergeClasses } from '@material-ui/styles';

import Student from './components/showStudent/showStudent.js';
import CreateStudent from './components/createStudent/createStudent.js';
import './App.css';
import useStyles from './style.js';
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      {/* <h1>Show please!!</h1> */}
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color='inherit'>
            <Typography className={classes.heading} variant="h2" align="center">Students Create & Show</Typography>
        </AppBar>

    <Grow in>
          <Container>
              <Grid container justify="space-between" alignItems="strect">
                  <Grid item xs={12} sm={7}>
                  <AppBar className={classes.appBar} position="static" color='inherit'>
                    <Student />
                  </AppBar>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                  <AppBar className={classes.appBar} position="static" color='inherit'>
                    <CreateStudent />
                  </AppBar>
                  </Grid>
              </Grid>
          </Container>
    </Grow>
      </Container>
      </div>
  );
}

export default App;
