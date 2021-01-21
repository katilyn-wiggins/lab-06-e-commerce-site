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
