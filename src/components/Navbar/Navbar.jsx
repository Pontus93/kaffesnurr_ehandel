import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo.png';
import useStyles from './styles';

const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>

      {/* Title */}
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h4" fontWeight="bold" className={classes.title} color="inherit">
            <img src={logo} alt="kaffesnurr.se" height="25px" className={classes.image} /> Kaffesnurr.se
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            {/* BUTIK-BTN */}
            {location.pathname === '/' && (
              <Typography component={Link} to="/products" variant="h5" textDecorationLine="underline" color="inherit">
                BUTIK
              </Typography>
            )}

            {/* CART-BTN */}
          </div>
          {location.pathname === '/products' && (
            <div className={classes.button}>
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart fontSize="large" />
                </Badge>
              </IconButton>
            </div>
          )}

          {/* ARROW(return)-BTN */}
          {location.pathname === '/cart' && (
            <IconButton component={Link} to="/products" color="inherit">
              <Badge>
                <ArrowBackIcon fontSize="large" />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
