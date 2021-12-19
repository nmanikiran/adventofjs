class CartElementPanel extends HTMLElement {
  cartItems = [];
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `<div class="panel cart">
        <h1>Your Cart</h1>
            <ul class="cart-summary"></ul>
            <cart-summary></cart-summary>
        </div>`;
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'styles/cart.css');

    // Attach the created element to the shadow dom
    this.shadowRoot.appendChild(linkElem);
  }
  updateCartTotals() {
    const subtotal = this.cartItems.reduce(
      (acc, item) => acc + (item.price / 100) * item.count,
      0
    );
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    const totalsEl = this.shadowRoot.querySelector('cart-summary');
    totalsEl.setAttribute('subtotal', subtotal || 0);
    totalsEl.setAttribute('total', total || 0);
    totalsEl.setAttribute('tax', tax || 0);
    return { subtotal, tax, total };
  }
  renderCart() {
    this.shadowRoot.querySelector('ul.cart-summary').innerHTML =
      this.generateCartItems().join('');
    this.updateCartTotals();
  }
  generateCartItems() {
    return this.cartItems.map((item, index) => {
      return `<cart-item data='${JSON.stringify(item)}' last=${
        index === this.cartItems.length - 1
      }></cart-item>`;
    });
  }
  connectedCallback() {
    window.addEventListener('addToCart', (e) => {
      const item = e.detail;
      const cartItem = this.cartItems.find((i) => i.name === item.name);
      if (!cartItem) {
        this.cartItems.push({ ...e.detail, count: 1 });
      } else {
        this.cartItems = this.cartItems.filter((i) => i.name !== item.name);
      }
      this.renderCart();
    });
    window.addEventListener('removeItem', (e) => {
      this.cartItems = this.cartItems.filter(
        (item) => item.name !== e.detail.name
      );
      this.renderCart();
    });
    window.addEventListener('updateCart', (e) => {
      const index = this.cartItems.findIndex((i) => i.name === e.detail.name);
      this.cartItems[index] = e.detail;
      this.updateCartTotals();
    });
  }
}

customElements.define('cart-element-panel', CartElementPanel);
