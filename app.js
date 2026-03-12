const products = [
  {
    id: 1,
    name: "Milko Lite Toned Milk",
    subtitle: "Sponsored because it converts better",
    price: "Rs68",
    thumb: "1L",
    badges: ["Sponsored", "10 min", "Best match"],
  },
  {
    id: 2,
    name: "FarmFresh Cow Milk",
    subtitle: "Exact match but listed lower",
    price: "Rs72",
    thumb: "FF",
    badges: ["Exact", "Popular"],
  },
  {
    id: 3,
    name: "Milko Lite Family Pack",
    subtitle: "Volume shown after add to cart",
    price: "Rs104",
    thumb: "XL",
    badges: ["Fastest", "Value"],
  },
  {
    id: 4,
    name: "Choco Cereal Crunch",
    subtitle: "Promoted breakfast item inside milk search",
    price: "Rs89",
    thumb: "CC",
    badges: ["Promoted", "Combo"],
  },
  {
    id: 5,
    name: "Butter Cookies",
    subtitle: "Frequently bought with milk, shown as a match",
    price: "Rs49",
    thumb: "BC",
    badges: ["Popular", "Snack"],
  },
];

const screens = document.querySelectorAll(".screen");
const navButtons = document.querySelectorAll(".nav-button");
const filterButtons = document.querySelectorAll(".filter-chip");
const sortButtons = document.querySelectorAll(".sort-button");
const homeProducts = document.querySelector("#home-products");
const browseProducts = document.querySelector("#browse-products");
const productTitle = document.querySelector("#product-title");
const productPrice = document.querySelector("#product-price");
const productSecondaryPrice = document.querySelector("#product-secondary-price");
const deliveryFee = document.querySelector("#delivery-fee");
const itemTotal = document.querySelector("#item-total");
const cartTotal = document.querySelector("#cart-total");
const payableTotal = document.querySelector("#payable-total");
const etaText = document.querySelector("#eta-text");
const couponStatus = document.querySelector("#coupon-status");
const couponConflict = document.querySelector("#coupon-conflict");
const orderStatus = document.querySelector("#order-status");
const qtyCount = document.querySelector("#qty-count");
const protectionFee = document.querySelector("#protection-fee");
const subscriptionFee = document.querySelector("#subscription-fee");
const orderLog = document.querySelector("#order-log");
const navFeedback = document.querySelector("#nav-feedback");
const adOverlay = document.querySelector("#ad-overlay");
const adVideo = document.querySelector("#ad-video");
const adStatus = document.querySelector("#ad-status");
const verificationOverlay = document.querySelector("#verification-overlay");
const verificationTitle = document.querySelector("#verification-title");
const verificationCopy = document.querySelector("#verification-copy");
const verificationActions = document.querySelector("#verification-actions");
const verificationNo = document.querySelector("#verification-no");
const verificationYes = document.querySelector("#verification-yes");
const miniGame = document.querySelector("#mini-game");
const miniGameGrid = document.querySelector("#mini-game-grid");
const gameStatus = document.querySelector("#game-status");
const searchInput = document.querySelector("#search");
const searchTrigger = document.querySelector("#search-trigger");
const hintChips = document.querySelectorAll(".hint-chip");
const resultsCount = document.querySelector("#results-count");
const termsCheck = document.querySelector("#terms-check");
const globalToast = document.querySelector("#global-toast");
const variantNote = document.querySelector("#variant-note");
const displaySavings = document.querySelector("#display-savings");
const limitedBanner = document.querySelector("#limited-banner");
const productCardLarge = document.querySelector(".product-card-large");
const savingsBanner = document.querySelector(".savings-banner");
const paymentWarning = document.querySelector("#payment-warning");
const paymentOptions = document.querySelectorAll('input[name="payment"]');

let currentFilter = "all";
let currentSort = "relevance";
let quantity = 1;
let orderTimers = [];
let pendingProduct = null;
let toastTimer = null;
let limitedOfferTimer = null;
let limitedOfferSeconds = 119;
let limitedOfferResetDone = false;
let pendingOrderVerification = false;
const navState = {
  browseBlockedOnce: false,
  cartBlockedOnce: false,
  checkoutBlockedOnce: false,
};

