import React from 'react';
import { makeStyles, TextField, Button } from '@material-ui/core';
import { FlightTakeoff, FlightLand } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',

    },
  },
}));

const Search = () => {
  const classes = useStyles();


  return (


    <div className={classes.root} style={{ display: 'flex', justifyContent: 'center' }} >

      <TextField
        id="outlined-secondary"
        label="Origem"
        variant="outlined"
        color="secondary"
      />



      <FlightTakeoff style={{ fontSize: 40, width: 40 }} />
      <TextField style={{ fontSize: 10, }}
        id="date"
        label="Data Ida"
        type="date"
        defaultValue={Date.now}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />



      <TextField
        id="outlined-secondary"
        label="Destino"
        variant="outlined"
        color="secondary"
      />


      <FlightLand style={{ fontSize: 40, width: 40 }} />
      <TextField
        id="date"
        label="Data Volta"
        type="date"
        defaultValue={Date.now}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Button
        variant="contained"
        color="primary"
        size="large"
      >Pesquisar
      </Button>

    </div>



  );
};

export default Search;
