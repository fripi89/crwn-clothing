export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToAdd.id) {
                return { ...cartItem, quantity: cartItem.quantity + 1 }
            } else {
                return cartItem;
            }
        })
    } else {
        return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
    }
}

export const removeSingleItemFromCart = (cartItems, cartItemToRemove) => {
    if (cartItemToRemove.quantity == 1) {
        return removeItemFromCart(cartItems, cartItemToRemove);
    } else {
        return cartItems.map(cartItem => {
            if (cartItem.id === cartItemToRemove.id) {
                return { ...cartItem, quantity: cartItem.quantity - 1 }
            } else {
                return cartItem;
            }
        });
    }
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
}