function renderProductCard(product, ctaLabel) {
  const badges = product.badges
    .map((badge, index) => `<span class="badge ${index === 0 ? "promoted" : ""}">${badge}</span>`)
    .join("");

  return `
    <article class="product-tile" data-id="${product.id}">
      <div class="product-thumb">${product.thumb}</div>
      <div class="product-info">
        <h4>${product.name}</h4>
        <p>${product.subtitle}</p>
        <div class="badge-row">${badges}</div>
      </div>
      <div class="product-side">
        <span class="price">${product.price}</span>
        <button class="mini-button" type="button">${ctaLabel}</button>
      </div>
    </article>
  `;
}

function setScreen(target) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === target);
  });

  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.target === target);
    button.classList.remove("pending");
  });
}

function showNavFeedback(message) {
  navFeedback.textContent = message;
  navFeedback.classList.add("active");
}

function clearNavFeedback() {
  navFeedback.textContent = "";
  navFeedback.classList.remove("active");
}

function addOrderLog(message, type) {
  const entry = document.createElement("div");
  entry.className = `log-entry ${type}`;
  entry.textContent = message;
  orderLog.prepend(entry);
}

function clearOrderTimers() {
  orderTimers.forEach((timer) => clearTimeout(timer));
  orderTimers = [];
}

function startOrderScenario() {
  clearOrderTimers();
  document.querySelector("#place-order").textContent = "Confirm offer";
  orderStatus.textContent = "Placing your order. Please do not leave this screen.";
  orderLog.innerHTML = "";
  addOrderLog("Order request sent to nearby store.", "success");

  const scenarios = [
    [
      { delay: 700, message: "Payment verification delayed. Retrying automatically.", type: "error" },
      { delay: 1500, message: "Your order has been placed successfully.", type: "success" },
      { delay: 2400, message: "Your order was cancelled because the delivery slot expired.", type: "error" },
    ],
    [
      { delay: 600, message: "Your order has been placed successfully.", type: "success" },
      { delay: 1300, message: "Price updated after confirmation. Additional payment may be required.", type: "error" },
      { delay: 2200, message: "Store is re-confirming item availability.", type: "error" },
    ],
    [
      { delay: 900, message: "Cash on delivery removed. Switching to DashPay.", type: "error" },
      { delay: 1700, message: "Your order has been placed successfully.", type: "success" },
      { delay: 2600, message: "Order cancelled because payment method changed during processing.", type: "error" },
    ],
  ];

  const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];

  scenario.forEach((step, index) => {
    const timer = setTimeout(() => {
      addOrderLog(step.message, step.type);
      orderStatus.textContent = step.message;

      if (index === scenario.length - 1 && step.type === "success") {
        payableTotal.textContent = "Rs154";
      }
    }, step.delay);
    orderTimers.push(timer);
  });
}

function openVerificationStep() {
  pendingOrderVerification = true;
  verificationOverlay.hidden = false;
  verificationTitle.textContent = "Confirm you are human";
  verificationCopy.textContent = "Before placing your order, confirm that a real person is continuing.";
  verificationActions.hidden = false;
  miniGame.hidden = true;
  gameStatus.textContent = "Wrong selection restarts verification.";
}

function showToast(message) {
  globalToast.hidden = false;
  globalToast.textContent = message;
  if (toastTimer) {
    clearTimeout(toastTimer);
  }
  toastTimer = setTimeout(() => {
    globalToast.hidden = true;
  }, 2600);
}

function hijackSearch(term) {
  const forcedTerm = term.toLowerCase().includes("milk") ? "milk combo" : term;
  const mappedTerm = forcedTerm.toLowerCase().includes("milk") ? "milk" : "combo";
  searchInput.value = forcedTerm;
  setScreen("browse");
  currentFilter = mappedTerm === "milk" ? "brand" : "price";
  filterButtons.forEach((item) => item.classList.remove("active"));
  const activeFilter = document.querySelector(`[data-filter="${currentFilter}"]`);
  if (activeFilter) {
    activeFilter.classList.add("active");
  }
  renderBrowseProducts(currentFilter, currentSort);
  showToast(`Showing promoted results for "${forcedTerm}" first.`);
}

