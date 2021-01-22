// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderJewelry } from '../Products/renderJewelry.js';
import { findByID, calcItemTotal } from '../utils.js';
import { renderCart } from '../cart/render-cart-items.js';
import { getCart, clearCart, setCart } from '../cart-utils.js';

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
    const expected = `<li class=\"jewelry-item\"><h3 class=\"jewelry-name\">ember</h3><img class=\"jewelery-image\" src=\"../assets/j.png\"><p class=\"jewelry-description\">hand chiseled antique japanese teacup piece set in sterling silver</p><p class=\"jewelry-price\">$60</p><p class=\"jewelry-size\">small</p><p class=\"jewelry-weight\">3 grams</p><p class=\"jewelry-stone\">turquise</p><select><option value=\"0\">0</option><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option></select><button>add to cart</button></li>`;

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
    const cart =
    {
        id: 1,
        quantity: 4,
    };

    const jewelry = {
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
    const expected = '<tr class=\"table-row\"><td class=\"item-name\">ember</td><td class=\"item-quantity\">4</td><td class=\"item-total-price\">$240</td></tr>';
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCart(cart, jewelry);
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

//getCart 
test('getCart should get the correct cart from local storage', (expect) => {
    //Arrange
    const testCart = [
        {
            id: 1,
            amount: 4,
        },
        {
            id: 4,
            amount: 2,
        }
    ];

    const stringyCart = JSON.stringify(testCart);

    localStorage.setItem('CART', stringyCart);

    // Set up your arguments and expectations
    const cart = getCart();
    //Act 
    // Call the function you're testing and set the result to a const
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(cart, testCart);
});

//clearCart
test('clearCart should remove all items from the cart and add an empty array', (expect) => {
    //Arrange

    const testCart = [
        {
            id: 1,
            amount: 4,
        },
        {
            id: 4,
            amount: 2,
        }
    ];

    setCart(testCart);

    const expected = [];

    // Set up your arguments and expectations
    clearCart();

    const actual = getCart();

    //Act 
    // Call the function you're testing and set the result to a const
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);

});



//setCart
test('setCart should add item to cart', (expect) => {
    //Arrange
    const testCart = [
        {
            id: 1,
            amount: 4,
        },
        {
            id: 4,
            amount: 2,
        }
    ];

    setCart(testCart);

    const expected = testCart;


    // Set up your arguments and expectations
    const actual = getCart(testCart);
    //Act 
    // Call the function you're testing and set the result to a const
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});