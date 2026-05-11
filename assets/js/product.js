const MINT_PRODUCTS = {
    'mint-black': {
        id: 'mint-black',
        name: 'MINT Cold Brew',
        tagline: 'Original 18h Extraction',
        price: 3.40,
        image: './img/Gemini_Generated_Image_5jcqr75jcqr75jcq.png',
        description: 'Nuestro buque insignia. El clásico MINT Cold Brew pasa por una cuidadosa extracción en frío de 18 horas utilizando granos 100% Arábica de especialidad tueste medio-claro. Este proceso elimina el amargor y la acidez agresiva, resultando en un perfil de sabor excepcionalmente suave y dulce por naturaleza.',
        tastingNotes: ['Chocolate Negro', 'Nuez Tostada', 'Caramelo Ligero'],
        nutrition: {
            calories: '15 kcal',
            sugar: '0g',
            caffeine: '180mg (Equivalente a 2.5 espressos)',
            ingredients: 'Agua filtrada, café 100% Arábica de especialidad.'
        },
        reviews: [
            { name: 'Carlos M.', rating: 5, text: 'Es increíble la diferencia con un café de máquina de la facultad. Suave y sin acidez. Me salva los días de estudio intenso.' },
            { name: 'Laura Gómez', rating: 5, text: 'Literalmente no puedo empezar mi mañana sin él. El sabor a nuez tostada es super evidente y no necesito echarle azúcar.' },
            { name: 'David R.', rating: 4, text: 'Muy buen café frío, súper práctico para llevar. Ojalá lo vendieran en packs más grandes.' }
        ]
    },
    'mint-caramel': {
        id: 'mint-caramel',
        name: 'Caramel Cold Brew',
        tagline: 'Sweet Balance',
        price: 3.40,
        image: './img/Gemini_Generated_Image_kc4kbpkc4kbpkc4k.png',
        description: 'La indulgencia perfecta sin sacrificar la energía. Tomamos nuestra base de Cold Brew de 18 horas y la combinamos magistralmente con notas sutiles a caramelo salado y un toque de vainilla natural. Es el equilibrio exacto entre el dulzor y el intenso perfil de nuestro café de especialidad.',
        tastingNotes: ['Caramelo Salado', 'Vainilla Natural', 'Cacao'],
        nutrition: {
            calories: '45 kcal',
            sugar: '4g (Azúcar de caña natural)',
            caffeine: '180mg',
            ingredients: 'Agua filtrada, café 100% Arábica de especialidad, sirope de caramelo natural, extracto de vainilla.'
        },
        reviews: [
            { name: 'Sofía T.', rating: 5, text: 'El toque de caramelo es sutil, no es empalagoso como los del Starbucks. Perfecto para media tarde.' },
            { name: 'Javier F.', rating: 5, text: 'Me encanta. Sabe a lujo. La lata dorada/bronce además tiene un tacto increíble.' },
            { name: 'Elena Ruiz', rating: 4, text: 'Riquísimo, aunque suelo preferir el negro, este es ideal cuando tienes antojo de algo dulce pero quieres energía.' }
        ]
    },
    'mint-matcha': {
        id: 'mint-matcha',
        name: 'MINT Matcha Latte',
        tagline: 'Ceremonial Grade',
        price: 3.40,
        image: './img/Gemini_Generated_Image_p3gbgfp3gbgfp3gb.png',
        description: 'Nuestra alternativa verde. Utilizamos exclusivamente Matcha de Grado Ceremonial procedente directamente de Uji, Japón. Al mezclarlo suavemente con leche de avena premium, logramos una bebida cremosa que proporciona una energía sostenida y focalizada (gracias a la L-Teanina) sin los temblores del café.',
        tastingNotes: ['Umami Suave', 'Avena Dulce', 'Notas Herbáceas'],
        nutrition: {
            calories: '85 kcal',
            sugar: '2g',
            caffeine: '70mg',
            ingredients: 'Bebida de avena premium (agua, avena), Té Matcha Grado Ceremonial (Japón), estabilizante natural.'
        },
        reviews: [
            { name: 'Marta V.', rating: 5, text: 'He probado muchos matchas envasados y este es el único que sabe a matcha de verdad, ceremonial. Nada arenoso.' },
            { name: 'Pablo S.', rating: 5, text: 'La energía que da el matcha es distinta, mucho más enfocada. Me viene genial para concentrarme sin ponerme nervioso.' },
            { name: 'Ana Isabel', rating: 5, text: 'Simplemente delicioso. La mezcla con la avena es súper cremosa. Un 10 absoluto.' }
        ]
    },
    'mint-6pack': {
        id: 'mint-6pack',
        name: 'The 6-Pack Collection',
        tagline: 'The Complete Experience',
        price: 14.99,
        image: './img/Gemini_Generated_Image_5jcqr75jcqr75jcq.png',
        gallery: [
            './img/Gemini_Generated_Image_5jcqr75jcqr75jcq.png',
            './img/Gemini_Generated_Image_kc4kbpkc4kbpkc4k.png',
            './img/Gemini_Generated_Image_p3gbgfp3gbgfp3gb.png'
        ],
        description: 'El surtido definitivo para mantener tu semana al máximo nivel. Este pack ahorro incluye 2 latas de MINT Cold Brew Original, 2 latas de Caramel Cold Brew y 2 latas de MINT Matcha Latte. Disfruta de la variedad perfecta para alternar entre energía pura, indulgencia dulce y enfoque prolongado. Ahorras más de 5€ respecto a la compra individual.',
        tastingNotes: ['Variedad Completa', 'Ahorro Extra', 'Energía 24/7'],
        nutrition: {
            calories: 'Variable',
            sugar: 'Variable',
            caffeine: 'Alta',
            ingredients: 'Contiene 2x Cold Brew, 2x Caramel Cold Brew, 2x Matcha Latte.'
        },
        reviews: [
            { name: 'Alejandro G.', rating: 5, text: 'El mejor pack de supervivencia para exámenes. Salen super rentables y tienes para toda la semana.' },
            { name: 'Sara L.', rating: 5, text: 'Genial para probar todos los sabores o si en el piso de estudiantes a cada uno le gusta uno diferente.' },
            { name: 'Miguel R.', rating: 5, text: 'El precio es inmejorable. Ojalá saquen un pack de 12 pronto.' }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId && MINT_PRODUCTS[productId]) {
        renderProduct(MINT_PRODUCTS[productId]);
    } else if(window.location.pathname.includes('producto.html')) {
        // Fallback si no hay ID
        window.location.href = 'productos.html';
    }
});

