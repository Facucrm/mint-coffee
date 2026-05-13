const MINT_PRODUCTS = {
    'mint-black': {
        id: 'mint-black',
        name: 'MINT Cold Brew',
        tagline: 'PEAK PERFORMANCE. ANYTIME.',
        price: 3.40,
        image: './img/Gemini_Generated_Image_5jcqr75jcqr75jcq.png',
        description: 'The definitive standard for the modern professional. Our signature Cold Brew undergoes an 18-hour slow extraction process using 100% speciality Arabica beans. Designed for those who demand clarity and focus without the bitterness. A design accessory for your workspace.',
        tastingNotes: ['Dark Chocolate', 'Toasted Nut', 'Silky Caramel'],
        nutrition: {
            calories: '15 kcal',
            sugar: '0g',
            caffeine: '180mg (Clean Energy)',
            ingredients: 'Filtered water, 100% Speciality Arabica Coffee.'
        },
        reviews: [
            { name: 'Marcus K.', rating: 5, text: 'The clarity this provides is unmatched. A staple in my morning routine at the studio.' },
            { name: 'Elena G.', rating: 5, text: 'No acidity, just pure flavor. The minimalist packaging is a statement in itself.' },
            { name: 'Julian R.', rating: 5, text: 'From the gym to the boardroom, it is the perfect fuel. Uncompromising quality.' }
        ]
    },
    'mint-caramel': {
        id: 'mint-caramel',
        name: 'MINT Caramel',
        tagline: 'LUXURY COMMODITY',
        price: 3.40,
        image: './img/Gemini_Generated_Image_kc4kbpkc4kbpkc4k.png',
        description: 'Functional luxury in a can. We blend our signature 18-hour cold extraction with subtle notes of salted caramel and natural Madagascar vanilla. Crafted for those who seek the perfect balance between indulgence and high-octane performance.',
        tastingNotes: ['Salted Caramel', 'Madagascar Vanilla', 'Velvety Cacao'],
        nutrition: {
            calories: '45 kcal',
            sugar: '4g (Natural cane sugar)',
            caffeine: '180mg',
            ingredients: 'Filtered water, 100% Speciality Arabica, natural caramel syrup, vanilla extract.'
        },
        reviews: [
            { name: 'Sophia T.', rating: 5, text: 'Sophisticated sweetness. It feels premium from the first sip to the last.' },
            { name: 'Victor L.', rating: 5, text: 'The copper matte finish of the can is stunning. It is as much a design piece as it is a drink.' },
            { name: 'Isabella M.', rating: 5, text: 'My go-to for late-night creative sessions. Clean energy with a touch of class.' }
        ]
    },
    'mint-matcha': {
        id: 'mint-matcha',
        name: 'MINT Matcha',
        tagline: 'CEREMONIAL GRADE. JAPÓN.',
        price: 3.40,
        image: './img/Gemini_Generated_Image_p3gbgfp3gbgfp3gb.png',
        description: 'The green standard for high-performers. Sourced directly from Uji, Japan, our Ceremonial Grade Matcha is blended with premium oat milk. It provides a sustained, calm energy flow—powered by L-Theanine—without the crash. Mental clarity for the modern era.',
        tastingNotes: ['Sweet Umami', 'Creamy Oat', 'Bright Herbal'],
        nutrition: {
            calories: '85 kcal',
            sugar: '2g',
            caffeine: '70mg (Sustained Focus)',
            ingredients: 'Premium oat milk, Ceremonial Grade Matcha (Uji, Japan), natural stabilizer.'
        },
        reviews: [
            { name: 'Ami H.', rating: 5, text: 'Finally, an RTD matcha that actually tastes like ceremonial grade. Truly impressive.' },
            { name: 'Daniel S.', rating: 5, text: 'The focus I get from this is unparalleled. No jitters, just pure flow.' },
            { name: 'Nathalie B.', rating: 5, text: 'Creamy, vibrant, and incredibly designed. A must-have in my workspace.' }
        ]
    },
    'mint-6pack': {
        id: 'mint-6pack',
        name: 'The Performance Box',
        tagline: 'THE NEW STANDARD',
        price: 14.99,
        image: './img/Gemini_Generated_Image_5jcqr75jcqr75jcq.png',
        gallery: [
            './img/Gemini_Generated_Image_5jcqr75jcqr75jcq.png',
            './img/Gemini_Generated_Image_kc4kbpkc4kbpkc4k.png',
            './img/Gemini_Generated_Image_p3gbgfp3gbgfp3gb.png'
        ],
        description: 'The ultimate survival kit for the high-performing professional. This collection includes 2x MINT Cold Brew, 2x MINT Caramel, and 2x MINT Matcha. Designed to provide a versatile energy landscape for your entire work week. Uncompromising focus from Monday to Friday.',
        tastingNotes: ['Complete Experience', 'Versatile Energy', 'Pure Performance'],
        nutrition: {
            calories: 'Variable',
            sugar: 'Variable',
            caffeine: 'High / Sustained',
            ingredients: 'Includes 2x Cold Brew, 2x Caramel, 2x Matcha.'
        },
        reviews: [
            { name: 'Alex G.', rating: 5, text: 'Perfect for the office. Keeps me fueled through back-to-back meetings.' },
            { name: 'Sarah L.', rating: 5, text: 'The box design is just as premium as the cans. A great gift for any enthusiast.' },
            { name: 'Michael R.', rating: 5, text: 'Unbeatable value for the highest quality RTD on the market.' }
        ]
    },
    'granos-arabicos': {
        id: 'granos-arabicos',
        name: 'GRANOS ARÁBICOS',
        tagline: 'PREMIUM SPECIALITY BEANS',
        price: 3.40,
        image: './img/cafe arabico.jpg',
        description: 'Elevate your home ritual with our Premium Arábica beans. Sourced from the highest altitudes, these beans are roasted to perfection for those who refuse to compromise on quality even at home. A luxury commodity for the modern workspace.',
        tastingNotes: ['Roasted Hazelnut', 'Dark Chocolate', 'Stone Fruit'],
        nutrition: {
            origin: 'High Altitude Selection',
            altitude: '1800m',
            process: 'Washed / Sun-dried',
            ingredients: '100% Speciality Arabica Beans'
        },
        reviews: [
            { name: 'James W.', rating: 5, text: 'The aroma when you open the bag is incredible. Clean, focused energy.' },
            { name: 'Linda P.', rating: 5, text: 'The best beans I have ever ground at home. Truly a premium experience.' }
        ]
    },
    'granos-colombianos': {
        id: 'granos-colombianos',
        name: 'GRANOS COLOMBIANOS',
        tagline: 'SINGLE ORIGIN HUILA',
        price: 3.40,
        image: './img/cafe colombiano.jpg',
        description: 'The standard of excellence. Our Colombian Single Origin from Huila offers a sophisticated balance of acidity and sweetness. Perfect for high-performers who need a refined, clean cup to fuel their most ambitious projects.',
        tastingNotes: ['Sweet Citrus', 'Red Berries', 'Caramel Finish'],
        nutrition: {
            origin: 'Huila, Colombia',
            altitude: '1700m',
            process: 'Fully Washed',
            ingredients: '100% Single Origin Colombian Coffee'
        },
        reviews: [
            { name: 'Robert D.', rating: 5, text: 'Balanced, sweet, and bright. Everything you want in a Colombian coffee.' },
            { name: 'Maria C.', rating: 5, text: 'Huila never disappoints. The roast profile is spot on.' }
        ]
    },
    'te-matcha': {
        id: 'te-matcha',
        name: 'TÉ MATCHA',
        tagline: 'CEREMONIAL GRADE POWDER',
        price: 3.40,
        image: './img/te matcha.jpg',
        description: 'Pure ceremonial grade Matcha from Uji, Japan. A functional luxury commodity for high-performers seeking sustained focus and antioxidant benefits. Vibrant green, silky texture, and unparalleled mental clarity.',
        tastingNotes: ['Deep Umami', 'Vibrant Grassy', 'Sweet Cream'],
        nutrition: {
            origin: 'Uji, Japan',
            grade: 'Ceremonial',
            benefits: 'High Antioxidants / L-Theanine',
            ingredients: '100% Pure Ceremonial Grade Matcha'
        },
        reviews: [
            { name: 'Yuki M.', rating: 5, text: 'Authentic quality. The color is incredibly vibrant. Perfect for my morning focus.' },
            { name: 'Sarah J.', rating: 5, text: 'Clean energy without the crash. A must-have for long work sessions.' }
        ]
    }
};
let currentProduct = null;
let currentImageIdx = 0;

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get('id');

    // SEO Slug Detection
    if (!productId) {
        const path = window.location.pathname;
        if (path.includes('granos-arabicos')) productId = 'granos-arabicos';
        else if (path.includes('granos-colombianos')) productId = 'granos-colombianos';
        else if (path.includes('te-matcha')) productId = 'te-matcha';
    }

    if (productId && MINT_PRODUCTS[productId]) {
        currentProduct = MINT_PRODUCTS[productId];
        renderProduct(currentProduct);
    } else if(window.location.pathname.includes('producto.html') || productId) {
        // Fallback si no hay ID o el ID es inválido en una página de producto
        if (!productId) window.location.href = 'productos.html';
    }
});

