import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@material-ui/core';
import { GrammageModal } from './GrammageModal';
import { useManageFoodState } from '../hooks/useManageFoodState.js';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import TuneIcon from '@material-ui/icons/Tune';

const useStyles = makeStyles((theme) => ({
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    backgroundSize: 'contain',
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

export function MenuCard({ title, category, grammage, imgSrc }) {
  const classes = useStyles();
  const { removeFoodFromState } = useManageFoodState(title);

  return (
    <Card className='menu-card'>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component='h6' variant='h6'>
            {title}
          </Typography>
          <Typography className='grammage-text' component='h6' variant='h6'>
            {`${grammage.value} ${grammage.unit}`}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {category}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <GrammageModal title={title} content={<TuneIcon />} />
          <Button
            variant='contained'
            color='secondary'
            onClick={removeFoodFromState}
          >
            <DeleteForeverIcon />
          </Button>
        </div>
      </div>
      <CardMedia className={classes.cover} image={imgSrc} title='' />
    </Card>
  );
}
