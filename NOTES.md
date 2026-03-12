# DashBasket Round 1 Notes

## Main idea
This is a quick commerce app, but we made it intentionally frustrating.

It should not look like a random ugly design. It should feel like a real app that keeps making the user uncomfortable, confused, and forced into the app's own choices.

The main goal is to show bad UX in a realistic way.

## What we intentionally made bad
- sponsored products come before exact matches
- search is biased
- filters look normal but still show wrong items
- sort options are misleading
- product opening is blocked by an ad
- prices keep changing across screens
- savings look bigger than the actual payable amount
- extra items and paid options are already selected
- quantity change can switch to a bigger pack
- checkout warnings come too late
- payment can go back to the app's preferred option
- bottom navigation looks normal but behaves badly
- after ordering, the app can show conflicting messages
- search can change what the user typed
- coupon messages can conflict with each other
- timer can reset instead of ending normally
- product back action can send the user to home
- before order completes, the user must pass a human verification and a mini game

## Why this is frustrating
The user keeps losing control.

Even simple things like:
- finding the right product
- trusting the price
- changing payment
- removing extra items
- placing the final order

all become stressful.

## Screen-wise points

### Home
- search section already says promoted items are prioritized
- search hint chips push users into biased search
- even if user searches milk, app can change it to milk combo
- hero buttons compete with each other
- the app starts with offers before clarity

### Browse
- exact match is not properly respected
- filters like brand, size, price, delivery are there, but still not honest
- result count looks specific, but it is misleading
- compare banner adds extra pressure
- limited offer countdown creates urgency
- promo bar interrupts normal browsing

### Product
- ad shows before opening the product
- product shows one price, but another payable hint is shown below
- some product may look available in browse, but after opening it shows near unavailable message
- low stock badge is over-emphasized
- too many trust/offer badges are shown
- size names like starter, plus, family are unclear
- buy combo and add to cart compete with each other
- extra add-ons are already selected
- sticky cross-sell distracts from the main action

### Cart
- one extra product is already added
- freshness protection is also already added
- savings are highlighted more than the final total
- item quantity increase can switch to family pack automatically
- coupon makes delivery worse instead of helping
- coupon also shows a conflicting message saying other savings were removed
- user cannot directly remove auto-added items
- sticky freebie prompt keeps interrupting
- total explanation is hidden inside an extra dropdown
- cart item order can change after coupon

### Checkout
- address issue is shown late
- ETA becomes worse
- app pushes its own payment method
- if user changes payment, it can switch back
- terms checkbox forces the user to accept unstable pricing and payment
- place order button changes wording to confirm offer
- after tapping place order, the app asks if the user is human and then shows a mini game
- after clicking order, app may show success and then cancellation

### Navigation
- bottom nav looks simple and normal
- but browse may need 2 taps
- cart may first send user somewhere else
- checkout may delay opening
- back from product can send user to home instead of previous page
- this makes the app feel unreliable

## Visible bad UI things
- too many badges
- too many banners
- too many sticky sections
- secondary buttons look too similar to important buttons
- disclaimer text is small and easy to ignore
- product cards are not consistent in height
- urgency badges animate too much
- savings look louder than actual payment
- countdown can restart again instead of ending properly

## Best points to tell judges
We did not just make the UI ugly.

We made it:
- manipulative
- distracting
- misleading
- stressful
- business-first instead of user-first

The app keeps pushing urgency, sponsored content, app-owned payment, extra add-ons, and changing prices.

So the frustration is both:
- visual
- functional

## Demo flow
1. Start from home and show that search is already biased.
2. Go to browse and show wrong products even after filters.
3. Open a product and show the forced ad and price confusion.
4. Show unclear size selection and preselected add-ons.
5. Add to cart and show extra items, changing savings, and hidden logic.
6. Apply coupon and show that the experience becomes worse.
7. Go to checkout and show payment reset, changing CTA, and unstable terms.
8. Place order and show conflicting final messages.

## One line summary
DashBasket looks like a normal commerce app, but almost every step is designed to reduce trust and increase frustration.
