import { calcItemTotal } from '../utils.js';

export function renderCart(cart, jewelry) {


    const tableRow = document.createElement('tr');
    tableRow.classList.add('table-row');

    const itemName = document.createElement('td');
    itemName.classList.add('item-name');
    itemName.textContent = jewelry.name;

    const itemQuantity = document.createElement('td');
    itemQuantity.classList.add('item-quantity');
    itemQuantity.textContent = cart.amount;

    // shoppingCart.quantity

    const itemTotalPrice = document.createElement('td');
    itemTotalPrice.classList.add('item-total-price');
    itemTotalPrice.textContent = calcItemTotal(cart.amount, jewelry.price);

    tableRow.append(itemName, itemQuantity, itemTotalPrice);
    return tableRow;
}





