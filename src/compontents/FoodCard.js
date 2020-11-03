import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import { useFoodStateValue } from '../context/food-state';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  checkMark: {
    width: '1.3rem',
    height: '1.3rem',
    color: '#1976d2',
    marginLeft: '1rem',
  },
}));

export const FoodCard = ({ title, imgSrc, nutrition }) => {
  const classes = useStyles();
  const { foodState, setFoodState } = useFoodStateValue();

  const isIncluded = () => {
    if (foodState.some((food) => food.title === title)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Card className='food-card'>
      <CardActionArea
        onClick={() => {
          !isIncluded() &&
            setFoodState([...foodState, { title, nutrition, imgSrc }]);
        }}
      >
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='140'
          image={imgSrc}
          title='Contemplative Reptile'
        />
        <CardContent className={classes.flex}>
          <Typography variant='h6' component='h5'>
            {title}
          </Typography>
          {isIncluded() && <CheckCircleIcon className={classes.checkMark} />}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Info
        </Button>
        <Button size='small' color='primary'>
          Přidat
        </Button>
      </CardActions>
    </Card>
  );
};
