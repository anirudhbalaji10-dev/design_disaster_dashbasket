const products = [
  {
    id: 1,
    name: "Amul Taaza Milk",
    category: "milk",
    pack: "1L",
    price: 68,
    imageLabel: "MILK",
    accent: "milk",
    image: "images/amul-taaza-milk.png",
    description: "Fresh toned milk for everyday tea, coffee, and breakfast.",
    eta: "12 min",
    rating: "4.7",
    highlights: ["1L pack size shown clearly", "Best for tea and breakfast", "Stored fresh for daily delivery"],
    oldPrice: 78,
    brand: "Amul",
    specs: [
      ["Brand", "Amul"],
      ["Category", "Milk"],
      ["Pack size", "1L"],
      ["Shelf life", "2 days"]
    ],
    inStock: true
  },
  {
    id: 2,
    name: "Nandini Cow Milk",
    category: "milk",
    pack: "500ml",
    price: 38,
    imageLabel: "DAIRY",
    accent: "milk",
    image: "images/nandini-cow-milk.png.png",
    description: "Compact milk pack with clear volume and honest pricing.",
    eta: "10 min",
    rating: "4.6",
    highlights: ["500ml compact pack", "Clear daily-use quantity", "Fast delivery for essentials"],
    oldPrice: 48,
    brand: "Nandini",
    specs: [
      ["Brand", "Nandini"],
      ["Category", "Milk"],
      ["Pack size", "500ml"],
      ["Shelf life", "2 days"]
    ],
    inStock: true
  },
  {
    id: 3,
    name: "Robusta Banana",
    category: "fruits",
    pack: "500g",
    price: 42,
    imageLabel: "BANANA",
    accent: "fruits",
    image: "images/robusta-banana.png",
    description: "Fresh banana bunch selected for daily fruit orders.",
    eta: "14 min",
    rating: "4.5",
    highlights: ["Fresh bunch for everyday fruit orders", "500g pack clearly listed", "Easy to add and reorder"],
    oldPrice: 52,
    brand: "Farm Fresh",
    specs: [
      ["Brand", "Farm Fresh"],
      ["Category", "Fruits"],
      ["Pack size", "500g"],
      ["Shelf life", "3 days"]
    ],
    inStock: true
  },
  {
    id: 4,
    name: "Royal Gala Apple",
    category: "fruits",
    pack: "1kg",
    price: 120,
    imageLabel: "APPLE",
    accent: "fruits",
    image: "images/royal-gala-apple.png",
    description: "Crisp apples packed with the weight shown clearly.",
    eta: "16 min",
    rating: "4.8",
    highlights: ["Premium apples in 1kg pack", "Visible weight information", "Fresh fruit delivery support"],
    oldPrice: 138,
    brand: "Royal Gala",
    specs: [
      ["Brand", "Royal Gala"],
      ["Category", "Fruits"],
      ["Pack size", "1kg"],
      ["Shelf life", "4 days"]
    ],
    inStock: false
  },
  {
    id: 5,
    name: "Classic Salted Chips",
    category: "snacks",
    pack: "150g",
    price: 35,
    imageLabel: "CHIPS",
    accent: "snacks",
    image: "images/classic-salted-chips.png",
    description: "Crunchy potato chips in a clearly labeled family snack pack.",
    eta: "11 min",
    rating: "4.4",
    highlights: ["150g snack pack", "Simple pantry add-on", "Clear price for quick checkout"],
    oldPrice: 45,
    brand: "Classic",
    specs: [
      ["Brand", "Classic"],
      ["Category", "Snacks"],
      ["Pack size", "150g"],
      ["Shelf life", "30 days"]
    ],
    inStock: true
  },
  {
    id: 6,
    name: "Fresh Carrot",
    category: "vegetables",
    pack: "500g",
    price: 28,
    imageLabel: "CARROT",
    accent: "vegetables",
    image: "images/fresh-carrot.png",
    description: "Fresh carrots with visible quantity and stable pricing.",
    eta: "13 min",
    rating: "4.5",
    highlights: ["500g vegetable pack", "Useful for everyday cooking", "Fresh stock with stable pricing"],
    oldPrice: 34,
    brand: "Farm Fresh",
    specs: [
      ["Brand", "Farm Fresh"],
      ["Category", "Vegetables"],
      ["Pack size", "500g"],
      ["Shelf life", "4 days"]
    ],
    inStock: true
  }
];

const deliveryFee = 20;
const freeDeliveryThreshold = 150;
const discountThreshold = 200;
const discountAmount = 15;
const handlingFee = 2;

