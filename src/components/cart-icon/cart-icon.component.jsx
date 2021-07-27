import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.component.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, numberOfItems }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{numberOfItems}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
    numberOfItems: cartItems
        .map(cartItem => cartItem.quantity)
        .reduce((prev, curr) => prev + curr, 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