function formatCountdown(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateLimitedBanner() {
  const prefix = currentFilter === "delivery" ? "10 min offer ends in " : "Limited time offer ends in ";
  limitedBanner.querySelector("strong").textContent = `${prefix}${formatCountdown(limitedOfferSeconds)}`;
}

function startLimitedOfferTimer() {
  if (limitedOfferTimer) {
    clearInterval(limitedOfferTimer);
  }

  updateLimitedBanner();
  limitedOfferTimer = setInterval(() => {
    if (limitedOfferSeconds > 0) {
      limitedOfferSeconds -= 1;
    } else if (!limitedOfferResetDone) {
      limitedOfferSeconds = 89;
      limitedOfferResetDone = true;
      showToast("Offer timer refreshed because stock was revalidated.");
    } else {
      limitedOfferSeconds = 119;
      limitedOfferResetDone = false;
    }
    updateLimitedBanner();
  }, 1000);
}

function openProduct(product) {
  productTitle.textContent = product.name;
  productPrice.textContent = product.price;
  productSecondaryPrice.textContent =
    product.id === 1 ? "Checkout payable from Rs79" : "Checkout payable from Rs91";
  productCardLarge.classList.toggle("flash", product.id === 1 || product.id === 3);
  if (product.id === 3) {
    productSecondaryPrice.textContent = "Currently unavailable in most nearby stores";
    showToast("Item availability changed after opening.");
  }
  setScreen("product");
}

function showAdForProduct(product) {
  pendingProduct = product;
  adOverlay.hidden = false;
  adStatus.textContent = "Product details unlock only after the ad finishes.";
  adVideo.currentTime = 0;
  const playAttempt = adVideo.play();
  if (playAttempt && typeof playAttempt.catch === "function") {
    playAttempt.catch(() => {
      adStatus.textContent = "Autoplay was blocked. Press play and watch the full ad to continue.";
    });
  }
}

function finishAdFlow() {
  if (!pendingProduct) {
    adOverlay.hidden = true;
    return;
  }

  adVideo.pause();
  adOverlay.hidden = true;
  openProduct(pendingProduct);
  addOrderLog("Product opening was blocked by a forced ad interstitial.", "error");
  pendingProduct = null;
}

function populate() {
  adOverlay.hidden = true;
  homeProducts.innerHTML = products.map((product) => renderProductCard(product, "Add")).join("");
  renderBrowseProducts(currentFilter, currentSort);
  startLimitedOfferTimer();
}

function renderBrowseProducts(filter, sort) {
  let browseItems;

  if (filter === "brand") {
    browseItems = [products[3], products[0], products[1], products[4]];
  } else if (filter === "size") {
    browseItems = [products[2], products[3], products[0], products[1]];
  } else if (filter === "delivery") {
    browseItems = [products[3], products[2], products[0], products[4]];
  } else if (filter === "price") {
    browseItems = [products[4], products[2], products[0], products[1]];
  } else {
    browseItems = [products[0], products[2], products[3], products[1]];
  }

  if (sort === "low-high") {
    browseItems = [products[3], products[4], products[0], products[1]];
  } else if (sort === "rating") {
    browseItems = [products[0], products[3], products[2], products[1]];
  }

  browseProducts.innerHTML = browseItems
    .map((product) => renderProductCard(product, "Open"))
    .join("");

  const fakeCounts = {
    all: "42 results",
    brand: "29 results",
    size: "17 results",
    delivery: "8 results",
    price: "31 results",
  };
  resultsCount.textContent = fakeCounts[filter] || "42 results";
  updateLimitedBanner();
}

function resetFiltersAfterBack() {
  currentFilter = "all";
  filterButtons.forEach((item) => item.classList.remove("active"));
  document.querySelector('[data-filter="all"]').classList.add("active");
  renderBrowseProducts(currentFilter, currentSort);
}

function updateTotalsForQuantity() {
  if (quantity > 1) {
    itemTotal.textContent = "Rs230";
    cartTotal.textContent = "Rs257";
    payableTotal.textContent = "Rs257";
    qtyCount.textContent = "2";
  } else {
    itemTotal.textContent = "Rs126";
    cartTotal.textContent = deliveryFee.textContent === "Rs19" ? "Rs172" : "Rs153";
    payableTotal.textContent = deliveryFee.textContent === "Rs19" ? "Rs172" : "Rs153";
    qtyCount.textContent = "1";
  }
}

populate();

document.querySelector("#go-browse").addEventListener("click", () => setScreen("browse"));
document.querySelector("#see-deals").addEventListener("click", () => setScreen("browse"));
document.querySelector("#back-home").addEventListener("click", () => setScreen("home"));
document.querySelector("#back-browse").addEventListener("click", () => {
  setScreen("home");
  showNavFeedback("Back returned you to Home instead of results. Reopen the product if needed.");
});
document.querySelector("#continue-shopping").addEventListener("click", () => setScreen("browse"));
document.querySelector("#to-checkout").addEventListener("click", () => setScreen("checkout"));
document.querySelector("#back-cart").addEventListener("click", () => setScreen("cart"));
document.querySelector("#add-cart").addEventListener("click", () => setScreen("cart"));
document.querySelector("#back-browse").addEventListener("click", resetFiltersAfterBack);

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.target;
    const currentScreen = document.querySelector(".screen.active")?.dataset.screen;

    clearNavFeedback();

    if (target === "home") {
      if (currentScreen === "checkout") {
        setScreen("cart");
        showNavFeedback("Home kept your basket review open first. Tap Home again to leave checkout.");
        return;
      }

      setScreen("home");
      return;
    }

    if (target === "browse") {
      if (!navState.browseBlockedOnce) {
        navState.browseBlockedOnce = true;
        setScreen("home");
        button.classList.add("pending");
        showNavFeedback("Browse refreshed recommendations first. Tap again to view results.");
        return;
      }

      navState.browseBlockedOnce = false;
      setScreen("browse");
      return;
    }

    if (target === "cart") {
      if (!navState.cartBlockedOnce && currentScreen !== "cart") {
        navState.cartBlockedOnce = true;
        setScreen("browse");
        button.classList.add("pending");
        showNavFeedback("Cart is syncing promoted add-ons. Tap again to review basket.");
        addOrderLog("Cart total may refresh after a short delay.", "error");
        return;
      }

      navState.cartBlockedOnce = false;
      setScreen("cart");
      return;
    }

    if (target === "checkout") {
      if (!navState.checkoutBlockedOnce && currentScreen !== "checkout") {
        navState.checkoutBlockedOnce = true;
        setScreen("cart");
        button.classList.add("pending");
        showNavFeedback("Checkout needs price validation. Tap again to continue.");
        addOrderLog("Checkout opened after basket validation warning.", "error");
        return;
      }

      navState.checkoutBlockedOnce = false;
      setScreen("checkout");
      showToast("Checkout totals may change during confirmation.");
    }
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderBrowseProducts(currentFilter, currentSort);
    showToast(`Applied ${button.textContent}. Some promoted items remain visible.`);
  });
});

sortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sortButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    currentSort = button.dataset.sort;
    renderBrowseProducts(currentFilter, currentSort);
    showToast(`${button.textContent} may still prioritize sponsored products.`);
  });
});

searchTrigger.addEventListener("click", () => {
  hijackSearch(searchInput.value || "milk");
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    hijackSearch(searchInput.value || "milk");
  }
});

hintChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const forcedTerm = chip.textContent === "milk 1L" ? "milk" : "combo snack";
    hijackSearch(forcedTerm);
  });
});

browseProducts.addEventListener("click", (event) => {
  const card = event.target.closest(".product-tile");
  if (!card) {
    return;
  }

  const product = products.find((item) => item.id === Number(card.dataset.id));
  if (!product) {
    return;
  }

  showAdForProduct(product);
});

homeProducts.addEventListener("click", (event) => {
  const card = event.target.closest(".product-tile");
  if (!card) {
    return;
  }

  const product = products.find((item) => item.id === Number(card.dataset.id));
  if (!product) {
    setScreen("browse");
    return;
  }

  showAdForProduct(product);
});

document.querySelector("#apply-coupon").addEventListener("click", () => {
  deliveryFee.textContent = "Rs19";
  subscriptionFee.textContent = "Rs18 after trial";
  cartTotal.textContent = quantity > 1 ? "Rs276" : "Rs172";
  payableTotal.textContent = quantity > 1 ? "Rs276" : "Rs172";
  etaText.textContent = "18-24 min";
  couponStatus.textContent = "Coupon applied. Free delivery is no longer available for this basket.";
  couponConflict.textContent = "This coupon also removed item-level savings.";
  displaySavings.textContent = quantity > 1 ? "Rs188" : "Rs145";
  savingsBanner.classList.add("flash");
  const cartCard = document.querySelector(".cart-card");
  const firstAutoItem = cartCard.querySelector(".auto-item");
  if (firstAutoItem) {
    cartCard.appendChild(firstAutoItem);
  }
  showToast("Coupon applied. Delivery benefits were recalculated.");
});

