import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { MyProfileChange } from './MyProfileChange';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1.5rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export function MenuCard({ setFoodState, title, category, nutrition, imgSrc }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component='h6' variant='h6'>
            {title}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {category}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <MyProfileChange />
        </div>
      </div>
      <CardMedia className={classes.cover} image={imgSrc} title='' />
    </Card>
  );
}
