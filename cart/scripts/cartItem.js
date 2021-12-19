class CartItem extends HTMLElement {
  data = {};
  isLastItem = false;
  constructor(props) {
    super(props);
    this.attachShadow({ mode: 'open' });
  }
  static get observedAttributes() {
    return ['data', 'last'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (oldVal !== newVal) {
      if (attrName === 'data') this.data = JSON.parse(newVal);
      if (attrName === 'last' && newVal === 'true') {
        this.isLastItem = true;
      }
    }
  }
  renderItem(data) {
    return `<li class="${this.isLastItem ? 'last-item' : ''}">
          <div class="plate">
            <img src="images/${data.image}" alt="${data.alt}" class="plate" />
            <div class="quantity">${data.count}</div>
          </div>
          <div class="content">
            <p class="menu-item">${data.name}</p>
            <p class="price">$${data.price / 100}</p>
          </div>
          <div class="quantity__wrapper">
            <button class="decrease">
              <img src="images/chevron.svg" />
            </button>
            <div class="quantity">${data.count}</div>
            <button class="increase">
              <img src="images/chevron.svg" />
            </button>
          </div>
          <div class="subtotal">$${(data.count * data.price) / 100}</div>
        </li>`;
  }
  emitCustomEvent(eventName, value) {
    const customEvent = new CustomEvent(eventName, { detail: value });
    window.dispatchEvent(customEvent);
  }
  updateItemContent(data) {
    const quantites = this.shadowRoot.querySelectorAll('.quantity');
    quantites.forEach((quantity) => (quantity.innerText = data.count));
    const subtotal = this.shadowRoot.querySelector('.subtotal');
    subtotal.innerText = `$${(data.count * data.price) / 100}`;
    this.emitCustomEvent('updateCart', this.data);
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = this.renderItem(this.data);
    const decrease = this.shadowRoot.querySelector('button.decrease');
    const increase = this.shadowRoot.querySelector('button.increase');
    decrease.addEventListener('click', () => {
      if (this.data.count === 1) {
        this.emitCustomEvent('removeItem', this.data);
        return false;
      }
      this.data.count = this.data.count - 1;
      this.updateItemContent(this.data);
    });
    increase.addEventListener('click', () => {
      this.data.count = this.data.count + 1;
      this.updateItemContent(this.data);
    });
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'styles/cartItem.css');

    // Attach the created element to the shadow dom
    this.shadowRoot.appendChild(linkElem);
  }
}
customElements.define('cart-item', CartItem);