const screens = [...document.querySelectorAll(".screen")];
const navItems = [...document.querySelectorAll(".nav-item")];
const categoryStrip = document.querySelector("#category-strip");
const listCategories = document.querySelector("#list-categories");
const homeGrid = document.querySelector("#home-grid");
const featuredGrid = document.querySelector("#featured-grid");
const listGrid = document.querySelector("#list-grid");
const recentlyViewedSection = document.querySelector("#recently-viewed-section");
const recentlyViewedGrid = document.querySelector("#recently-viewed-grid");
const homeSearch = document.querySelector("#home-search");
const listSearch = document.querySelector("#list-search");
const clearListSearch = document.querySelector("#clear-list-search");
const listShimmer = document.querySelector("#list-shimmer");
const listTitle = document.querySelector("#list-title");
const filterCategory = document.querySelector("#filter-category");
const sortProducts = document.querySelector("#sort-products");
const mobileFilterButtons = [...document.querySelectorAll("[data-mobile-filter]")];
const mobileSortButtons = [...document.querySelectorAll("[data-mobile-sort]")];
const openFilterSheetButton = document.querySelector("#open-filter-sheet");
const filterSheet = document.querySelector("#filter-sheet");
const filterSheetBackdrop = document.querySelector("#filter-sheet-backdrop");
const closeFilterSheetButton = document.querySelector("#close-filter-sheet");
const applyFilterSheetButton = document.querySelector("#apply-filter-sheet");
const sheetCategoryButtons = [...document.querySelectorAll("[data-sheet-category]")];
const sheetSortButtons = [...document.querySelectorAll("[data-sheet-sort]")];
const heroLabel = document.querySelector("#hero-label");
const heroTitle = document.querySelector("#hero-title");
const heroText = document.querySelector("#hero-text");
const heroImage = document.querySelector("#hero-image");
const productBreadcrumb = document.querySelector("#product-breadcrumb");
const productName = document.querySelector("#product-name");
const productImage = document.querySelector("#product-image");
const galleryThumb1 = document.querySelector("#gallery-thumb-1");
const galleryThumb2 = document.querySelector("#gallery-thumb-2");
const galleryThumb3 = document.querySelector("#gallery-thumb-3");
const productBrand = document.querySelector("#product-brand");
const productCategoryTag = document.querySelector("#product-category-tag");
const productRating = document.querySelector("#product-rating");
const productDeliveryChip = document.querySelector("#product-delivery-chip");
const productPack = document.querySelector("#product-pack");
const productPrice = document.querySelector("#product-price");
const productDescription = document.querySelector("#product-description");
const productHighlights = document.querySelector("#product-highlights");
const productSpecs = document.querySelector("#product-specs");
const productUnitGrid = document.querySelector("#product-unit-grid");
const recommendGrid = document.querySelector("#recommend-grid");
const productFeedback = document.querySelector("#product-feedback");
const productQty = document.querySelector("#product-qty");
const cartList = document.querySelector("#cart-list");
const subtotalValue = document.querySelector("#subtotal-value");
const deliveryValueEl = document.querySelector("#delivery-value");
const handlingValueEl = document.querySelector("#handling-value");
const discountValueEl = document.querySelector("#discount-value");
const totalValue = document.querySelector("#total-value");
const stickyTotalValue = document.querySelector("#sticky-total-value");
const checkoutSubtotal = document.querySelector("#checkout-subtotal");
const checkoutDelivery = document.querySelector("#checkout-delivery");
const checkoutDiscount = document.querySelector("#checkout-discount");
const checkoutTotal = document.querySelector("#checkout-total");
const cartCount = document.querySelector("#cart-count");
const confirmationSummary = document.querySelector("#confirmation-summary");
const confirmationEta = document.querySelector("#confirmation-eta");
const paymentInputs = [...document.querySelectorAll('input[name="payment"]')];
const authAction = document.querySelector("#auth-action");
const headerCartCount = document.querySelector("#header-cart-count");
const appToast = document.querySelector("#app-toast");
const homeGreeting = document.querySelector("#home-greeting");
const profileNameEl = document.querySelector("#profile-name");
const profilePhoneEl = document.querySelector("#profile-phone");
const profilePrimaryAction = document.querySelector("#profile-primary-action");
const profileWishlistCount = document.querySelector("#profile-wishlist-count");
const profileLogoutButton = document.querySelector("#profile-logout");
const profileAddressLabel = document.querySelector("#profile-address-label");
const profileAddressNote = document.querySelector("#profile-address-note");
const profilePaymentLabel = document.querySelector("#profile-payment-label");
const profileAddressSmall = document.querySelector("#profile-address-small");
const profilePaymentSmall = document.querySelector("#profile-payment-small");
const profileDetailCard = document.querySelector("#profile-detail-card");
const profileDetailTitle = document.querySelector("#profile-detail-title");
const profileDetailBody = document.querySelector("#profile-detail-body");
const profileDetailFeedback = document.querySelector("#profile-detail-feedback");
const closeProfileDetailButton = document.querySelector("#close-profile-detail");
const nameInput = document.querySelector("#name-input");
const phoneInput = document.querySelector("#phone-input");
const authFeedback = document.querySelector("#auth-feedback");
const cartDeliveryTitle = document.querySelector("#cart-delivery-title");
const cartDeliverySubtitle = document.querySelector("#cart-delivery-subtitle");
const donationToggle = document.querySelector("#donation-toggle");
const tipChips = [...document.querySelectorAll(".tip-chip")];
const couponInput = document.querySelector("#coupon-input");
const applyCouponButton = document.querySelector("#apply-coupon");
const couponFeedback = document.querySelector("#coupon-feedback");
const addressPills = [...document.querySelectorAll(".address-pill")];
const selectedAddressNote = document.querySelector("#selected-address-note");
const suggestionChips = [...document.querySelectorAll(".suggestion-chip")];
const mobileHomeTabs = [...document.querySelectorAll(".mobile-home-tab")];
const timelinePacked = document.querySelector("#timeline-packed");
const timelineOut = document.querySelector("#timeline-out");
const trackOrderButton = document.querySelector("#track-order");

const heroSlides = [
  {
    label: "Fresh arrivals",
    title: "Stock up on daily essentials",
    text: "Get milk, fruits, vegetables, snacks, and daily needs delivered with clear pricing and simple checkout.",
    image: "images/hero-groceries-banner.png"
  },
  {
    label: "Snack corner",
    title: "Late night cravings sorted fast",
    text: "Simple product info, honest pricing, and fast reorder flow for your favorite snacks.",
    image: "images/promo-snacks.png"
  },
  {
    label: "Fresh basket",
    title: "Daily fruits and veggies in one tap",
    text: "Browse clean categories and add fresh picks with visible pack size and delivery details.",
    image: "images/promo-vegetables.png"
  }
];