function renderProduct(product) {
    document.title = `${product.name} | MINT Speciality`;
    
    // Set basic info
    document.getElementById('p-image').src = product.image;
    document.getElementById('p-image').alt = `${product.name} - ${product.tagline} | MINT Speciality`;
    document.getElementById('p-tagline').textContent = product.tagline;
    document.getElementById('p-name').textContent = product.name;
    document.getElementById('p-price').textContent = `${product.price.toFixed(2).replace('.', ',')}€`;
    document.getElementById('p-desc').textContent = product.description;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = `${product.description} ${product.tastingNotes.join(', ')}. Pure performance, zero compromise.`;
    
    // Set Tasting Notes
    const notesContainer = document.getElementById('p-notes');
    notesContainer.innerHTML = product.tastingNotes.map(note => 
        `<span class="bg-stone-200 text-stone-700 px-4 py-1 text-sm font-bold uppercase tracking-widest rounded-full">${note}</span>`
    ).join('');

    // Set Gallery if exists
    const galleryContainer = document.getElementById('p-gallery');
    const galleryNav = document.getElementById('gallery-nav');
    
    if (galleryContainer) {
        if (product.gallery && product.gallery.length > 0) {
            galleryContainer.style.display = 'grid';
            if (galleryNav) galleryNav.style.display = 'flex';
            currentImageIdx = 0;
            
            galleryContainer.innerHTML = product.gallery.map((img, idx) => `
                <div class="gallery-thumb cursor-pointer border-2 ${idx === 0 ? 'border-stone-900' : 'border-transparent'} p-2 bg-white rounded-xl transition-all hover:border-stone-400" onclick="switchImage(this, '${img}', ${idx})">
                    <img src="${img}" alt="Thumbnail" class="w-full h-full object-contain blend-multiply">
                </div>
            `).join('');
        } else {
            galleryContainer.style.display = 'none';
            if (galleryNav) galleryNav.style.display = 'none';
        }
    }

    // Set Nutrition Info / Details
    const labels = {
        'n-cal': product.nutrition.calories || product.nutrition.origin || '-',
        'n-sugar': product.nutrition.sugar || product.nutrition.altitude || product.nutrition.grade || '-',
        'n-caf': product.nutrition.caffeine || product.nutrition.process || product.nutrition.benefits || '-',
        'n-ing': product.nutrition.ingredients || '-'
    };

    // Update labels if it's a dry product (beans/powder)
    const calLabel = document.querySelector('span[id="n-cal"]').previousElementSibling;
    const sugarLabel = document.querySelector('span[id="n-sugar"]').previousElementSibling;
    const cafLabel = document.querySelector('span[id="n-caf"]').previousElementSibling;

    if (product.nutrition.origin) {
        if (calLabel) calLabel.textContent = 'Origen';
        if (sugarLabel) sugarLabel.textContent = product.nutrition.altitude ? 'Altitud' : 'Grado';
        if (cafLabel) cafLabel.textContent = product.nutrition.process ? 'Proceso' : 'Beneficios';
    } else {
        if (calLabel) calLabel.textContent = 'Calorías';
        if (sugarLabel) sugarLabel.textContent = 'Azúcares';
        if (cafLabel) cafLabel.textContent = 'Cafeína Estimada';
    }

    document.getElementById('n-cal').textContent = labels['n-cal'];
    document.getElementById('n-sugar').textContent = labels['n-sugar'];
    document.getElementById('n-caf').textContent = labels['n-caf'];
    document.getElementById('n-ing').textContent = labels['n-ing'];

    // Set Reviews
    const reviewsContainer = document.getElementById('p-reviews');
    reviewsContainer.innerHTML = product.reviews.map(review => `
        <div class="bg-stone-50 border border-stone-200 p-6 rounded-xl">
            <div class="flex items-center gap-1 mb-3 text-stone-900">
                ${'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'.repeat(review.rating)}
            </div>
            <p class="text-stone-600 mb-4 text-sm italic">"${review.text}"</p>
            <p class="font-bold text-sm tracking-tight">${review.name}</p>
        </div>
    `).join('');

    // Bind Add to Cart Button
    const addBtn = document.getElementById('p-add-btn');
    addBtn.onclick = () => {
        addToCart(product.id, product.name, product.price, product.image);
    };
}

