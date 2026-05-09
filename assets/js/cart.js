const CART_STORAGE_KEY = 'mint_speciality_cart';

// Init Cart State
let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];

// Save to LocalStorage
function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

// Add Item
function addToCart(id, name, price, image) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, image, quantity: 1 });
    }
    saveCart();
    renderCart();
    
    // Open drawer to give feedback
    const drawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('overlay');
    if (drawer && overlay) {
        drawer.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

// Remove Item
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
}

// Update Quantity
function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
            renderCart();
        }
    }
}

// Render Cart Drawer
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartEmptyState = document.getElementById('cartEmptyState');
    const cartFooter = document.getElementById('cartFooter');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartBadge = document.getElementById('cartBadge');
    
    // Update Badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) {
        cartBadge.innerText = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    if (!cartItemsContainer || !cartEmptyState || !cartFooter) return;

    if (cart.length === 0) {
        cartEmptyState.style.display = 'flex';
        cartItemsContainer.style.display = 'none';
        cartFooter.style.display = 'none';
    } else {
        cartEmptyState.style.display = 'none';
        cartItemsContainer.style.display = 'block';
        cartFooter.style.display = 'block';

        let html = '';
        let subtotal = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;
            html += `
                <div class="flex items-center gap-4 py-4 border-b border-stone-200">
                    <a href="producto.html?id=${item.id}" class="w-16 h-16 shrink-0">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain mix-blend-multiply bg-stone-100 rounded-md">
                    </a>
                    <div class="flex-1">
                        <a href="producto.html?id=${item.id}" class="block group">
                            <h4 class="font-bold text-sm mb-1 group-hover:text-stone-600 transition-colors">${item.name}</h4>
                        </a>
                        <div class="text-stone-500 font-medium text-sm mb-2">${item.price.toFixed(2).replace('.', ',')}€</div>
                        <div class="flex items-center gap-3">
                            <button onclick="updateQuantity('${item.id}', -1)" class="w-6 h-6 flex items-center justify-center rounded-full border border-stone-300 hover:bg-stone-200">-</button>
                            <span class="text-sm font-semibold">${item.quantity}</span>
                            <button onclick="updateQuantity('${item.id}', 1)" class="w-6 h-6 flex items-center justify-center rounded-full border border-stone-300 hover:bg-stone-200">+</button>
                        </div>
                    </div>
                    <button onclick="removeFromCart('${item.id}')" class="p-2 text-stone-400 hover:text-stone-900 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>
                        </svg>
                    </button>
                </div>
            `;
        });

        cartItemsContainer.innerHTML = html;
        if (cartSubtotal) {
            cartSubtotal.innerText = `${subtotal.toFixed(2).replace('.', ',')}€`;
        }
    }
}

// Checkout Function
function handleCheckout() {
    if (cart.length === 0) return;
    
    let text = "Hola, me gustaría realizar el siguiente pedido MINT:\n\n";
    let subtotal = 0;
    cart.forEach(item => {
        text += `- ${item.quantity}x ${item.name} (${(item.price * item.quantity).toFixed(2)}€)\n`;
        subtotal += (item.price * item.quantity);
    });
    text += `\nTotal: ${subtotal.toFixed(2)}€\n`;
    text += "\nPor favor, confirmad disponibilidad para pasar a recoger.";
    
    const whatsappUrl = `https://wa.me/34600000000?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
}

// Global Cart UI Setup
document.addEventListener('DOMContentLoaded', () => {
    // Inject Drawer UI dynamically if not present, but we will assume it's hardcoded in HTML for simplicity and SEO, 
    // we'll just bind events.
    const cartBtn = document.getElementById('cartBtn');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const cartDrawer = document.getElementById('cartDrawer');
    const overlay = document.getElementById('overlay');
    const checkoutBtn = document.getElementById('checkoutBtn');

    function toggleCart() {
        if(cartDrawer && overlay) {
            cartDrawer.classList.toggle('open');
            overlay.classList.toggle('open');
            if(cartDrawer.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    }

    if(cartBtn) cartBtn.addEventListener('click', toggleCart);
    if(closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);
    if(overlay) overlay.addEventListener('click', () => {
        if (cartDrawer.classList.contains('open')) toggleCart();
    });
    if(checkoutBtn) checkoutBtn.addEventListener('click', handleCheckout);

    // Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIconOpen = document.getElementById('menuIconOpen');
    const menuIconClose = document.getElementById('menuIconClose');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('translate-y-0');
            
            if (isOpen) {
                // Close menu
                mobileMenu.classList.remove('translate-y-0');
                mobileMenu.classList.add('-translate-y-full');
                menuIconClose.classList.add('hidden');
                menuIconOpen.classList.remove('hidden');
                document.body.style.overflow = '';
            } else {
                // Open menu
                mobileMenu.classList.remove('-translate-y-full');
                mobileMenu.classList.add('translate-y-0');
                menuIconOpen.classList.add('hidden');
                menuIconClose.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // Initial render
    renderCart();
});
