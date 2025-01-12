const cartProducts = document.querySelector('.cart__products');

const productPattern = cartProducts.querySelector('.cart__product').cloneNode(true);
cartProducts.querySelector('.cart__product').remove();

// Добавление продуктов в корзину, изменение количества продуктов в корзине

Array.from(document.querySelectorAll('.product__add')).forEach(el => { el.addEventListener('click', addProduct) })

function addProduct(e) {
    // Добавляемый продукт
    const product = e.target.parentNode.parentNode.parentNode;
    const productId = product.dataset.id;
    const productSrc = product.getElementsByTagName('img')[0].getAttribute('src');
    const productCount = product.querySelector('.product__quantity-value').innerText;

    //Поиск продукта в корзине
    let cartProduct = Array.from(cartProducts.querySelectorAll('.cart__product')).find(el => {
        if (el.dataset.id === productId) return el;
    });
    if (!cartProduct) {
        cartProduct = productPattern.cloneNode(true);
        cartProduct.dataset.id = productId;
        cartProduct.getElementsByTagName('img')[0].setAttribute('src', productSrc)
        cartProducts.appendChild(cartProduct);
    }

    cartProduct.querySelector('.cart__product-count').innerText = productCount;
}

// Увеличение количества продукта

Array.from(document.querySelectorAll('.product__quantity-control_inc')).forEach(el => { el.addEventListener('click', incCount) })

function incCount(e) {
    const countElement = e.target.parentNode.querySelector('.product__quantity-value');
    countElement.innerText = ++countElement.innerText;
}

// Уменьшение количества продукта

Array.from(document.querySelectorAll('.product__quantity-control_dec')).forEach(el => { el.addEventListener('click', decCount) })

function decCount(e) {
    const countElement = e.target.parentNode.querySelector('.product__quantity-value');
    if (+countElement.innerText > 1) {
        countElement = --countElement.innerText;
    }
}