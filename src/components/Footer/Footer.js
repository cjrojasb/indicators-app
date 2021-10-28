import React from 'react';
import {
  BottomNavigation,
  Box,
  Container,
  createStyles,
  Link,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(() =>
  createStyles({
    bottomNavigation: {
      alignItems: 'center',
      background: '#0079C8',
      bottom: '0',
      color: '#FFFFFF',
      display: 'flex',
      height: '75px',
      justifyContent: 'flex-start',
      width: '100%',
    },
    actionLink: {
      color: '#FFFFFF',
    },
  })
);

export default function Footer() {
  const classes = useStyles();
  return (
    <BottomNavigation className={classes.bottomNavigation}>
      <Container>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <Box>
            <IconButton
              aria-label='github'
              className={classes.actionLink}
              component={Link}
              href='https://github.com/cjrojasb/indicators-app'
              target='_blank'
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              aria-label='linkedin'
              className={classes.actionLink}
              component={Link}
              href='https://www.linkedin.com/in/carlos-javier-rojas-burgos-515207135/'
              target='_blank'
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Box display='flex' flexDirection='column'>
            <Typography variant='overline'>Carlos Rojas Burgos</Typography>
            <Typography variant='caption'>
              Copyright © Todos los derechos reservados
            </Typography>
          </Box>
        </Box>
      </Container>
    </BottomNavigation>
  );
}
