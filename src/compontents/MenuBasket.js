import React from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export function MenuBasket() {
  return (
    <IconButton aria-label='cart'>
      <StyledBadge badgeContent={4} color='secondary'>
        <ShoppingBasketIcon />
      </StyledBadge>
    </IconButton>
  );
}