let currentScreen = "home";
let currentCategory = "all";
let currentQuery = "";
let currentProduct = products[0];
let currentQuantity = 1;
let selectedPayment = "UPI";
let isLoggedIn = false;
let userPhone = "";
let cart = [];
let historyStack = ["home"];
let heroIndex = 0;
let donationEnabled = false;
let selectedTip = 0;
let selectedAddress = "home";
let appliedCoupon = "";
let couponDiscount = 0;
let wishlist = [];
let recentlyViewed = [];
let shimmerTimer;
let toastTimer;
let profileState = {
  name: "Anirudh",
  email: "anirudh@dashbasket.app",
  homeAddress: "Home, Indiranagar, Bengaluru",
  workAddress: "Work, MG Road, Bengaluru",
  preferredPayment: "UPI"
};

function formatPrice(value) {
  return `Rs${value}`;
}

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function filteredProducts() {
  const query = currentQuery.trim().toLowerCase();
  let items = products.filter((product) => {
    const categoryMatch = currentCategory === "all" || product.category === currentCategory;
    const queryMatch =
      query === "" ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.pack.toLowerCase().includes(query);

    return categoryMatch && queryMatch;
  });

  const categoryFilterValue = filterCategory ? filterCategory.value : "all";
  if (categoryFilterValue !== "all") {
    items = items.filter((product) => product.category === categoryFilterValue);
  }

  const sortValue = sortProducts ? sortProducts.value : "popular";
  if (sortValue === "price-low") {
    items = [...items].sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-high") {
    items = [...items].sort((a, b) => b.price - a.price);
  }

  return items;
}

function setActiveCategory(container, category) {
  if (!container) {
    return;
  }
  container.querySelectorAll(".category-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.category === category);
  });
}

function setScreen(target, addToHistory = true) {
  if (!screens.some((screen) => screen.dataset.screen === target)) {
    return;
  }

  if (addToHistory && historyStack[historyStack.length - 1] !== target) {
    historyStack.push(target);
  }

  currentScreen = target;

  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === target);
  });

  if (target !== "list" && listShimmer && listGrid) {
    listShimmer.hidden = true;
    listGrid.hidden = false;
  }

  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.target === target);
  });
}

function updateAuthUI() {
  authAction.textContent = isLoggedIn ? profileState.name : "Login";
  homeGreeting.hidden = !isLoggedIn;
  homeGreeting.textContent = `Hi, ${profileState.name}`;
  profileNameEl.textContent = isLoggedIn ? profileState.name : "Guest account";
  profilePhoneEl.textContent = isLoggedIn
    ? `+91 ${userPhone} · Saved addresses, orders, and payments stay in one place.`
    : "Log in to save your orders, addresses, and payment preferences.";
  profilePrimaryAction.textContent = isLoggedIn ? "Edit profile" : "Log in";
  profileLogoutButton.hidden = !isLoggedIn;
  profileWishlistCount.textContent = `${wishlist.length} item${wishlist.length === 1 ? "" : "s"}`;
}

function showToast(message) {
  appToast.textContent = message;
  appToast.hidden = false;
  appToast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    appToast.classList.remove("visible");
    appToast.hidden = true;
  }, 1800);
}

function updateProfileSummary() {
  profileAddressLabel.textContent = "Home";
  profileAddressNote.textContent = profileState.homeAddress.replace(/^Home,\s*/i, "");
  profilePaymentLabel.textContent = profileState.preferredPayment;
  profileAddressSmall.textContent = profileState.homeAddress;
  profilePaymentSmall.textContent = `${profileState.preferredPayment} set as default`;
}

function renderHero() {
  const slide = heroSlides[heroIndex];
  heroLabel.textContent = slide.label;
  heroTitle.textContent = slide.title;
  heroText.textContent = slide.text;
  heroImage.src = slide.image;
}

function goBack(fallback) {
  if (historyStack.length > 1) {
    historyStack.pop();
    setScreen(historyStack[historyStack.length - 1], false);
    return;
  }

  setScreen(fallback, false);
}

function createProductCard(product) {
  return `
    <article class="product-card" data-id="${product.id}">
      <button class="product-card-hit" type="button" aria-label="Open ${product.name}"></button>
      <button class="wishlist-button ${wishlist.includes(product.id) ? "active" : ""}" data-wishlist-id="${product.id}" type="button" aria-label="Save ${product.name}">&#9825;</button>
      <div class="product-thumb ${product.accent}">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-content">
        <h4 class="product-name">${product.name}</h4>
        <p class="pack-size">${product.pack}</p>
        <div class="price-block">
          <p class="price">${formatPrice(product.price)}</p>
          <span class="strike-price">${formatPrice(product.oldPrice)}</span>
        </div>
        <div class="product-meta">
          <span>${product.rating} rating</span>
          <span class="meta-dot"></span>
          <span>${product.eta}</span>
        </div>
        ${product.inStock ? "" : '<span class="stock-badge out">Out of stock</span>'}
      </div>
      <div class="card-footer">
        <button class="shelf-add-button add-button" type="button" ${product.inStock ? "" : "disabled"}>${product.inStock ? "ADD" : "N/A"}</button>
      </div>
    </article>
  `;
}

