import { clearCart } from '../cart-utils.js';
import { jewelry } from '../Products/data.js';
const stringyCart = localStorage.getItem('CART');
const cart = JSON.parse(stringyCart);
const button = document.getElementById('p-button');
const homeButton = document.getElementById('home');


import { findByID, calcItemTotal, calcTotalOrder } from '../utils.js';
import { renderCart } from './render-cart-items.js';

const table = document.querySelector('table');
const orderTotal = calcTotalOrder(cart, jewelry);

if (!cart[0]) {
    button.disabled = true;
}



for (let item of cart) {

    const jewels = findByID(item.id, jewelry);

    let quantity = item.quantity;

    calcItemTotal(quantity, jewels.price);

    orderTotal;

    const tableRow = renderCart(item, jewels);

    table.append(tableRow);
}



const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = `Order total: $${orderTotal}`;

tr.append(td1, td2, td3);

table.append(tr);



button.addEventListener('click', () => {

    alert(JSON.stringify(cart, true, 2));

    clearCart();

    button.disabled = true;
});

homeButton.addEventListener('click', () => {
    window.location.replace('../index.html');

});