function renderProduct(product) {
    document.title = `${product.name} | MINT Speciality`;
    
    // Set basic info
    document.getElementById('p-image').src = product.image;
    document.getElementById('p-tagline').textContent = product.tagline;
    document.getElementById('p-name').textContent = product.name;
    document.getElementById('p-price').textContent = `${product.price.toFixed(2).replace('.', ',')}€`;
    document.getElementById('p-desc').textContent = product.description;
    
    // Set Tasting Notes
    const notesContainer = document.getElementById('p-notes');
    notesContainer.innerHTML = product.tastingNotes.map(note => 
        `<span class="bg-stone-200 text-stone-700 px-4 py-1 text-sm font-bold uppercase tracking-widest rounded-full">${note}</span>`
    ).join('');

    // Set Gallery if exists
    const galleryContainer = document.getElementById('p-gallery');
    if (galleryContainer) {
        if (product.gallery && product.gallery.length > 0) {
            galleryContainer.style.display = 'grid';
            galleryContainer.innerHTML = product.gallery.map((img, idx) => `
                <div class="gallery-thumb cursor-pointer border-2 ${idx === 0 ? 'border-stone-900' : 'border-transparent'} p-2 bg-white rounded-xl transition-all hover:border-stone-400" onclick="switchImage(this, '${img}')">
                    <img src="${img}" alt="Thumbnail" class="w-full h-full object-contain blend-multiply">
                </div>
            `).join('');
        } else {
            galleryContainer.style.display = 'none';
        }
    }

    // Set Nutrition Info
    document.getElementById('n-cal').textContent = product.nutrition.calories;
    document.getElementById('n-sugar').textContent = product.nutrition.sugar;
    document.getElementById('n-caf').textContent = product.nutrition.caffeine;
    document.getElementById('n-ing').textContent = product.nutrition.ingredients;

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

function switchImage(thumb, imgSrc) {
    // Update Main Image
    const mainImg = document.getElementById('p-image');
    mainImg.style.opacity = '0';
    
    setTimeout(() => {
        mainImg.src = imgSrc;
        mainImg.style.opacity = '1';
    }, 200);

    // Update Thumb Borders
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('border-stone-900'));
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.add('border-transparent'));
    thumb.classList.remove('border-transparent');
    thumb.classList.add('border-stone-900');
}
