import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import logo from '../../assets/emptyCartGuy.jpeg';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();
  const handleEmptyCart = () => onEmptyCart();

  // Message if cart is empty.
  const renderEmptyCart = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Du har inga varor i din kundvagn,
      <Link className={classes.link} to="/products"> lägg till här</Link>!
    </Typography >

      </Grid >
      <Grid item xs={12}>
        <Typography variant="subtitle2">Är du redan nöjd så tackar jag för du kikat in hos oss!</Typography>
        <img src={logo} alt="kaffesnurr.se" height="250px" width="350px" style={{ marginTop: 15, opacity: 0.8, borderRadius: 20 }} />
      </Grid >
    </Grid>

  );

  if (!cart.line_items) return 'Loading';

  // Message if items in cart.
  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Totalt: {cart.subtotal.formatted}kr</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Rensa allt</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checka ut</Button>
        </div>
      </div>
    </>
  );

  // Title + either empty&items in cart.
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Din kundvagn</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
