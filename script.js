// script.js
document.addEventListener('DOMContentLoaded', function() {
    const productsSection = document.getElementById('products');
    const categoryButtons = document.querySelectorAll('.category-btn');

    const products = {
        perfumes: [
           
            { name: 'عطر 1', image: 'images/parfan1.png', description: 'عطر رائع', price: '150 MAD' },
            { name: 'عطر 2', image: 'images/parfan2.png', description: 'عطر مميز', price: '200 MAD' },
            { name: 'عطر 3', image: 'images/parfan3.png', description: 'عطر مميز', price: '100 MAD' },
            { name: 'عطر 4', image: 'images/parfan4.png', description: 'عطر مميز', price: '200 MAD' },
            { name: 'عطر 5', image: 'images/parfan5.png', description: 'عطر مميز', price: '150 MAD' },
            { name: 'عطر 6', image: 'images/parfum6.png', description: 'عطر مميز', price: '150 MAD' },
            { name: 'عطر 7', image: 'images/parfum7.png', description: 'عطر مميز', price: '150 MAD' },
            { name: 'عطر 8', image: 'images/parfan8.png', description: 'عطر مميز', price: '50 MAD' },
            { name: 'عطر 9', image: 'images/parfan9.png', description: 'عطر مميز', price: '100 MAD' },
            { name: 'عطر 10', image: 'images/parfum10.png', description: 'عطر مميز', price: ' 150 MAD' },
            { name: 'عطر 11', image: 'images/parfum11.png', description: 'عطر مميز', price: '200 MAD' },
            { name: 'عطر 12', image: 'images/parfum12.png', description: 'عطر مميز', price: '200 MAD' },
            { name: 'عطر 13', image: 'images/parfum13.png', description: 'عطر مميز', price: '150 MAD' },
            { name: 'عطر 14', image: 'images/parfum14.png', description: 'عطر مميز', price: '200 MAD' },
            { name: 'عطر 15', image: 'images/parfum15.png', description: 'عطر مميز', price: '150 MAD' },
            { name: 'عطر 16', image: 'images/parfum16.png', description: 'عطر مميز', price: '250 MAD' },
            { name: 'عطر 17', image: 'images/parfum17.png', description: 'عطر مميز', price: '150 MAD' },
            { name: 'عطر 18', image: 'images/parfum18.png', description: 'عطر مميز', price: '300 MAD' },
            { name: 'عطر 19', image: 'images/parfum19.png', description: 'عطر مميز', price: '350 MAD' },
            { name: 'عطر 20', image: 'images/parfum20.png', description: 'عطر مميز', price: '200 MAD' },
            { name: 'عطر 21', image: 'images/parfum21.png', description: 'عطر مميز', price: '400 MAD' },
            { name: 'عطر 22', image: 'images/parfum22.png', description: 'عطر مميز', price: '50 MAD' },
            { name: 'عطر 23', image: 'images/parfum23.png', description: 'عطر مميز', price: '350 MAD' },
            { name: 'عطر 24', image: 'images/parfum24.png', description: 'عطر مميز', price: '200 MAD' },
            { name: 'عطر 25', image: 'images/parfum25.png', description: 'عطر مميز', price: '250 MAD' },
            { name: 'عطر 26', image: 'images/parfum26.png', description: 'عطر مميز', price: '400 MAD' },
            { name: 'عطر 27', image: 'images/parfum27.png', description: 'عطر مميز', price: '200 MAD' },
            { name: 'عطر 28', image: 'images/parfum28.png', description: 'عطر مميز', price: '70 MAD' },
            { name: 'عطر 29', image: 'images/parfum29.png', description: 'عطر مميز', price: '150 MAD' },
            { name: 'عطر 30', image: 'images/parfum30.png', description: 'عطر مميز', price: '300 MAD' },
            { name: 'عطر 31', image: 'images/parfum31.png', description: 'عطر مميز', price: '200 MAD' },
            { name: 'عطر 32', image: 'images/parfum32.png', description: 'عطر مميز', price: '150 MAD' },
            { name: 'عطر 33', image: 'images/parfum33.png', description: 'عطر مميز', price: '250 MAD' },
            { name: 'عطر 34', image: 'images/parfum34.png', description: 'عطر مميز', price: '300 MAD' },
            { name: 'عطر 35', image: 'images/parfum35.png', description: 'عطر مميز', price: '200 MAD' },
            { name: 'عطر 36', image: 'images/parfum36.png', description: 'عطر مميز', price: '150 MAD' },
            { name: 'عطر 37', image: 'images/parfum37.png', description: 'عطر مميز', price: '150 MAD' },
        ],
        clothes: [
            { name: '', image: 'images/nike1.png', description: '', price: '250 MAD' },
            { name: '', image: 'images/nike2.png', description: '', price: '200 MAD' },
            { name: '', image: 'images/nike3.png', description: '', price: '300 MAD' },
            { name: '', image: 'images/nike4.png', description: '', price: '200 MAD' },
            { name: '', image: 'images/nike5.png', description: '', price: '250 MAD' },
            { name: '', image: 'images/nike6.png', description: '', price: '100 MAD' },
            { name: '', image: 'images/nike7.png', description: '', price: '200 MAD' },
            { name: '', image: 'images/nike8.png', description: '', price: '250 MAD' },
            { name: '', image: 'images/nike9.png', description: '', price: '100 MAD' },
            { name: '', image: 'images/watch1.png', description: '', price: '300 MAD' },

          
        ],
        electronics: [
            { name: 'هاتف 1', image: 'images/iphone.png', description: 'iphone 16 pro max', price: '11500 MAD' },
            { name: '2 هاتف',  image: 'images/oneplus.png', description: 'one pluse', price: '8000 MAD' },
            { name: 'هاتف 3', image: 'images/samsung.png', description: 'samsung s24 ultra', price: '8500 MAD' },
        ],
    };

    function displayProducts(category) {
        productsSection.innerHTML = '';
        products[category].forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
                <button onclick="window.open('https://wa.me/+21299667557?text=أريد شراء ${product.name}')">شراء عبر واتساب</button> 
                `;
            productsSection.appendChild(productDiv);
        });
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            displayProducts(this.getAttribute('data-category'));
        });
    });
});