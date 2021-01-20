export function findByID(id, array) {

    for (let item of array) {

        if (array.id === id); {

            return item;

        }
    }
}

export function calcItemTotal(quantity, price) {
    let mathFunction = (quantity * price);

    return mathFunction;
}