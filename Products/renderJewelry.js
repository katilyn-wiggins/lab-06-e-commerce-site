export function renderJewelry(jewelry) {
    const list = document.createElement('li');
    list.classList.add('jewelry-item');

    const h3 = document.createElement('h3');
    h3.classList.add('jewelry-name');
    h3.textContent = jewelry.name;
    list.append.h3;

    const img = document.createElement('img');
    img.classList.add('jewelery-image');
    list.append.img;
    img.src = `../assets/`;




    return list;
}