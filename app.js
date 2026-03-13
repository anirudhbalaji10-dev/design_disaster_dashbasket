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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
const homeSearch = document.querySelector("#home-search");
const listSearch = document.querySelector("#list-search");
const listTitle = document.querySelector("#list-title");
const filterCategory = document.querySelector("#filter-category");
const sortProducts = document.querySelector("#sort-products");
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
const phoneInput = document.querySelector("#phone-input");
const authFeedback = document.querySelector("#auth-feedback");
const cartDeliveryTitle = document.querySelector("#cart-delivery-title");
const cartDeliverySubtitle = document.querySelector("#cart-delivery-subtitle");
const donationToggle = document.querySelector("#donation-toggle");
const tipChips = [...document.querySelectorAll(".tip-chip")];
const addressPills = [...document.querySelectorAll(".address-pill")];
const selectedAddressNote = document.querySelector("#selected-address-note");
const suggestionChips = [...document.querySelectorAll(".suggestion-chip")];
const timelinePacked = document.querySelector("#timeline-packed");
const timelineOut = document.querySelector("#timeline-out");

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

  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.target === target);
  });
}

function updateAuthUI() {
  authAction.textContent = isLoggedIn ? "Logout" : "Login";
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
      <div class="product-thumb ${product.accent}">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-content">
        <div class="product-meta">
          <span>${product.eta}</span>
          <span class="meta-dot"></span>
          <span>${product.rating} rating</span>
        </div>
        <h4 class="product-name">${product.name}</h4>
        <p class="pack-size">${product.pack}</p>
      </div>
      <div class="card-footer">
        <div class="price-block">
          <p class="price">${formatPrice(product.price)}</p>
          <span class="strike-price">${formatPrice(product.oldPrice)}</span>
        </div>
        <button class="shelf-add-button add-button" type="button">ADD</button>
      </div>
    </article>
  `;
}

function createFeaturedCard(product) {
  return `
    <article class="product-card featured-card" data-id="${product.id}">
      <button class="product-card-hit" type="button" aria-label="Open ${product.name}"></button>
      <div class="product-thumb ${product.accent}">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-content">
        <div class="product-meta">
          <span class="meta-pill">${product.eta}</span>
          <span>${product.rating} rating</span>
        </div>
        <h4 class="product-name">${product.name}</h4>
        <p class="pack-size">${product.pack}</p>
      </div>
      <div class="card-footer">
        <div class="price-block">
          <p class="price">${formatPrice(product.price)}</p>
          <span class="strike-price">${formatPrice(product.oldPrice)}</span>
        </div>
        <button class="shelf-add-button add-button" type="button">ADD</button>
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
  listTitle.textContent = currentCategory === "all" ? "All Products" : titleCase(currentCategory);
  listGrid.innerHTML = items.map(createProductCard).join("");
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
}

function getTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = subtotal === 0 ? 0 : subtotal >= freeDeliveryThreshold ? 0 : deliveryFee;
  const discount = subtotal >= discountThreshold ? discountAmount : 0;
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
  renderHome();
  renderList();
}

function syncSearch(value) {
  currentQuery = value.trim();
  homeSearch.value = currentQuery;
  listSearch.value = currentQuery;
  renderHome();
  renderList();
}

function addToCart(product, quantity = 1) {
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
  confirmationSummary.textContent = `Order confirmed with ${selectedPayment} for ${formatPrice(totals.total)}.`;
  confirmationEta.textContent = "ETA: 10-20 minutes";
  timelinePacked.classList.add("active");
  timelineOut.classList.add("active");
  setScreen("confirmation");
}

function bindGrid(container) {
  container.addEventListener("click", (event) => {
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
  productFeedback.hidden = false;
  productFeedback.textContent = `${currentProduct.name} added to cart.`;
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
    isLoggedIn = false;
    userPhone = "";
    phoneInput.value = "";
    authFeedback.hidden = true;
    updateAuthUI();
    setScreen("home");
    return;
  }

  authFeedback.hidden = true;
  setScreen("auth");
});

document.querySelector("#login-continue").addEventListener("click", () => {
  const mobileNumber = phoneInput.value.trim();

  if (!/^\d{10}$/.test(mobileNumber)) {
    authFeedback.hidden = false;
    authFeedback.textContent = "Please enter a valid 10 digit mobile number.";
    return;
  }

  isLoggedIn = true;
  userPhone = mobileNumber;
  authFeedback.hidden = false;
  authFeedback.textContent = `Logged in with +91 ${userPhone}.`;
  updateAuthUI();
  setScreen("home");
});

donationToggle.addEventListener("change", () => {
  donationEnabled = donationToggle.checked;
  renderCart();
});

tipChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    selectedTip = Number(chip.dataset.tip);
    renderCart();
  });
});

document.querySelectorAll("[data-home-category]").forEach((button) => {
  button.addEventListener("click", () => {
    updateCategory(button.dataset.homeCategory);
    setScreen("list");
  });
});

[categoryStrip, listCategories].forEach((container) => {
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
  });
}

if (sortProducts) {
  sortProducts.addEventListener("change", () => {
    renderList();
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
updateAuthUI();
renderHero();
