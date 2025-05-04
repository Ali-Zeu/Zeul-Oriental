let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Adăugarea unui produs în coș
function addToCart(productName, productPrice, engravingText, engravingFont) {
    const engravingCost = calculateEngravingCost(engravingText);

    const finalPrice = productPrice + engravingCost;
    const product = {
        name: productName,
        price: productPrice,
        engravingText: engravingText,
        engravingFont: engravingFont,
        engravingCost: engravingCost,
        finalPrice: finalPrice
    };

    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Calcularea costului gravurii
function calculateEngravingCost(text) {
    const pricePerLetter = 5;
    const maxLength = 20;
    const length = Math.min(text.length, maxLength);
    return length * pricePerLetter;
}

// Actualizarea vizualizării coșului
function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartCount = document.getElementById('cart-count');

    cartContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.name}</p>
            <p>Preț: ${item.price} lei</p>
            <p>
// Funcționalitatea de ștergere a produselor din coș
document.addEventListener('DOMContentLoaded', function() {
    // Selectează toate butoanele de ștergere
    const removeButtons = document.querySelectorAll('.remove-item');
    
    // Adaugă un event listener pentru fiecare buton de ștergere
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = button.getAttribute('data-id'); // Obține ID-ul produsului
            const itemElement = document.getElementById(itemId); // Găsește elementul produsului

            if (itemElement) {
                // Șterge elementul din DOM
                itemElement.remove();
                updateCartTotal(); // Actualizează totalul coșului
            }
        });
    });
});

// Funcție pentru actualizarea totalului din coș
function updateCartTotal() {
    const cartItems = document.querySelectorAll('.cart-item');
    let total = 0;

    // Calculează totalul pe baza produselor rămase
    cartItems.forEach(item => {
        const price = item.querySelector('p').innerText.split(' ')[1]; // Prețul este al doilea cuvânt
        total += parseInt(price); // Adună prețurile
    });

    // Actualizează valoarea totalului
    document.getElementById('cart-total').innerText = total + " lei";
}
