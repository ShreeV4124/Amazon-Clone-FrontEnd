import { cart } from "./cart.js";

export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
    orders.unshift(order);
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('orders', JSON.stringify(orders));
}

function allOrders(){
    for(let i=0; i<cart.size;i++){
        console.log(cart.productId);
    }
}
allOrders();