function createFeaturedCard(product) {
  return `
    <article class="product-card featured-card" data-id="${product.id}">
      <button class="product-card-hit" type="button" aria-label="Open ${product.name}"></button>
      <button class="wishlist-button ${wishlist.includes(product.id) ? "active" : ""}" data-wishlist-id="${product.id}" type="button" aria-label="Save ${product.name}">&#9825;</button>
      <div class="product-thumb ${product.accent}">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-content">
        <h4 class="product-name">${product.name}</h4>
        <p class="pack-size">${product.pack}</p>
        <div class="price-block">
          <p class="price">${formatPrice(product.price)}</p>
          <span class="strike-price">${formatPrice(product.oldPrice)}</span>
        </div>
        <div class="product-meta">
          <span>${product.rating} rating</span>
          <span class="meta-dot"></span>
          <span>${product.eta}</span>
        </div>
        ${product.inStock ? "" : '<span class="stock-badge out">Out of stock</span>'}
      </div>
      <div class="card-footer">
        <button class="shelf-add-button add-button" type="button" ${product.inStock ? "" : "disabled"}>${product.inStock ? "ADD" : "N/A"}</button>
      </div>
    </article>
  `;
}

function renderHome() {
  const items = filteredProducts();
  homeGrid.innerHTML = items.map(createProductCard).join("");
  featuredGrid.innerHTML = items.slice(0, 4).map(createFeaturedCard).join("");
}

function renderList() {
  const items = filteredProducts();
  if (listTitle) {
    listTitle.textContent = currentCategory === "all" ? "All Products" : titleCase(currentCategory);
  }
  listGrid.innerHTML = items.length
    ? items.map(createProductCard).join("")
    : `<div class="panel-card empty-state-card"><h3>No matching products</h3><p class="body-text">Try another keyword or switch the category filter to find what you need.</p></div>`;
  if (listShimmer) {
    listShimmer.hidden = true;
  }
  listGrid.hidden = false;
}

function renderRecentlyViewed() {
  if (!recentlyViewedSection || !recentlyViewedGrid) {
    return;
  }

  if (!recentlyViewed.length) {
    recentlyViewedSection.hidden = true;
    recentlyViewedGrid.innerHTML = "";
    return;
  }

  const items = recentlyViewed
    .map((id) => products.find((item) => item.id === id))
    .filter(Boolean);

  recentlyViewedSection.hidden = false;
  recentlyViewedGrid.innerHTML = items.map(createFeaturedCard).join("");
}

function logoutUser() {
  isLoggedIn = false;
  userPhone = "";
  nameInput.value = "";
  phoneInput.value = "";
  authFeedback.hidden = true;
  updateAuthUI();
  setScreen("home");
}

function closeProfileDetail() {
  profileDetailCard.hidden = true;
  profileDetailFeedback.hidden = true;
  profileDetailBody.innerHTML = "";
}

