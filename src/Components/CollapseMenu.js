import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Search from './SearchComponent';

const useStyles = makeStyles(() => ({
  icon: {
    position: 'absolute',
    top: '63px',
    right: '128px',
    width: '24px',
    height: 'auto',
    padding: '2px 0',
    cursor: 'pointer',
    zIndex: '1',
  },
  bar: {
    width: '100%',
    height: '2px',
    background: 'black',
    marginBottom: '5px',
    transition: '0.3s',
  },
  bar1: {
    transform: 'rotate(-45deg) translate(-9px, 6px)',
    transition: '0.3s',
  },
  bar2: {
    opacity: '0',
    transition: '0.3s',
  },
  bar3: {
    transform: 'rotate(45deg) translate(-4px, -2px)',
    transition: '0.3s',
  },
  menu: {
    float: 'right',
    padding: '5px 0',
    color: 'red',
    fontSize: '16px',
    transition: '0.3s',
    right: '236px',
    top: '61px',
    position: 'absolute',
    zIndex: '1',
    '& a': {
      '&:hover': {
        color: '#fff',
      },
    },
  },
  menuList: {
    padding: '0 30px',
    cursor: 'pointer',
    '& a': {
      textDecoration: 'none',
      color: '#fff',
    },
  },
  menuActive: {
    opacity: '1',
    display: 'flex',
    listStyle: 'none',
    margin: '0',
  },
  menuInactive: {
    opacity: '0',
    display: 'none',
  },
  '@media (max-width: 1024px)': {
    root: {
      display: 'block',
    },
    menu: {
      right: '0',
      color: '#2E2D37',
      fontWeight: '500',
    },
    icon: {
      top: '24px',
      left: '21px',
    },
    menuActive: {
      display: 'block',
      width: '100%',
      height: '100vh',
      background: '#fff',
      zIndex: '10',
    },
    menuList: {
      padding: '0',
      '& a': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        background: '#0277BD',
        height: '80px',
        width: '100%',
        borderBottom: '0.5px solid #DFDFDF',
        '&:hover': {
          subMenu: {
            display: 'block',
          },
        },
      },
    },
  },
}));

const CollapseMenu = ({ className }) => {
  const classes = useStyles();
  const [collapse, setCollapse] = useState(false);

  const menu = [
    {
      label: 'Entrar',
      to: '/',
    },
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
    <div className={`${classes.root} ${className}`}>
      <ul
        className={
          collapse
            ? `${classes.menu} ${classes.menuActive}`
            : `${classes.menu} ${classes.menuInactive}`
        }
      >
        {menu.map((menuItem) => (
          <li key={menuItem.label} className={classes.menuList}>
            <Link to={menuItem.to} onClick={() => setCollapse(false)}>
              {menuItem.label.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className={classes.icon}
        onClick={() => setCollapse(!collapse)}
        aria-hidden="true"
      >
        <div
          className={collapse ? `${classes.bar} ${classes.bar1}` : classes.bar}
        />
        <div
          className={collapse ? `${classes.bar} ${classes.bar2}` : classes.bar}
        />
        <div
          className={collapse ? `${classes.bar} ${classes.bar3}` : classes.bar}
        />
      </div>
    </div>
  );
};

export default CollapseMenu;
