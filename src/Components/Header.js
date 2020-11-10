import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    border: '1px solid #E1E3E5',
    borderRadius: '0 0 10px 10px',
    borderTop: 'none',
    flexGrow: 1,
  },
  [theme.breakpoints.up('md')]: {
    root: {},
  },
}));

const Header = () => {
  const classes = useStyles();

  return <div className={classes.content}>Header</div>;
};

export default Header;
