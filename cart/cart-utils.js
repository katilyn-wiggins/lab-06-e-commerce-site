const CART = 'CART';
const defaultEmptyCart = [];
import { findByID } from '../utils.js';


//displays to user what is currently in their cart 

export function getCart() {
    const stringyCart = localStorage.getItem(CART);

    if (stringyCart) {
        const parsedCart = JSON.parse(stringyCart);

        return parsedCart;
    }
    else {
        const stringyDefaultCart = JSON.stringify(defaultEmptyCart);

        localStorage.setItem(CART, stringyDefaultCart);

        return defaultEmptyCart;
    }
}

//clears user cart completely
export function clearCart() {
    const emptyTheCart = JSON.stringify(defaultEmptyCart);

    localStorage.setItem(CART, emptyTheCart);
}


//putting item into cart (from cart on computer to cart in local storage)
export function setCart(cart) {
    const startACart = JSON.stringify(cart);

    localStorage.setItem(CART, startACart);
}


//adds to an existing cart
export function addToCart(id) {
    const cart = getCart;

    //determines if the new item matches an item that is already in the cart     
    const cartItem = findByID(id, cart);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        const newItem = {
            id: id,
            quantity: 1

        };

        cart.push(newItem);
    }
    setCart(cart);
}