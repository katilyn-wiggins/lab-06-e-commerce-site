import { jewelry } from './data.js';
import { renderJewelry } from './renderJewelry.js';

const list = document.getElementById('list');

for (let jewel of jewelry) {
    const jewelryItem = renderJewelry(jewel);

    list.append(jewelryItem);
}

