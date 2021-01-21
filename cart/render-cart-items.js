import { calcItemTotal } from '../utils.js';

export function renderCart(shoppingCart, jewelry) {
    let quantity = shoppingCart.quantity;

    const tableRow = document.createElement('tr');
    tableRow.classList.add('table-row');

    const itemName = document.createElement('td');
    itemName.classList.add('item-name');
    itemName.textContent = jewelry.name;

    const itemQuantity = document.createElement('td');
    itemQuantity.classList.add('item-quantity');
    itemQuantity.textContent = quantity;

    const itemTotalPrice = document.createElement('td');
    itemTotalPrice.classList.add('item-total-price');
    itemTotalPrice.textContent = calcItemTotal(quantity, jewelry.price);

    tableRow.append(itemName, itemQuantity, itemTotalPrice);
    return tableRow;
}





