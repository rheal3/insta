import React from 'react';
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Recipes from './components/Recipes/Recipes'
// import useStyles from './styles';

// const App = () => {
//     const classes = useStyles();
//     return (
//         <Container maxwidth="lg">
//             <AppBar className={classes.appBar} position="static" color="inherit">
//                 <Typography className={classes.heading} variant="h2" align="center">recipes from @fitgreenmind</Typography>
//             </AppBar>
//             <Grow in>
//                 <Container>
//                     <Grid container justify="space-between" alignItems="stretch" spacing={3}>
//                         <Grid item xs={12} sm={7}>
//                             <Recipes />
//                         </Grid>
//                     </Grid>
//                 </Container>
//             </Grow>
//         </Container>
        
//     )
// }

// export default App;


function App() {
  return (
    <div className="App">

      <Recipes />
    </div>
  );
}

export default App;