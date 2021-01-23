export function findByID(id, array) {

    for (let item of array) {

        if (item.id === id) {
            return item;
        }
    }
}

export function calcItemTotal(price, amount) {
    return price * amount;
}





export function calcTotalOrder(cart, jewelry) {

    let orderTotal = 0;

    for (let item of cart) {

        const jewels = findByID(item.id, jewelry);

        const lineTotal = calcItemTotal(item.quantity, jewels.price);

        orderTotal += lineTotal;
    }
    return orderTotal;
}
