import { jewelry } from '../Products/data.js';
import { cart } from './cart-data.js';

import { findByID, calcItemTotal } from '../utils.js';
import { renderCart } from './render-cart-items.js';

const table = document.querySelector('table');

let total = 0;

for (let item of cart) {

    const jewels = findByID(item.id, jewelry);

    const totalForThisItem = calcItemTotal(cart.amount, jewels.price);

    total = total + totalForThisItem;

    const tableRow = renderCart(cart, jewels);

    table.append(tableRow);
}


const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = `Order total: $${total}`;

tr.append(td1, td2, td3);

table.append(tr); 