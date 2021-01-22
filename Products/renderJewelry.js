import { addToCart } from '../cart-utils.js';


export function renderJewelry(jewelry) {

    const productList = document.createElement('li');
    productList.classList.add('jewelry-item');

    const h3 = document.createElement('h3');
    h3.classList.add('jewelry-name');
    h3.textContent = jewelry.name;
    productList.append(h3);

    const img = document.createElement('img');
    img.classList.add('jewelery-image');
    productList.append(img);
    img.src = `../assets/${jewelry.image}`;

    const pDescription = document.createElement('p');
    pDescription.classList.add('jewelry-description');
    pDescription.textContent = jewelry.description;
    productList.append(pDescription);

    const pPrice = document.createElement('p');
    pPrice.classList.add('jewelry-price');
    pPrice.textContent = `$${jewelry.price}`;
    productList.append(pPrice);

    const pSize = document.createElement('p');
    pSize.classList.add('jewelry-size');
    pSize.textContent = jewelry.size;
    productList.append(pSize);

    const pWeight = document.createElement('p');
    pWeight.classList.add('jewelry-weight');
    pWeight.textContent = jewelry.weight;
    productList.append(pWeight);

    const pStone = document.createElement('p');
    pStone.classList.add('jewelry-stone');
    pStone.textContent = jewelry.stone;
    productList.append(pStone);

    const dropDown = document.createElement('select');
    for (let index = 0; index < 6; index++) {
        const option = document.createElement('option');
        option.text = index;
        option.value = index;
        dropDown.appendChild(option);
    }
    productList.append(dropDown);


    const button = document.createElement('button');
    button.addEventListener('click', () => {
        const quantity = dropDown.value;
        console.log(quantity);
        addToCart(jewelry.id, quantity);
    });

    button.textContent = 'add to cart';
    productList.append(button);
    return productList;
}

