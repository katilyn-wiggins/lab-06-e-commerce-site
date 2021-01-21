// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderJewelry } from '../Products/renderJewelry.js';
import { findByID, calcItemTotal } from '../utils.js';
import { renderCart } from '../cart/render-cart-items.js';

const test = QUnit.test;

test('should take in a jewelry item and return an li', (expect) => {
    //Arrange
    const pieceOne = {
        id: 1,
        name: 'ember',
        description: 'hand chiseled antique japanese teacup piece set in sterling silver',
        price: 60,
        image: 'j.png',
        size: 'small',
        weight: '3 grams',
        stone: 'turquise',
    };
    // Set up your arguments and expectations
    const expected = `<li class="jewelry-item"><h3 class="jewelry-name">ember</h3><img class="jewelery-image" src="../assets/j.png"><p class="jewelry-description">hand chiseled antique japanese teacup piece set in sterling silver</p><p class="jewelry-price">$60</p><p class="jewelry-size">small</p><p class="jewelry-weight">3 grams</p><p class="jewelry-stone">turquise</p><button>add to cart</button></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderJewelry(pieceOne);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('the function findByID should take in a quantity and a price and return a product of the two', (expect) => {
    //Arrange

    const pieceOne = [{
        id: 1,
        name: 'ember',
        description: 'hand chiseled antique japanese teacup piece set in sterling silver',
        price: 60,
        image: 'j.png',
        size: 'small',
        weight: '3 grams',
        stone: 'turquise',
    }];

    // Set up your arguments and expectations
    const expected = {
        id: 1,
        name: 'ember',
        description: 'hand chiseled antique japanese teacup piece set in sterling silver',
        price: 60,
        image: 'j.png',
        size: 'small',
        weight: '3 grams',
        stone: 'turquise',
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findByID(1, pieceOne);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('the function calcItemTotal should take in a quantity and a price and return a product of the two', (expect) => {
    //Arrange
    const shoppingCart =
    {
        id: 1,
        quantity: 4,
    };

    const pieceOne = {
        id: 1,
        name: 'ember',
        description: 'hand chiseled antique japanese teacup piece set in sterling silver',
        price: 60,
        image: 'j.png',
        size: 'small',
        weight: '3 grams',
        stone: 'turquise',
    };

    let quantity = shoppingCart.quantity;
    let price = pieceOne.price;
    // Set up your arguments and expectations
    const expected = 240;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(quantity, price);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('the function renderCartItems should take in an object and display it as a table row', (expect) => {
    //Arrange
    const shoppingCart =
    {
        id: 1,
        quantity: 4,
    };

    const pieceOne = {
        id: 1,
        name: 'ember',
        description: 'hand chiseled antique japanese teacup piece set in sterling silver',
        price: 60,
        image: 'j.png',
        size: 'small',
        weight: '3 grams',
        stone: 'turquise',
    };

    // Set up your arguments and expectations
    const expected = '<tr class=\"table-row\"><td class=\"item-name\">ember</td><td class=\"item-quantity\">4</td><td class=\"item-total-price\">240</td></tr>';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCart(shoppingCart, pieceOne);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});



