import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CollapseMenu from './CollapseMenu';
import { Logo } from './icon/Logo';

const useStyles = makeStyles(() => ({
  header: {
    height: '100px',
    background: '#ffffff 0% 0% no-repeat padding-box',
    padding: '26px 0px',
    borderBottom: '1px solid #E9ECEE',
    position: 'relative',
    '& a': {
      textDecoration: 'none',
      color: '#27272D',
      fontSize: '16px',
      transition: 'color 0.2s ease',
      '&:hover': {
        color: '#0277BD',
      },
    },
  },
  navigation: {
    '& a': {
      padding: '0 30px',
    },
  },
  signin: {
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#0277BD',
    },
  },
  collapseMenu: {
    display: 'none',
  },
  '@media (max-width: 1024px)': {
    header: {
      height: '64px',
      padding: '14px 14px 0 0',
      borderBottom: '1px solid #DFDFDF',
      '& .MuiGrid-root.MuiGrid-container.MuiGrid-align-items-xs-center.MuiGrid-justify-xs-flex-end': {
        display: 'none',
      },
    },
    collapseMenu: {
      display: 'block',
    },
    logo: {
      marginLeft: '90px',
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  const menu = [
    {
      label: 'Passagens',
      to: 'passagens',
    },
    {
      label: 'Canais de Atendimento',
      to: 'atendimento',
    },
    {
      label: 'Sobre a voe!',
      to: 'sobre',
    },
    {
      label: 'Ajuda',
      to: 'ajuda',
    },
  ];

  return (
    <header className={classes.header}>
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <CollapseMenu className={classes.collapseMenu} />

          <Grid item className={classes.logo}>
            <Link to="/">
              <Logo />
            </Link>
          </Grid>

          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              {menu.map((menuItem) => (
                <Grid key={menuItem.label} item className={classes.navigation}>
                  <Link to={menuItem.to}>{menuItem.label}</Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <Link to="/login">
            <p className={classes.signin}>Entrar</p>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;
