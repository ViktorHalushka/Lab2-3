
let products = [
    /* Фрукти */
    { id: 1, name: 'Quince', price: 158.50, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/aiva.webp' },
    { id: 2, name: 'Orange', price: 168.15, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/apelsin.webp' },
    { id: 3, name: 'Avocado', price: 143.00, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/avokado.webp' },
    { id: 4, name: 'Red orange', price: 150.55, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/apelsin-siciliya.webp' },
    { id: 5, name: 'Baby Banana', price: 243.90, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/banan-bebi.webp' },
    { id: 6, name: 'Grean Banana', price: 667.10, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/banan-planton.webp' },
    { id: 7, name: 'Gold Kivi', price: 182.15, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/kivi-gold.webp' },
    { id: 8, name: 'Kiwani', price: 541.12, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/kivano.webp' },
    { id: 9, name: 'Coconut', price: 175.34, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/kokos.webp' },
    { id: 10, name: 'Lychee', price: 143.20, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/lici.webp' },
    { id: 11, name: 'Mandarin', price: 193.30, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/mandarin.webp' },
    { id: 12, name: 'Mango', price: 93.80, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/mango.webp' },
    { id: 13, name: 'Pepino', price: 513.50, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/pepino.webp' },
    { id: 14, name: 'Red Pitaya', price: 683.15, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/pitaiya-cervona.webp' },
    { id: 15, name: 'Yellow Pitaya', price: 605.10, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/pitaiya-zovta.webp' },
    { id: 16, name: 'Cactus fruit', price: 192.15, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/plid-kaktusa.webp' },
    { id: 17, name: 'Strawberrie', price: 726.20, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/polunicya.webp' },
    { id: 18, name: 'Pamela', price: 213.70, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/pomelo.webp' },
    { id: 19, name: 'Persimmon', price: 187.20, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/xurma.webp' },
    { id: 20, name: 'Royal mango', price: 758.60, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/mango-korolivske.webp' },
    { id: 76, name: 'Pomelo red', price: 130.10, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/pomelo-cervone.webp' },
    { id: 77, name: 'Cranberries', price: 237.30, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/zuravlina.webp' },
    { id: 78, name: 'Santa Maria pear', price: 126.70, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/grusa-santa-mariya.webp' },
    { id: 79, name: 'Green grapes "Kish-mish"', price: 280.20, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/vinograd-zelenii-kis-mis.webp' },
    { id: 80, name: 'Persimmon goby', price: 143.80, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/xurma-bicok.webp' },
    { id: 81, name: 'Dark grapes', price: 162.90, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/vinograd-temnii-moldova.webp' },
    { id: 82, name: 'Cardinal grapes', price: 297.30, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/vinograd-kardina.webp' },
    { id: 83, name: 'Garnet', price: 183.40, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/granat.webp' },
    { id: 84, name: 'Kumquat', price: 542.40, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/kumkvat.webp' },
    { id: 85, name: 'Passion fruit', price: 666.60, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/pasion-frut.webp' },
    { id: 86, name: 'Tamarillo', price: 321.80, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/tamarilo.webp' },
    { id: 87, name: 'Salak', price: 270.78, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/salak.webp' },
    { id: 88, name: 'Peach', price: 143.20, category: 1, type: 'Fruits', image: 'Other/photo/photo_fruits/persik.webp' },


    /* Суіфофрукти */
    { id: 21, name: 'Goji berry', price: 670.20, category: 2, type: 'Dried fruits', image: 'Other/photo/photo_dried_fruits/yagoda.webp' },
    { id: 22, name: 'Candied mango', price: 310.50, category: 2, type: 'Dried fruits', image: 'Other/photo/photo_dried_fruits/cukati-mango.webp' },
    { id: 23, name: 'Candied pineapple', price: 310.56, category: 2, type: 'Dried fruits', image: 'Other/photo/photo_dried_fruits/cukati-ananas.webp' },
    { id: 24, name: 'Banana chips', price: 260.20, category: 2, type: 'Dried fruits', image: 'Other/photo/photo_dried_fruits/cipsi-banana.webp' },
    { id: 25, name: 'Smoked prunes', price: 130.80, category: 2, type: 'Dried fruits', image: 'Other/photo/photo_dried_fruits/cornosliv.webp' },
    { id: 26, name: 'Dark raisins', price: 121.00, category: 2, type: 'Dried fruits', image: 'Other/photo/photo_dried_fruits/izyum.webp' },

    /* Гриби */
    { id: 27, name: 'Eringa mushrooms', price: 484.10, category: 3, type: 'Mushrooms', image: 'Other/photo/photo_mushrooms/grib-eringi.webp' },
    { id: 28, name: 'Shimeji mushrooms', price: 612.30, category: 3, type: 'Mushrooms', image: 'Other/photo/photo_mushrooms/grib-simidzi.webp' },
    { id: 29, name: 'Champignon mushrooms', price: 116.20, category: 3, type: 'Mushrooms', image: 'Other/photo/photo_mushrooms/gribi-pecerici.webp' },
    { id: 30, name: 'Shiitake mushrooms', price: 210.14, category: 3, type: 'Mushrooms', image: 'Other/photo/photo_mushrooms/grib-siitaki.webp' },
    { id: 31, name: 'Enoki mushrooms', price: 340.25, category: 3, type: 'Mushrooms', image: 'Other/photo/photo_mushrooms/grib-enoki.webp' },
    { id: 32, name: 'Royal mushrooms', price: 540.00, category: 3, type: 'Mushrooms', image: 'Other/photo/photo_mushrooms/gribi-pecerici-korolivski.webp' },

    /* Зелень */
    { id: 34, name: 'Celery stalk', price: 137.90, category: 4, type: 'Herbs', image: 'Other/photo/photo_herbs/steblo.webp' },
    { id: 35, name: 'Green onions', price: 151.40, category: 4, type: 'Herbs', image: 'Other/photo/photo_herbs/cibulya.webp' },
    { id: 36, name: 'Radicchio salad', price: 248.60, category: 4, type: 'Herbs', image: 'Other/photo/photo_herbs/radicio.webp' },
    { id: 37, name: 'Chard (beetroot leaves)', price: 74.60, category: 4, type: 'Herbs', image: 'Other/photo/photo_herbs/mango.webp' },
    { id: 38, name: 'Spinach Ukraine', price: 339.00, category: 4, type: 'Herbs', image: 'Other/photo/photo_herbs/spinat.webp' },
    { id: 39, name: 'Green basil', price: 1060.20, category: 4, type: 'Herbs', image: 'Other/photo/photo_herbs/bazilik.webp' },
    { id: 40, name: 'Friese', price: 508.50, category: 4, type: 'Herbs', image: 'Other/photo/photo_herbs/frize.webp' },
    { id: 41, name: 'Baby Mix salad', price: 65.00, category: 4, type: 'Herbs', image: 'Other/photo/photo_herbs/bebi.webp' },
    { id: 42, name: 'Sorrel', price: 612.20, category: 4, type: 'Herbs', image: 'Other/photo/photo_herbs/shhavel.webp' },
    { id: 43, name: 'Boston', price: 565.00, category: 4, type: 'Herbs', image: 'Other/photo/photo_herbs/boston.webp' },
    { id: 44, name: 'Thyme', price: 522.10, category: 4, type: 'Herbs', image: 'Other/photo/photo_herbs/cebrec.webp' },
    { id: 45, name: 'Mint', price: 560.00, category: 4, type: 'Herbs', image: 'Other/photo/photo_herbs/myata.webp' },

    /* Овочі */
    { id: 46, name: 'Potatoes Granada ', price: 45.00, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/ka_g.webp' },
    { id: 47, name: 'Kapi pepper', price: 185.67, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/perec-kapi.webp' },
    { id: 48, name: 'Jalapeno peppers', price: 510.60, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/perec-xalapenyo.webp' },
    { id: 49, name: 'Cocktail tomato', price: 371.20, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/pomidor-koktelnii.webp' },
    { id: 50, name: 'Cheri', price: 292.10, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/cerri.webp' },
    { id: 51, name: 'Zucchini', price: 123.20, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/kabacok.webp' },
    { id: 52, name: 'Eggplant', price: 183.10, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/baklazan.webp' },
    { id: 53, name: 'Smooth cucumber', price: 180.20, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/ogirok-gladkii.webp' },
    { id: 54, name: 'Cucumber relay', price: 301.40, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/ogirok-estafeta.webp' },
    { id: 55, name: 'Large tomatoes', price: 179.90, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/cerri-velikii.webp' },
    { id: 56, name: 'Yellow pepper', price: 257.60, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/perec-zovtii.webp' },
    { id: 57, name: 'Prickly cucumber', price: 150.10, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/ogirok-kolyucii.webp' },
    { id: 58, name: 'Kumato tomato', price: 178.50, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/pomidor-kumato.webp' },
    { id: 59, name: 'Purple potatoes', price: 251.00, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/kartoplya-fioletova.webp' },
    { id: 60, name: 'Orange peppers', price: 231.40, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/perec-pomarancevii.webp' },
    { id: 61, name: 'Yellow cherry', price: 211.20, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/cerri-zovtii.webp' },
    { id: 62, name: 'Radish Red Mist', price: 78.80, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/redka-oko-drakona.webp' },
    { id: 63, name: 'Batat', price: 163.30, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/batat.webp' },
    { id: 64, name: 'Red chili peppers', price: 299.50, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/perec-cili.webp' },
    { id: 65, name: 'Zucchini', price: 165.70, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/cukini.webp' },
    { id: 66, name: 'Cherry mix', price: 159.90, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/cerri-miks.webp' },
    { id: 67, name: 'White onion', price: 118.70, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/cibulya-bila.webp' },
    { id: 68, name: 'White pepper', price: 173.40, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/perec-bilozerka.webp' },
    { id: 69, name: 'Pumpkin Chamomile', price: 39.40, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/garbuz-romaska.webp' },
    { id: 70, name: 'Parker cucumber', price: 368.80, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/ogirok-parker.webp' },
    { id: 71, name: 'Mini chili peppers', price: 121.10, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/perec-cili-mini.webp' },
    { id: 72, name: 'Purple carrots', price: 87.30, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/morkva-fioletova.webp' },
    { id: 73, name: 'Artichoke', price: 141.30, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/artisok.webp' },
    { id: 74, name: 'Green asparagus', price: 129.30, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/sparza-zelena.webp' },
    { id: 75, name: 'Yellow zucchini', price: 113.90, category: 5, type: 'Vegetables', image: 'Other/photo/photo_vegetables/cukini-zovtii.webp' },
]

function loadProducts(category) {
    let list = document.getElementById('produc-list');
    let productElements = '';
    let productsFiltered;
    if (category) {
        productsFiltered = products.filter(elem => elem.category === category);
    } else {
        productsFiltered = products;
    }

    productsFiltered.forEach(elem => {
        let li = `<li class="mini-boxin">
        <image src="${elem.image}" class="img-shop"/> 
        <div class="mini-boxin-info">
        <h2>${elem.name}</h2> 
        <p>Category: ${elem.type}</p>
        <p class="price">${elem.price}</p>
        <button class="addtobag" data-name="${elem.name}" data-price="${elem.price}">Дадати у кошик</button>  
        </div>
        </li>`;
        productElements += li;
    });
    list.innerHTML = productElements;

    // Перевіряємо, чи є кнопки "ADD TO BAG" на сторінці та призначаємо їм обробник подій
    const addToBagButtons = document.querySelectorAll(".addtobag");
    addToBagButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productName = this.dataset.name;
            const productPrice = parseFloat(this.dataset.price);
            const quantity = 1; // Початкова кількість товару

            // Створення об'єкта товару
            const product = {
                name: productName,
                price: productPrice,
                quantity: quantity
            };

            // Додавання товару до списку у кошику
            addProductToCart(product);
        });
    });
}


loadProducts();

// Отримуємо елементи
const openModalBtn = document.getElementById("openModal");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementsByClassName("close")[0];
const orderButton = document.getElementById("orderButton");
const cartItemsContainer = document.getElementById("cart-items");

// Відкриття модального вікна
openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
});

// Закриття модального вікна
closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// Клік за межами модального вікна, щоб закрити його
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Розрахунок загальної суми замовлення
function calculateTotal() {
    const cartItems = document.querySelectorAll(".cart-item");
    let total = 0;

    cartItems.forEach(function (item) {
        const itemPrice = parseFloat(item.querySelector(".item-price").textContent);
        const quantity = parseInt(item.querySelector(".quantity-value").textContent);
        const itemTotal = itemPrice * quantity;
        item.querySelector(".item-total").textContent = `${itemTotal.toFixed(2)}`;
        total += itemTotal;
    });

    document.getElementById("total").textContent = `Загальна сума: ${total.toFixed(2)}`;
}

// Обробник кнопки замовлення
orderButton.addEventListener("click", function () {
    // Ваш код для обробки замовлення тут
});

// Додавання обробника подій для кнопок "+" та "-"
cartItemsContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("increase-btn")) {
        increaseQuantity(event.target);
    } else if (event.target.classList.contains("decrease-btn")) {
        decreaseQuantity(event.target);
    } else if (event.target.classList.contains("remove-btn")) {
        removeCartItem(event.target);
    }
});

// Функція для збільшення кількості товару на 1
function increaseQuantity(button) {
    const quantityElement = button.parentElement.querySelector(".quantity-value");
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    calculateTotal();
}

// Функція для зменшення кількості товару на 1
function decreaseQuantity(button) {
    const quantityElement = button.parentElement.querySelector(".quantity-value");
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
        calculateTotal();
    }
}

// Функція для видалення товару з кошика
function removeCartItem(button) {
    const cartItem = button.closest(".cart-item");
    cartItem.remove();
    calculateTotal();

}

function addProductToCart(product) {
    // Створення HTML-рядка для товару у кошику
    const cartItemHTML = `
        <div class="cart-item">
            <span class="item-name">${product.name}</span>
            <span class="item-price">${product.price}</span>
            <button class="decrease-btn">-</button>
            <span class="quantity-value">${product.quantity}</span>
            <button class="increase-btn">+</button>
            <span class="item-total">${(product.price * product.quantity).toFixed(2)}</span>
            <button class="remove-btn">Remove</button>
        </div>
    `;
    // Додавання HTML-рядка до контейнера кошика
    cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);
    calculateTotal(); // Обчислення загальної суми
}

// Додавання обробника подій для кнопок "ADD TO BAG"
const addToBagButtons = document.querySelectorAll(".addtobag");

addToBagButtons.forEach(button => {
    button.addEventListener("click", function () {
        addToCart(this); // Передаємо кнопку як аргумент для отримання інформації про товар
    });
});

// Функція для додавання товару до кошика
function addToCart(button) {
    const productElement = button.closest(".mini-boxin");
    const productName = productElement.querySelector("h2").textContent;
    const productPrice = parseFloat(productElement.querySelector(".price").textContent);
    const quantity = 1; // Початкова кількість товару

    // Створення об'єкта товару
    const product = {
        name: productName,
        price: productPrice,
        quantity: quantity
    };

    // Зміна тексту кнопки на "У кошику"
    button.textContent = "У кошику";

}


