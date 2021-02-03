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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles((theme) => ({
  details: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  cover: {
    width: 45,
    height: 45,
    backgroundSize: 'contain',
    marginLeft: '30px',
    marginRight: '10px',
    color: '#43a047',
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

export const MenuItemCard = ({ name, items }) => {
  const [included, setIncluded] = useState(false);
  const classes = useStyles();

  const handeFoodInclude = () => {
    if (!included) {
      setIncluded(true);
    } else {
      setIncluded(false);
    }
  };

  useEffect(() => {
    // isFoodAvailable() ? setIncluded(true) : setIncluded(false);
  }, []);

  return (
    <Card className='menu-card'>
      <div className={classes.details}>
        <MenuBookIcon className={classes.cover} />

        <CardContent className={classes.content}>
          <Typography component='h6' variant='h6'>
            {name}
          </Typography>
          <Button variant='contained' color='secondary'>
            <DeleteForeverIcon />
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};