function switchImage(thumb, imgSrc, idx) {
    if (idx !== undefined) currentImageIdx = idx;
    
    // Update Main Image
    const mainImg = document.getElementById('p-image');
    mainImg.style.opacity = '0';
    
    setTimeout(() => {
        mainImg.src = imgSrc;
        mainImg.style.opacity = '1';
    }, 200);

    // Update Thumb Borders
    const thumbs = document.querySelectorAll('.gallery-thumb');
    thumbs.forEach(t => {
        t.classList.remove('border-stone-900');
        t.classList.add('border-transparent');
    });
    
    if (thumb) {
        thumb.classList.remove('border-transparent');
        thumb.classList.add('border-stone-900');
    } else {
        // Find thumb by index if no thumb element passed (from arrow nav)
        if (thumbs[currentImageIdx]) {
            thumbs[currentImageIdx].classList.remove('border-transparent');
            thumbs[currentImageIdx].classList.add('border-stone-900');
        }
    }
}

function nextImage() {
    if (!currentProduct || !currentProduct.gallery) return;
    currentImageIdx = (currentImageIdx + 1) % currentProduct.gallery.length;
    switchImage(null, currentProduct.gallery[currentImageIdx]);
}

function prevImage() {
    if (!currentProduct || !currentProduct.gallery) return;
    currentImageIdx = (currentImageIdx - 1 + currentProduct.gallery.length) % currentProduct.gallery.length;
    switchImage(null, currentProduct.gallery[currentImageIdx]);
}
