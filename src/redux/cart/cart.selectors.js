import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems
        .map(cartItem => cartItem.quantity)
        .reduce((acc, quantity) => acc + quantity, 0)
);

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    cartItems => cartItems
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
);