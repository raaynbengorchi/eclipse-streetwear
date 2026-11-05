/*
 * ECLIPSE — storefront logic
 *
 * TEMPORARY PRODUCT IMAGERY
 * The photos in /images/products are licensed stock samples (Unsplash License),
 * downloaded locally and optimised to WebP. They are placeholders only and must
 * be replaced with photos of your own stock before launch. See
 * images/products/README.md for the full list and sources.
 *
 * DRAFT PRICING
 * Every price below is a draft proposal in MAD, based on comparable pieces
 * currently listed by Moroccan retailers. Nothing here is confirmed. See
 * PRICING.md for the review table and reference links.
 */

const CURRENCY = 'MAD';

const categories = {
  'oversized-tees': 'Oversized Tee',
  'graphic-tees': 'Graphic Tee',
  'baggy-jeans': 'Baggy Jeans',
  cargo: 'Cargo',
};

const products = [
  {
    id: 1,
    name: 'Eclipse Heavyweight Tee',
    category: 'oversized-tees',
    color: 'Black',
    price: 249,
    badge: 'New',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'images/products/eclipse-heavyweight-tee-black.webp',
    imageAlt: 'Black oversized heavyweight t-shirt',
    desc: 'A boxy, drop-shoulder tee cut from 240 gsm combed cotton. Dense and structured, with a ribbed collar that keeps its shape wash after wash.',
  },
  {
    id: 2,
    name: 'Bone Boxy Tee',
    category: 'oversized-tees',
    color: 'Bone',
    price: 229,
    badge: '',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'images/products/bone-boxy-tee.webp',
    imageAlt: 'Bone coloured boxy oversized t-shirt',
    desc: 'A clean, hip-length boxy tee in a soft bone wash. Garment-dyed for a lived-in finish from the very first wear.',
  },
  {
    id: 3,
    name: 'Olive Drop-Shoulder Tee',
    category: 'oversized-tees',
    color: 'Washed Olive',
    price: 239,
    badge: '',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'images/products/olive-drop-shoulder-tee.webp',
    imageAlt: 'Washed olive drop-shoulder oversized t-shirt',
    desc: 'Washed olive cotton with a relaxed drop shoulder and a wider body. The kind of tee that gets better with every wash.',
  },
  {
    id: 4,
    name: 'Eclipse Motif Tee',
    category: 'graphic-tees',
    color: 'Black',
    price: 269,
    badge: 'Best Seller',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'images/products/eclipse-motif-tee-black.webp',
    imageAlt: 'Black oversized t-shirt with a green motif print',
    desc: 'Oversized black tee with a tonal motif print across the chest. Water-based inks keep the hand-feel soft, never plasticky.',
  },
  {
    id: 5,
    name: 'Good Luck Graphic Tee',
    category: 'graphic-tees',
    color: 'Off-White',
    price: 259,
    badge: '',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'images/products/good-luck-graphic-tee.webp',
    imageAlt: 'Off-white oversized t-shirt with a blue graphic print',
    desc: 'An off-white oversized tee with a hand-drawn print in washed blue. Lightweight enough for layering, heavy enough to hang right.',
  },
  {
    id: 6,
    name: 'Tropic Print Tee',
    category: 'graphic-tees',
    color: 'Multi',
    price: 279,
    badge: 'Limited',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: 'images/products/tropic-print-tee.webp',
    imageAlt: 'Black oversized t-shirt with a colourful tropic print',
    desc: 'A limited graphic drop: saturated tropic artwork over a black oversized body. Screen-printed front panel, plain back.',
  },
  {
    id: 7,
    name: 'Carpenter Baggy Jean',
    category: 'baggy-jeans',
    color: 'Washed Grey',
    price: 499,
    badge: 'New',
    sizes: ['30', '32', '34', '36', '38'],
    image: 'images/products/carpenter-baggy-jean-grey.webp',
    imageAlt: 'Washed grey baggy carpenter jeans',
    desc: 'Super baggy leg with carpenter pockets and a hammer loop. Rigid 100% cotton denim that breaks in properly after a few wears.',
  },
  {
    id: 8,
    name: 'Wide-Leg Baggy Jean',
    category: 'baggy-jeans',
    color: 'Light Blue',
    price: 479,
    badge: 'Best Seller',
    sizes: ['30', '32', '34', '36', '38'],
    image: 'images/products/wide-leg-baggy-jean-blue.webp',
    imageAlt: 'Light blue wide-leg baggy jeans on a hanger',
    desc: 'A clean wide-leg cut in a light blue wash. High-rise, full through the thigh, and straight to the floor — no stretch, no fuss.',
  },
  {
    id: 9,
    name: 'Faded Black Baggy Jean',
    category: 'baggy-jeans',
    color: 'Faded Black',
    price: 469,
    badge: '',
    sizes: ['30', '32', '34', '36', '38'],
    image: 'images/products/faded-black-baggy-jean.webp',
    imageAlt: 'Faded black baggy jeans',
    desc: 'Faded black denim with a relaxed, stacked leg. Garment-washed for a soft, broken-in surface from day one.',
  },
  {
    id: 10,
    name: 'Utility Cargo Pant',
    category: 'cargo',
    color: 'Olive',
    price: 529,
    badge: 'New',
    sizes: ['30', '32', '34', '36', '38'],
    image: 'images/products/utility-cargo-pant-olive.webp',
    imageAlt: 'Olive utility cargo pants',
    desc: 'Twill cargo pants with bellowed side pockets and a wide, straight leg. Built to carry the day, cut to sit over a sneaker.',
  },
  {
    id: 11,
    name: 'Utility Cargo Pant',
    category: 'cargo',
    color: 'Black',
    price: 499,
    badge: '',
    sizes: ['30', '32', '34', '36', '38'],
    image: 'images/products/utility-cargo-pant-black.webp',
    imageAlt: 'Black utility cargo pants',
    desc: 'The same relaxed cargo silhouette in washed black. Tonal stitching and matte hardware keep it low-key.',
  },
  {
    id: 12,
    name: 'Utility Cargo Pant',
    category: 'cargo',
    color: 'Bone',
    price: 499,
    badge: '',
    sizes: ['30', '32', '34', '36', '38'],
    image: 'images/products/utility-cargo-pant-bone.webp',
    imageAlt: 'Bone coloured utility cargo pants',
    desc: 'A lighter take on the utility pant in bone cotton twill. Drawcord hem, roomy pockets, easy with everything.',
  },
];

