let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
    showNotification(`Added ${name} to cart!`);
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartCount.textContent = cart.length;

    if (cart.length > 0) {
        const totalElement = document.createElement('li');
        totalElement.className = 'cart-total';
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
        cartItems.appendChild(totalElement);
    }
}

function toggleCart() {
    const cartDropdown = document.getElementById('cart-dropdown');
    cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification animate__animated animate__fadeInRight';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('animate__fadeOutRight');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    // Add checkout logic here
    showNotification('Processing your order...');
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});