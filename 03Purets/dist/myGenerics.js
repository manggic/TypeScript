"use strict";
const count = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// Type is dynamic here, it can be T, H or A
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
identityFour({ brand: 'brand', type: 'type' });
function getSearchProduct(products) {
    return products[3];
}
const getSearchProductN = (products) => {
    return products[1];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
