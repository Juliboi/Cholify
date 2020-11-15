import React, { useEffect, useState } from 'react';
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
  const [included, setIncluded] = useState(false);

  useEffect(() => {
    if (
      foodState.some((food) => {
        return food.title === title;
      })
    ) {
      console.log('no');
      setIncluded(true);
    } else {
      setIncluded(false);
      console.log('yes');
    }

    console.log(foodState);
  }, []);

  const handleInclude = () => {
    if (!included) {
      setIncluded(true);
      setFoodState([...foodState, { title, nutrition, imgSrc, grammage: 0 }]);
    } else {
      let index = foodState.findIndex((food) => food.title === title);
      foodState.splice(index, 1);
      setIncluded(false);
    }
  };

  return (
    <Card className='food-card'>
      <CardActionArea onClick={() => handleInclude()}>
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
          {included && <CheckCircleIcon className={classes.checkMark} />}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Info
        </Button>
        <Button size='small' color='primary' onClick={() => handleInclude()}>
          {included ? 'Odebrat' : 'Přidat'}
        </Button>
      </CardActions>
    </Card>
  );
};
