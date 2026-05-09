const CART_STORAGE_KEY = 'mint_speciality_cart';

// Init Cart State
window.cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
let cart = window.cart;

// Sync Cart with Auth
window.syncCartWithAuth = async (user) => {
    if (user) {
        // Load cart from firestore
        try {
            const docRef = db.collection('carts').doc(user.uid);
            const docSnap = await docRef.get();
            if (docSnap.exists) {
                cart = docSnap.data().items || [];
            } else {
                // If local cart exists, upload it, then clear it from local
                if (cart.length > 0) {
                    await docRef.set({ items: cart });
                }
            }
            renderCart();
            // Clear local storage cart
            localStorage.removeItem(CART_STORAGE_KEY);
        } catch (error) {
            console.error("Error fetching cart from Firestore:", error);
        }
    } else {
        // Load cart from local storage
        cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
        renderCart();
    }
};

// Save to LocalStorage or Firestore
async function saveCart() {
    if (typeof currentUser !== 'undefined' && currentUser) {
        try {
            await db.collection('carts').doc(currentUser.uid).set({ items: cart });
        } catch (error) {
            console.error("Error saving cart to Firestore:", error);
        }
    } else {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
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
        
        // Notify other components even if empty
        document.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart: [], subtotal: 0 } }));
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

        // Add shipping indicator to drawer
        let shippingInfo = '';
        if (subtotal < 30) {
            const remaining = 30 - subtotal;
            shippingInfo = `
                <div class="mt-6 p-4 bg-stone-100 rounded-xl text-xs text-stone-600 flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
                    <span>Faltan <strong>${remaining.toFixed(2).replace('.', ',')}€</strong> para <strong>Envío Gratis</strong>.</span>
                </div>
            `;
        } else {
            shippingInfo = `
                <div class="mt-6 p-4 bg-green-50 text-green-700 rounded-xl text-xs flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0"><path d="M20 6 9 17l-5-5"/></svg>
                    <span>¡Enhorabuena! Tienes <strong>Envío Gratis</strong>.</span>
                </div>
            `;
        }
        cartItemsContainer.insertAdjacentHTML('beforeend', shippingInfo);
        
        // Notify other components (like checkout page)
        document.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart, subtotal } }));
    }
}

// Checkout Function
window.handleCheckout = function() {
    if (cart.length === 0) {
        alert('Tu cesta está vacía.');
        return;
    }
    window.location.href = 'checkout.html';
};

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