document.querySelector("#place-order").addEventListener("click", () => {
  if (!termsCheck.checked) {
    orderStatus.textContent = "Please accept the changing-price acknowledgement before placing the order.";
    showToast("Acknowledge changing price and ETA before continuing.");
    return;
  }
  openVerificationStep();
});

document.querySelector("#increase-qty").addEventListener("click", () => {
  quantity = 2;
  qtyCount.textContent = "2";
  itemTotal.textContent = "Rs230";
  cartTotal.textContent = deliveryFee.textContent === "Rs19" ? "Rs276" : "Rs257";
  payableTotal.textContent = deliveryFee.textContent === "Rs19" ? "Rs276" : "Rs257";
  variantNote.textContent = "Family pack switched automatically for better value";
  displaySavings.textContent = "Rs201";
  couponStatus.textContent = "Quantity updated. Family pack selected for better value.";
  showToast("Quantity increased. Pack size updated automatically.");
});

document.querySelector("#decrease-qty").addEventListener("click", () => {
  quantity = 1;
  updateTotalsForQuantity();
  variantNote.textContent = "Plus pack selected automatically";
  couponStatus.textContent = "Basket updated.";
});

document.querySelector("#remove-item").addEventListener("click", () => {
  couponStatus.textContent = "To remove auto-added items, open Edit Basket on the next screen.";
  showToast("Auto-added items can only be removed in Edit Basket.");
});

adVideo.addEventListener("ended", finishAdFlow);

verificationNo.addEventListener("click", () => {
  verificationTitle.textContent = "Try again";
  verificationCopy.textContent = "Order cannot continue until you confirm you are human.";
  showToast("Verification not completed.");
});

verificationYes.addEventListener("click", () => {
  verificationActions.hidden = true;
  miniGame.hidden = false;
  verificationTitle.textContent = "Mini verification game";
  verificationCopy.textContent = "Solve this step to continue placing the order.";
});

miniGameGrid.addEventListener("click", (event) => {
  const tile = event.target.closest(".game-tile");
  if (!tile) {
    return;
  }

  if (tile.classList.contains("correct")) {
    verificationOverlay.hidden = true;
    pendingOrderVerification = false;
    showToast("Human verification completed.");
    startOrderScenario();
    return;
  }

  miniGame.hidden = true;
  verificationActions.hidden = false;
  verificationTitle.textContent = "Verification failed";
  verificationCopy.textContent = "Wrong tile selected. Confirm again before placing the order.";
  gameStatus.textContent = "Wrong selection restarts verification.";
  showToast("Verification restarted.");
});

paymentOptions.forEach((option) => {
  option.addEventListener("change", () => {
    if (option.nextElementSibling?.textContent !== "DashPay Instant Cashback") {
      paymentWarning.textContent = "Recommended method was restored for faster confirmation.";
      setTimeout(() => {
        const section = option.closest(".section-block");
        const paymentLabels = section ? Array.from(section.querySelectorAll(".payment-option")) : [];
        if (paymentLabels.length >= 3) {
          section.insertBefore(paymentLabels[2], paymentLabels[0]);
        }
        paymentOptions[0].checked = true;
        showToast("Payment method reset to DashPay Instant Cashback.");
      }, 800);
    } else {
      paymentWarning.textContent = "Recommended method may be reselected during confirmation.";
    }
  });
});
