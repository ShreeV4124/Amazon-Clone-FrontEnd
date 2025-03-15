import { getProduct } from "./data/products.js";

document.addEventListener('DOMContentLoaded', () => {
    const productId = localStorage.getItem('trackingProductId');

    console.log("Retrieved Product ID from LocalStorage:", productId); // Debugging

    if (!productId) {
        console.error("Error: No tracking product found in LocalStorage.");
        return;
    }

    const product = getProduct(productId);

    if (!product) {
        console.error("Error: Product not found in products list.");
        return;
    }

    document.querySelector('.delivery-date').textContent = `Arriving on: August 15`;

    document.querySelector('.product-info').innerHTML = `
        <div>${product.name}</div>
        <div>Quantity: 1</div>
    `;

    document.querySelector('.product-image').src = product.image;
});