class CartSummary extends HTMLElement {
  data = {};
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  static get observedAttributes() {
    return ['tax', 'subtotal', 'total'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (oldVal !== newVal) {
      this.data[attrName] = newVal;
      this.shadowRoot.querySelector(
        `.amount.${attrName}`
      ).innerHTML = `$${parseFloat(newVal).toFixed(2)}`;
    }
  }
  renderContent() {
    return `<div class="totals">
        <div class="line-item">
          <div class="label">Subtotal:</div>
          <div class="amount price subtotal">$${this.data.subtotal || 0.0}</div>
        </div>
        <div class="line-item">
          <div class="label">Tax:</div>
          <div class="amount price tax">$${this.data.tax || 0.0}</div>
        </div>
        <div class="line-item total">
          <div class="label">Total:</div>
          <div class="amount price total">$${this.data.total || 0.0}</div>
        </div>
      </div>`;
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = this.renderContent();
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'styles/cartSummary.css');
    this.shadowRoot.appendChild(linkElem);
  }
}

customElements.define('cart-summary', CartSummary);
