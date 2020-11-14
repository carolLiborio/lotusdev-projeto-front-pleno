import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { FacebookIcon } from './icon/Facebook';
import { InstagramIcon } from './icon/Instagram';
import { TwitterIcon } from './icon/Twitter';
import { YoutubeIcon } from './icon/Youtube';

const useStyles = makeStyles(() => ({
  '@global': {
    footer: {
      marginTop: '78px',
    },
    a: {
      textDecoration: 'none',
      color: '#616161',
    },
  },
  socialMedia: {
    padding: '34px 34px 12px',
    textAlign: 'center',
    color: '#616161',
  },
  bars: {
    width: '100%',
    borderBottom: '2px solid #C4C4C4',
  },
  about: {
    padding: '10px',
    color: '#616161',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <div className={classes.bars} />
      <Grid container alignItems="center" justify="center">
        <Grid item className={classes.socialMedia}>
          <Typography variant="h5" style={{ fontWeight: 700 }}>
            Siga a voe! nas redes sociais
          </Typography>
          <div style={{ display: 'flex' }}>
            <a href="https://www.facebook.com/">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
            <a href="https://www.twitter.com/">
              <TwitterIcon />
            </a>
            <a href="https://www.youtube.com/">
              <YoutubeIcon />
            </a>
          </div>
        </Grid>
        <div className={classes.bars} />
        <Grid item className={classes.about}>
          <Typography
            variant="h5"
            style={{ fontWeight: 700, paddingBottom: '10px' }}
          >
            <Link to="sobre">Sobre a voe!</Link>
          </Typography>
          <Typography
            variant="h5"
            style={{ fontWeight: 700, paddingBottom: '10px' }}
          >
            <Link to="atendimento">Canais de atendimento</Link>
          </Typography>
          <Typography
            variant="h5"
            style={{ fontWeight: 700, paddingBottom: '10px' }}
          >
            <Link to="ajuda">Ajuda</Link>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