function openProfileDetail(title, content) {
  profileDetailTitle.textContent = title;
  profileDetailBody.innerHTML = content;
  profileDetailFeedback.hidden = true;
  profileDetailCard.hidden = false;
  profileDetailCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderProfileEditor() {
  openProfileDetail("Edit Profile", `
    <div class="profile-form-grid">
      <div class="profile-form-field">
        <label for="edit-profile-name">Full name</label>
        <input id="edit-profile-name" type="text" value="${profileState.name}">
      </div>
      <div class="profile-form-field">
        <label for="edit-profile-phone">Mobile number</label>
        <input id="edit-profile-phone" type="text" value="${isLoggedIn ? userPhone : ""}" placeholder="Enter 10 digit number">
      </div>
      <div class="profile-form-field full">
        <label for="edit-profile-email">Email</label>
        <input id="edit-profile-email" type="email" value="${profileState.email}">
      </div>
    </div>
    <div class="profile-inline-actions">
      <button class="primary-button" data-profile-save="profile" type="button">Save changes</button>
    </div>
  `);
}

function renderAddressEditor() {
  openProfileDetail("Saved Addresses", `
    <div class="profile-form-grid">
      <div class="profile-form-field full">
        <label for="edit-home-address">Home address</label>
        <textarea id="edit-home-address">${profileState.homeAddress}</textarea>
      </div>
      <div class="profile-form-field full">
        <label for="edit-work-address">Work address</label>
        <textarea id="edit-work-address">${profileState.workAddress}</textarea>
      </div>
    </div>
    <div class="profile-inline-actions">
      <button class="primary-button" data-profile-save="address" type="button">Save address</button>
    </div>
  `);
}

function renderPaymentEditor() {
  openProfileDetail("Preferred Payment", `
    <div class="profile-choice-row">
      <label class="profile-choice">
        <input type="radio" name="profile-payment" value="UPI" ${profileState.preferredPayment === "UPI" ? "checked" : ""}>
        <span>UPI</span>
      </label>
      <label class="profile-choice">
        <input type="radio" name="profile-payment" value="Card" ${profileState.preferredPayment === "Card" ? "checked" : ""}>
        <span>Card</span>
      </label>
      <label class="profile-choice">
        <input type="radio" name="profile-payment" value="Cash on Delivery" ${profileState.preferredPayment === "Cash on Delivery" ? "checked" : ""}>
        <span>Cash on Delivery</span>
      </label>
    </div>
    <div class="profile-inline-actions">
      <button class="primary-button" data-profile-save="payment" type="button">Save payment method</button>
    </div>
  `);
}

function renderOrdersPanel() {
  openProfileDetail("Recent Orders", `
    <div class="profile-order-list">
      <article class="profile-order-card">
        <div class="profile-order-top">
          <strong>Order #DB2481</strong>
          <span class="profile-order-status">Delivered</span>
        </div>
        <p>Milk, bananas, and chips · Rs148</p>
        <div class="profile-inline-actions">
          <button class="secondary-button" data-profile-open="tracking" type="button">Track current order</button>
          <button class="primary-button" data-profile-open="list" type="button">Reorder items</button>
        </div>
      </article>
      <article class="profile-order-card">
        <div class="profile-order-top">
          <strong>Order #DB2419</strong>
          <span class="profile-order-status">Completed</span>
        </div>
        <p>Carrots and pantry essentials · Rs96</p>
      </article>
    </div>
  `);
}

function renderSupportPanel(type = "general") {
  const cards = {
    orders: {
      title: "Order Help",
      intro: "Get help with tracking, delayed delivery, or missing items."
    },
    payments: {
      title: "Payment & Refund Help",
      intro: "See refund timelines, coupon help, and payment troubleshooting."
    },
    general: {
      title: "Help & Support",
      intro: "Quick answers for delivery, payments, and account questions."
    }
  };

  const content = cards[type] || cards.general;
  openProfileDetail(content.title, `
    <div class="profile-support-list">
      <article class="profile-support-card">
        <strong>${content.title}</strong>
        <p>${content.intro}</p>
      </article>
      <article class="profile-support-card">
        <strong>Call support</strong>
        <p>Available from 7 AM to 11 PM for active orders.</p>
      </article>
      <article class="profile-support-card">
        <strong>Chat with us</strong>
        <p>Typical response time under 2 minutes for delivery queries.</p>
      </article>
    </div>
  `);
}

function renderProduct(product) {
  currentProduct = product;
  currentQuantity = 1;
  productBreadcrumb.textContent = `Home / ${titleCase(product.category)} / ${product.name}`;
  productBrand.textContent = product.brand;
  productCategoryTag.textContent = titleCase(product.category);
  productName.textContent = product.name;
  productRating.textContent = `${product.rating} ★`;
  productDeliveryChip.textContent = `${product.eta} delivery`;
  productImage.className = `product-image large ${product.accent}`;
  productImage.innerHTML = `<img src="${product.image}" alt="${product.name}">`;
  galleryThumb1.src = product.image;
  galleryThumb1.alt = product.name;
  galleryThumb2.src = product.image;
  galleryThumb2.alt = `${product.name} side view`;
  galleryThumb3.src = product.image;
  galleryThumb3.alt = `${product.name} details`;
  productPack.textContent = product.pack;
  productPrice.textContent = formatPrice(product.price);
  productDescription.textContent = product.description;
  productHighlights.innerHTML = product.highlights.map((item) => `<li>${item}</li>`).join("");
  productSpecs.innerHTML = product.specs.map(([label, value]) => `
    <div class="spec-row">
      <span>${label}</span>
      <strong>${value}</strong>
    </div>
  `).join("");
  productUnitGrid.innerHTML = `
    <button class="unit-card active" type="button">
      <span>${product.pack}</span>
      <strong>${formatPrice(product.price)}</strong>
    </button>
    <button class="unit-card" type="button">
      <span>${product.category === "milk" ? "1L" : "Family pack"}</span>
      <strong>${formatPrice(product.price + Math.max(12, Math.round(product.price * 0.65)))}</strong>
    </button>
  `;
  productQty.textContent = "1";
  productFeedback.hidden = true;
  recentlyViewed = [product.id, ...recentlyViewed.filter((id) => id !== product.id)].slice(0, 6);
  renderRecommendations(product);
}

function renderRecommendations(product) {
  const related = products
    .filter((item) => item.id !== product.id && (item.category === product.category || item.inStock))
    .slice(0, 4);

  recommendGrid.innerHTML = related.map((item) => `
    <article class="recommend-card" data-id="${item.id}">
      <button class="product-card-hit" type="button" aria-label="Open ${item.name}"></button>
      <div class="recommend-thumb ${item.accent}">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="recommend-copy">
        <strong>${item.name}</strong>
        <span>${item.pack}</span>
        <span>${formatPrice(item.price)}</span>
      </div>
    </article>
  `).join("");
}

function getTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = subtotal === 0 ? 0 : subtotal >= freeDeliveryThreshold ? 0 : deliveryFee;
  const baseDiscount = subtotal >= discountThreshold ? discountAmount : 0;
  const discount = baseDiscount + couponDiscount;
  const handling = subtotal === 0 ? 0 : handlingFee;
  const donation = donationEnabled && subtotal > 0 ? 1 : 0;
  const tip = subtotal === 0 ? 0 : selectedTip;
  const total = subtotal + delivery + handling + donation + tip - discount;

  return { subtotal, delivery, handling, donation, tip, discount, total };
}

