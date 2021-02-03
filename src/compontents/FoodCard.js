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
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useManageFoodState, useFoodStateHelpers } from '../hooks';

const useStyles = makeStyles((theme) => ({
  checkMark: {
    width: '1.3rem',
    height: '1.3rem',
    color: '#1976d2',
    marginLeft: '1rem',
  },
  fitImage: {
    objectFit: 'contain',
  },
}));

export const FoodCard = ({ title, imgSrc, nutrition }) => {
  const { isFoodAvailable } = useFoodStateHelpers(title);
  const { addFoodToState, removeFoodFromState } = useManageFoodState(
    title,
    imgSrc,
    nutrition
  );
  const [included, setIncluded] = useState(false);
  const classes = useStyles();

  const handeFoodInclude = () => {
    if (!included) {
      setIncluded(true);
      addFoodToState();
    } else {
      setIncluded(false);
      removeFoodFromState();
    }
  };

  useEffect(() => {
    isFoodAvailable() ? setIncluded(true) : setIncluded(false);
  }, []);

  return (
    <Card className='food-card'>
      <CardActionArea onClick={() => handeFoodInclude()}>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='140'
          image={imgSrc}
          title='Contemplative Reptile'
          className={classes.fitImage}
        />
        <CardContent className='food-card__content'>
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
        <Button
          size='small'
          variant='contained'
          color={included ? 'secondary' : 'primary'}
          onClick={() => handeFoodInclude()}
        >
          {included ? 'Odebrat' : 'Přidat'}
        </Button>
      </CardActions>
    </Card>
  );
};
