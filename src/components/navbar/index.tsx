import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Grid from '@mui/material/Grid';
import useStyles from './styles';
import logo from '../../assets/images/logo.svg';
import Container from '@mui/material/Container';

export default function Navbar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1, }} mt={10} >
      <AppBar position="absolute" elevation={0} className={classes.root}  >
      <Container maxWidth="xl" className={classes.container}>
        <Toolbar className={classes.root} >
          <Grid container maxWidth="xl" className={classes.app} >
            <img src={logo} alt="sensedia" />
          </Grid>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

{/* <AppBar position="static">
<Container maxWidth="xl">
    <Toolbar>
        Logo
    </Toolbar>
</Container>
</AppBar> */}