function renderCart() {
  if (cart.length === 0) {
    cartList.innerHTML = `
      <div class="panel-card">
        <p class="body-text">Your cart is empty. Add products from Home or Search to continue.</p>
      </div>
    `;
  } else {
    cartList.innerHTML = cart.map((item) => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-thumb">
          <img src="${products.find((product) => product.id === item.id)?.image || ""}" alt="${item.name}">
        </div>
        <div class="cart-item-meta">
          <strong>${item.name}</strong>
          <span class="pack-size">${item.pack}</span>
          <span class="price">${formatPrice(item.price)}</span>
          <button class="remove-button" type="button">Remove</button>
        </div>
        <div class="cart-actions">
          <button class="decrease" type="button" aria-label="Decrease quantity">-</button>
          <span class="cart-qty">${item.qty}</span>
          <button class="increase" type="button" aria-label="Increase quantity">+</button>
        </div>
      </div>
    `).join("");
  }

  const totals = getTotals();
  const shipmentItems = cart.reduce((sum, item) => sum + item.qty, 0);

  subtotalValue.textContent = formatPrice(totals.subtotal);
  deliveryValueEl.textContent = formatPrice(totals.delivery);
  handlingValueEl.textContent = formatPrice(totals.handling);
  discountValueEl.textContent = formatPrice(totals.discount);
  totalValue.textContent = formatPrice(totals.total);
  stickyTotalValue.textContent = formatPrice(totals.total);
  checkoutSubtotal.textContent = formatPrice(totals.subtotal);
  checkoutDelivery.textContent = formatPrice(totals.delivery + totals.handling + totals.donation + totals.tip);
  checkoutDiscount.textContent = formatPrice(totals.discount);
  checkoutTotal.textContent = formatPrice(totals.total);
  cartDeliveryTitle.textContent = shipmentItems > 0 ? "Delivery in 16 minutes" : "Add items to continue";
  cartDeliverySubtitle.textContent = shipmentItems > 0 ? `Shipment of ${shipmentItems} item${shipmentItems > 1 ? "s" : ""}` : "Shipment of 0 items";
  const itemCount = String(shipmentItems);
  cartCount.textContent = itemCount;
  headerCartCount.textContent = itemCount;
  tipChips.forEach((chip) => {
    chip.classList.toggle("active", Number(chip.dataset.tip) === selectedTip);
  });
}

function updateCategory(category) {
  currentCategory = category;
  setActiveCategory(categoryStrip, category);
  setActiveCategory(listCategories, category);
  mobileHomeTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.homeCategory === category);
  });
  mobileFilterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mobileFilter === category || (category === "all" && button.dataset.mobileFilter === "all"));
  });
  if (filterCategory) {
    filterCategory.value = category;
  }
  renderHome();
  renderList();
}

function syncSearch(value) {
  currentQuery = value.trim();
  homeSearch.value = currentQuery;
  listSearch.value = currentQuery;
  updateClearSearchButton();
  renderHome();
  renderList();
}

function updateClearSearchButton() {
  if (!clearListSearch) {
    return;
  }
  clearListSearch.hidden = listSearch.value.trim() === "";
}

function addToCart(product, quantity = 1) {
  if (!product.inStock) {
    productFeedback.hidden = false;
    productFeedback.textContent = `${product.name} is currently unavailable. Try a similar product below.`;
    return;
  }

  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.qty += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      pack: product.pack,
      price: product.price,
      qty: quantity
    });
  }

  renderCart();
  showToast(`${product.name} added successfully.`);
}

function openProduct(productId) {
  const product = products.find((item) => item.id === Number(productId));
  if (!product) {
    return;
  }

  renderProduct(product);
  setScreen("product");
}

function showConfirmation() {
  const totals = getTotals();
  confirmationSummary.textContent = `${profileState.name}, your order is confirmed with ${selectedPayment} for ${formatPrice(totals.total)}.`;
  confirmationEta.textContent = "ETA: 10-20 minutes";
  timelinePacked.classList.add("active");
  timelineOut.classList.add("active");
  setScreen("confirmation");
}

function showListShimmer() {
  if (!listShimmer || !listGrid || currentScreen !== "list") {
    return;
  }

  listShimmer.hidden = false;
  listGrid.hidden = true;
  clearTimeout(shimmerTimer);
  shimmerTimer = setTimeout(() => {
    listShimmer.hidden = true;
    listGrid.hidden = false;
  }, 220);
}

function openFilterSheet() {
  if (filterSheet && filterSheetBackdrop) {
    filterSheet.hidden = false;
    filterSheetBackdrop.hidden = false;
  }
}

function closeFilterSheet() {
  if (filterSheet && filterSheetBackdrop) {
    filterSheet.hidden = true;
    filterSheetBackdrop.hidden = true;
  }
}

function bindGrid(container) {
  container.addEventListener("click", (event) => {
    const wishlistButton = event.target.closest(".wishlist-button");
    if (wishlistButton) {
      const wishId = Number(wishlistButton.dataset.wishlistId);
      wishlist = wishlist.includes(wishId)
        ? wishlist.filter((id) => id !== wishId)
        : [...wishlist, wishId];
      renderHome();
      renderList();
      renderProduct(currentProduct);
      updateAuthUI();
      return;
    }

    const card = event.target.closest(".product-card");
    if (!card) {
      return;
    }

    const productId = card.dataset.id;

    if (event.target.closest(".add-button")) {
      const product = products.find((item) => item.id === Number(productId));
      if (product) {
        addToCart(product, 1);
      }
      return;
    }

    openProduct(productId);
  });
}

document.querySelector("#list-back").addEventListener("click", () => goBack("home"));
document.querySelector("#product-back").addEventListener("click", () => goBack("list"));
document.querySelector("#checkout-back").addEventListener("click", () => goBack("cart"));
document.querySelector("#auth-back").addEventListener("click", () => goBack("home"));
document.querySelector("#go-checkout").addEventListener("click", () => setScreen("checkout"));
document.querySelector("#place-order").addEventListener("click", showConfirmation);
document.querySelector("#tracking-back").addEventListener("click", () => goBack("confirmation"));
document.querySelector("#shop-offers").addEventListener("click", () => {
  updateCategory("all");
  setScreen("list");
});
document.querySelector("#hero-prev").addEventListener("click", () => {
  heroIndex = (heroIndex - 1 + heroSlides.length) % heroSlides.length;
  renderHero();
});
document.querySelector("#hero-next").addEventListener("click", () => {
  heroIndex = (heroIndex + 1) % heroSlides.length;
  renderHero();
});
document.querySelector("#view-all-top").addEventListener("click", () => setScreen("list"));
document.querySelector("#add-product-to-cart").addEventListener("click", () => {
  addToCart(currentProduct, currentQuantity);
  if (currentProduct.inStock) {
    productFeedback.hidden = false;
    productFeedback.textContent = `${currentProduct.name} added to cart.`;
  }
});
document.querySelector("#increase-qty").addEventListener("click", () => {
  currentQuantity += 1;
  productQty.textContent = String(currentQuantity);
});
document.querySelector("#decrease-qty").addEventListener("click", () => {
  currentQuantity = Math.max(1, currentQuantity - 1);
  productQty.textContent = String(currentQuantity);
});

productUnitGrid.addEventListener("click", (event) => {
  const unitCard = event.target.closest(".unit-card");
  if (!unitCard) {
    return;
  }

  productUnitGrid.querySelectorAll(".unit-card").forEach((card) => {
    card.classList.toggle("active", card === unitCard);
  });

  const pack = unitCard.querySelector("span")?.textContent;
  const price = unitCard.querySelector("strong")?.textContent;
  if (pack) {
    productPack.textContent = pack;
  }
  if (price) {
    productPrice.textContent = price;
  }
});

paymentInputs.forEach((input) => {
  input.addEventListener("change", () => {
    selectedPayment = input.value;
  });
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    setScreen(item.dataset.target);
  });
});

document.querySelectorAll("[data-home-target]").forEach((button) => {
  button.addEventListener("click", () => {
    setScreen(button.dataset.homeTarget);
  });
});

document.querySelectorAll("[data-target-screen]").forEach((button) => {
  button.addEventListener("click", () => {
    setScreen(button.dataset.targetScreen);
  });
});

authAction.addEventListener("click", () => {
  if (isLoggedIn) {
    setScreen("profile");
    return;
  }

  authFeedback.hidden = true;
  nameInput.value = profileState.name === "Anirudh" ? "" : profileState.name;
  setScreen("auth");
});

document.querySelector("#login-continue").addEventListener("click", () => {
  const enteredName = nameInput.value.trim();
  const mobileNumber = phoneInput.value.trim();

  if (enteredName.length < 2) {
    authFeedback.hidden = false;
    authFeedback.textContent = "Please enter your name.";
    return;
  }

  if (!/^\d{10}$/.test(mobileNumber)) {
    authFeedback.hidden = false;
    authFeedback.textContent = "Please enter a valid 10 digit mobile number.";
    return;
  }

  isLoggedIn = true;
  profileState.name = enteredName;
  userPhone = mobileNumber;
  authFeedback.hidden = false;
  authFeedback.textContent = `Welcome, ${profileState.name}. Logged in with +91 ${userPhone}.`;
  updateAuthUI();
  setScreen("home");
});

profilePrimaryAction.addEventListener("click", () => {
  if (isLoggedIn) {
    renderProfileEditor();
    return;
  }

  authFeedback.hidden = true;
  nameInput.value = profileState.name === "Anirudh" ? "" : profileState.name;
  setScreen("auth");
});

profileLogoutButton.addEventListener("click", logoutUser);
closeProfileDetailButton.addEventListener("click", closeProfileDetail);

document.querySelectorAll("[data-profile-action]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.profileAction;

    if (action === "orders" || action === "support-orders") {
      if (action === "support-orders") {
        renderSupportPanel("orders");
      } else {
        renderOrdersPanel();
      }
      return;
    }

    if (action === "wishlist") {
      openProfileDetail("Wishlist", `
        <div class="profile-support-list">
          <article class="profile-support-card">
            <strong>Saved items</strong>
            <p>You have ${wishlist.length} item${wishlist.length === 1 ? "" : "s"} in your wishlist right now.</p>
          </article>
          <div class="profile-inline-actions">
            <button class="primary-button" data-profile-open="list" type="button">Browse saved items</button>
          </div>
        </div>
      `);
      return;
    }

    if (action === "payments") {
      renderPaymentEditor();
      return;
    }

    if (action === "support-payments") {
      renderSupportPanel("payments");
      return;
    }

    if (action === "address") {
      renderAddressEditor();
      return;
    }

    if (action === "support-chat") {
      renderSupportPanel("general");
    }
  });
});

profileDetailBody.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-profile-save]");
  const openButton = event.target.closest("[data-profile-open]");

  if (openButton) {
    const target = openButton.dataset.profileOpen;
    if (target === "tracking") {
      setScreen("tracking");
      return;
    }

    if (target === "list") {
      updateCategory("all");
      syncSearch("");
      setScreen("list");
    }
    return;
  }

  if (!saveButton) {
    return;
  }

  const action = saveButton.dataset.profileSave;

  if (action === "profile") {
    const nameInput = document.querySelector("#edit-profile-name");
    const phoneInputField = document.querySelector("#edit-profile-phone");
    const emailInput = document.querySelector("#edit-profile-email");
    profileState.name = nameInput.value.trim() || "Anirudh";
    profileState.email = emailInput.value.trim() || profileState.email;
    if (/^\d{10}$/.test(phoneInputField.value.trim())) {
      userPhone = phoneInputField.value.trim();
      isLoggedIn = true;
    }
  }

  if (action === "address") {
    const homeAddressInput = document.querySelector("#edit-home-address");
    const workAddressInput = document.querySelector("#edit-work-address");
    profileState.homeAddress = homeAddressInput.value.trim() || profileState.homeAddress;
    profileState.workAddress = workAddressInput.value.trim() || profileState.workAddress;
  }

  if (action === "payment") {
    const selected = document.querySelector('input[name="profile-payment"]:checked');
    if (selected) {
      profileState.preferredPayment = selected.value;
      selectedPayment = selected.value;
      paymentInputs.forEach((input) => {
        input.checked = input.value === selected.value;
      });
    }
  }

  updateProfileSummary();
  updateAuthUI();
  profileDetailFeedback.hidden = false;
  profileDetailFeedback.textContent = "Saved successfully.";
});

donationToggle.addEventListener("change", () => {
  donationEnabled = donationToggle.checked;
  renderCart();
});

applyCouponButton.addEventListener("click", () => {
  const couponCode = couponInput.value.trim().toUpperCase();

  if (couponCode === "SAVE20" && getTotals().subtotal >= 120) {
    appliedCoupon = couponCode;
    couponDiscount = 20;
    couponFeedback.textContent = "SAVE20 applied successfully. Extra Rs20 discount added.";
  } else if (couponCode === "SAVE20") {
    appliedCoupon = "";
    couponDiscount = 0;
    couponFeedback.textContent = "Add items worth Rs120 or more to use SAVE20.";
  } else {
    appliedCoupon = "";
    couponDiscount = 0;
    couponFeedback.textContent = "Coupon not recognized. Try SAVE20.";
  }

  renderCart();
});

tipChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    selectedTip = Number(chip.dataset.tip);
    renderCart();
  });
});

trackOrderButton.addEventListener("click", () => {
  setScreen("tracking");
});

document.querySelectorAll("[data-home-category]").forEach((button) => {
  button.addEventListener("click", () => {
    updateCategory(button.dataset.homeCategory);
    setScreen("list");
  });
});

[categoryStrip, listCategories].filter(Boolean).forEach((container) => {
  container.addEventListener("click", (event) => {
    const chip = event.target.closest(".category-chip");
    if (!chip) {
      return;
    }
    updateCategory(chip.dataset.category);
    if (container === categoryStrip) {
      setScreen("list");
    }
  });
});

homeSearch.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") {
    return;
  }

  syncSearch(homeSearch.value);
  setScreen("list");
});

listSearch.addEventListener("input", () => {
  syncSearch(listSearch.value);
});

clearListSearch.addEventListener("click", () => {
  syncSearch("");
  listSearch.focus();
});

if (openFilterSheetButton) {
  openFilterSheetButton.addEventListener("click", openFilterSheet);
}

if (closeFilterSheetButton) {
  closeFilterSheetButton.addEventListener("click", closeFilterSheet);
}

if (filterSheetBackdrop) {
  filterSheetBackdrop.addEventListener("click", closeFilterSheet);
}

suggestionChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    syncSearch(chip.dataset.suggestion);
    setScreen("list");
  });
});

if (filterCategory) {
  filterCategory.addEventListener("change", () => {
    currentCategory = filterCategory.value === "all" ? currentCategory : currentCategory;
    renderHome();
    renderList();
    showListShimmer();
  });
}

if (sortProducts) {
  sortProducts.addEventListener("change", () => {
    renderList();
    showListShimmer();
  });
}

mobileFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    updateCategory(button.dataset.mobileFilter);
    showListShimmer();
  });
});

mobileSortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentSort = sortProducts.value;
    sortProducts.value = currentSort === "popular" ? "price-low" : currentSort === "price-low" ? "price-high" : "popular";
    button.textContent =
      sortProducts.value === "popular"
        ? "Sort"
        : sortProducts.value === "price-low"
          ? "Price Low"
          : "Price High";
    renderList();
    showListShimmer();
  });
});

sheetCategoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sheetCategoryButtons.forEach((item) => item.classList.toggle("active", item === button));
  });
});

sheetSortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sheetSortButtons.forEach((item) => item.classList.toggle("active", item === button));
  });
});

if (applyFilterSheetButton) {
  applyFilterSheetButton.addEventListener("click", () => {
    const chosenCategory = sheetCategoryButtons.find((button) => button.classList.contains("active"))?.dataset.sheetCategory || "all";
    const chosenSort = sheetSortButtons.find((button) => button.classList.contains("active"))?.dataset.sheetSort || "popular";
    if (filterCategory) {
      filterCategory.value = chosenCategory;
    }
    if (sortProducts) {
      sortProducts.value = chosenSort;
    }
    updateCategory(chosenCategory);
    renderList();
    showListShimmer();
    closeFilterSheet();
  });
}

addressPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    selectedAddress = pill.dataset.address;
    addressPills.forEach((item) => item.classList.toggle("active", item === pill));
    selectedAddressNote.textContent = selectedAddress === "home" ? "Delivering to Home address." : "Delivering to Work address.";
  });
});

bindGrid(homeGrid);
bindGrid(featuredGrid);
bindGrid(listGrid);
bindGrid(recommendGrid);

cartList.addEventListener("click", (event) => {
  const cartItem = event.target.closest(".cart-item");
  if (!cartItem) {
    return;
  }

  const itemId = Number(cartItem.dataset.id);
  const item = cart.find((entry) => entry.id === itemId);
  if (!item) {
    return;
  }

  if (event.target.closest(".increase")) {
    item.qty += 1;
  } else if (event.target.closest(".decrease")) {
    item.qty = Math.max(1, item.qty - 1);
  } else if (event.target.closest(".remove-button")) {
    cart = cart.filter((entry) => entry.id !== itemId);
  }

  renderCart();
});

renderHome();
renderList();
renderProduct(products[0]);
renderCart();
setActiveCategory(categoryStrip, "all");
setActiveCategory(listCategories, "all");
setScreen("home", false);
updateProfileSummary();
updateAuthUI();
renderHero();
updateClearSearchButton();