let cart = [];
let currentFilter = 'all';

const grid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartBtn = document.getElementById('cartBtn');
const cartClose = document.getElementById('cartClose');
const checkoutBtn = document.getElementById('checkoutWhatsApp');
const modalOverlay = document.getElementById('modalOverlay');
const productModal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('back-to-top');
const loader = document.getElementById('loader');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

let selectedSize = null;
let selectedQty = 1;
let currentProduct = null;

function formatPrice(value) {
  const amount = Math.round(value * 100) / 100;
  const hasCents = amount % 1 !== 0;
  return `${amount.toLocaleString('en-US', {
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: hasCents ? 2 : 0,
  })} ${CURRENCY}`;
}

function categoryLabel(category) {
  return categories[category] || category;
}

function cartKey(product, size) {
  return `${product.id}-${size}`;
}

function renderProducts(filter = 'all') {
  grid.innerHTML = '';
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <figure>
        <img src="${p.image}" alt="${p.imageAlt}" width="900" height="1200" loading="lazy" decoding="async">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
      </figure>
      <div class="product-info">
        <div class="product-category">${categoryLabel(p.category)}<span class="cat-color"> · ${p.color}</span></div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">${formatPrice(p.price)}</div>
        <div class="product-actions">
          <button class="quick-view-btn" data-id="${p.id}">Quick View</button>
          <button class="add-to-cart-btn" data-id="${p.id}">Add to Cart</button>
        </div>
      </div>
    `;
    card.querySelector('figure').addEventListener('click', () => openModal(p));
    card.querySelector('.quick-view-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(p);
    });
    card.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(p, p.sizes[0], 1);
    });
    grid.appendChild(card);
  });
}

function openModal(product) {
  currentProduct = product;
  selectedSize = product.sizes[0];
  selectedQty = 1;

  modalContent.innerHTML = `
    <div class="modal-image">
      <div class="modal-img-bg">
        <img src="${product.image}" alt="${product.imageAlt}" width="900" height="1200" decoding="async">
      </div>
    </div>
    <div class="modal-details">
      <div class="product-category">${categoryLabel(product.category)}<span class="cat-color"> · ${product.color}</span></div>
      <h2>${product.name}</h2>
      <div class="modal-price">${formatPrice(product.price)}</div>
      <p class="modal-desc">${product.desc}</p>

      <div class="modal-selector-group">
        <label class="selector-label">Size</label>
        <div class="size-selector" id="sizeSelector">
          ${product.sizes.map(s =>
            `<button class="size-btn${s === selectedSize ? ' active' : ''}" data-size="${s}">${s}</button>`
          ).join('')}
        </div>
      </div>

      <div class="modal-selector-group">
        <label class="selector-label">Quantity</label>
        <div class="qty-selector">
          <button id="modalQtyMinus">−</button>
          <span id="modalQtyDisplay">1</span>
          <button id="modalQtyPlus">+</button>
        </div>
      </div>

      <button class="add-to-cart-btn modal-add-btn" id="modalAddToCart">Add to Cart — ${formatPrice(product.price)}</button>
    </div>
  `;

  modalOverlay.classList.add('show');
  productModal.classList.add('show');
  document.body.style.overflow = 'hidden';

  const sizeSelector = document.getElementById('sizeSelector');
  sizeSelector.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sizeSelector.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = btn.dataset.size;
    });
  });

  const qtyDisplay = document.getElementById('modalQtyDisplay');
  document.getElementById('modalQtyMinus').addEventListener('click', () => {
    if (selectedQty > 1) {
      selectedQty--;
      qtyDisplay.textContent = selectedQty;
      updateModalPrice();
    }
  });
  document.getElementById('modalQtyPlus').addEventListener('click', () => {
    if (selectedQty < 99) {
      selectedQty++;
      qtyDisplay.textContent = selectedQty;
      updateModalPrice();
    }
  });

  document.getElementById('modalAddToCart').addEventListener('click', () => {
    addToCart(product, selectedSize, selectedQty);
    closeModal();
    openCart();
  });
}

function updateModalPrice() {
  const btn = document.getElementById('modalAddToCart');
  if (btn && currentProduct) {
    btn.textContent = `Add to Cart — ${formatPrice(currentProduct.price * selectedQty)}`;
  }
}

function closeModal() {
  modalOverlay.classList.remove('show');
  productModal.classList.remove('show');
  document.body.style.overflow = '';
}

function openCart() {
  cartSidebar.classList.add('show');
  cartOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartSidebar.classList.remove('show');
  cartOverlay.classList.remove('show');
  document.body.style.overflow = '';
}

function addToCart(product, size, qty) {
  const key = cartKey(product, size);
  const existing = cart.find(item => item.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, key, selectedSize: size, qty });
  }
  updateCart();
  flashAddBtn(product.id);
}

function flashAddBtn(id) {
  const btns = document.querySelectorAll(`.add-to-cart-btn[data-id="${id}"]`);
  btns.forEach(btn => {
    btn.textContent = 'Added ✓';
    btn.style.background = '#B8C799';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = 'Add to Cart';
      btn.style.background = '';
      btn.style.color = '';
    }, 1200);
  });
}

function removeFromCart(key) {
  cart = cart.filter(item => item.key !== key);
  updateCart();
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(key);
    return;
  }
  updateCart();
}

function cartTotals() {
  return cart.reduce(
    (acc, item) => {
      acc.items += item.qty;
      acc.price += item.price * item.qty;
      return acc;
    },
    { items: 0, price: 0 }
  );
}

function updateCart() {
  const totals = cartTotals();
  cartCount.textContent = totals.items;
  cartTotal.textContent = formatPrice(totals.price);

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-bag-shopping"></i>
        <p>Your cart is empty</p>
        <span>Add some pieces to get started.</span>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = cart.map(item => {
    const encodedKey = encodeURIComponent(item.key);
    return `
      <div class="cart-item" data-key="${encodedKey}">
        <div class="cart-item-img">
          <img src="${item.image}" alt="${item.imageAlt}" loading="lazy" decoding="async">
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">${item.color} · Size: ${item.selectedSize}</div>
          <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
          <div class="cart-item-meta">${formatPrice(item.price)} each</div>
          <div class="cart-item-qty">
            <button class="qty-minus" data-key="${encodedKey}" aria-label="Decrease quantity">−</button>
            <span>${item.qty}</span>
            <button class="qty-plus" data-key="${encodedKey}" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-key="${encodedKey}" aria-label="Remove ${item.name}"><i class="fas fa-trash-alt"></i></button>
      </div>
    `;
  }).join('');

  document.querySelectorAll('.qty-minus').forEach(btn => {
    btn.addEventListener('click', () => changeQty(decodeURIComponent(btn.dataset.key), -1));
  });
  document.querySelectorAll('.qty-plus').forEach(btn => {
    btn.addEventListener('click', () => changeQty(decodeURIComponent(btn.dataset.key), 1));
  });
  document.querySelectorAll('.cart-item-remove[data-key]').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(decodeURIComponent(btn.dataset.key)));
  });
}

function buildWhatsAppMessage() {
  const totals = cartTotals();
  let msg = 'Hello ECLIPSE, I would like to order:\n\n';
  cart.forEach((item, i) => {
    msg += `${i + 1}. ${item.name} — ${item.color}\n`;
    msg += `   Size: ${item.selectedSize}\n`;
    msg += `   Qty: ${item.qty} × ${formatPrice(item.price)} = ${formatPrice(item.price * item.qty)}\n`;
  });
  msg += `\nTotal (${totals.items} ${totals.items === 1 ? 'item' : 'items'}): ${formatPrice(totals.price)}`;
  return msg;
}

function checkoutWhatsApp() {
  if (cart.length === 0) return;
  const phone = '212619020851';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
  window.open(url, '_blank');
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderProducts(currentFilter);
  });
});

document.querySelectorAll('.category-card').forEach(card => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    const filter = card.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const targetBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
    if (targetBtn) targetBtn.classList.add('active');
    currentFilter = filter;
    renderProducts(filter);
    document.querySelector('#products').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button');
  const input = form.querySelector('input');
  const email = input.value.trim();
  const origText = btn.textContent;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    btn.textContent = 'Invalid email';
    btn.style.background = '#C99591';
    setTimeout(() => { btn.textContent = origText; btn.style.background = ''; }, 2000);
    return;
  }

  btn.textContent = 'Subscribing...';
  btn.disabled = true;

  try {
    const res = await fetch('https://formspree.io/f/mojboppz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    if (!res.ok) throw new Error('Failed');
    btn.textContent = 'Successfully subscribed.';
    btn.style.background = '#B89E8A';
    input.value = '';
  } catch {
    btn.textContent = 'Something went wrong.';
    btn.style.background = '#C99591';
  }
  setTimeout(() => { btn.textContent = origText; btn.style.background = ''; btn.disabled = false; }, 3000);
});

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
checkoutBtn.addEventListener('click', checkoutWhatsApp);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeCart();
  }
});

let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
  if (currentY > 100) {
    navbar.classList.add('scrolled');
    backToTop.classList.add('show');
    if (currentY > lastScrollY) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
  } else {
    navbar.classList.remove('scrolled');
    navbar.classList.remove('hidden');
    backToTop.classList.remove('show');
  }
  lastScrollY = currentY;
});

backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('show');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('show');
  });
});

const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  heroVideo.addEventListener('error', () => {
    document.querySelector('.hero-fallback').style.opacity = '1';
  });
  heroVideo.addEventListener('loadeddata', () => {
    heroVideo.play().catch(() => {});
  });
}

setTimeout(() => loader.classList.add('hidden'), 2000);

renderProducts();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    if (this.getAttribute('href') === '#home' || this.getAttribute('href') === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
