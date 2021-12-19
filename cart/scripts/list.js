import { menuItems } from '../data.js';

class ListItemsPanel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `<div class="panel">
        <h1>To Go Menu</h1>
        <ul class="menu">${this.generateListItems().join('')}</ul>
      </div>`;
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'styles/list.css');

    // Attach the created element to the shadow dom
    this.shadowRoot.appendChild(linkElem);
  }
  generateListItems() {
    return menuItems.map(
      (item) =>
        `<li data-name="${item.alt}">
            <div class="plate">
              <img
                src="images/${item.image}"
                alt="${item.alt}"
                class="plate"
              />
            </div>
            <div class="content">
              <p class="menu-item">${item.name}</p>
              <p class="price">$${item.price / 100}</p>
              <button>
                <img src="images/check.svg" alt="Check" />
                In Cart
              </button>
            </div>
          </li>`
    );
  }
  connectedCallback() {
    const listItems = this.shadowRoot.querySelectorAll('ul.menu li');
    listItems.forEach((item) => {
      const name = item.querySelector('.menu-item').innerText;
      const button = item.querySelector('button');
      button.addEventListener('click', () => {
        const x = menuItems.find((i) => i.name === name);
        const customEvent = new CustomEvent('addToCart', { detail: x });
        window.dispatchEvent(customEvent);
        button.classList.toggle('in-cart');
      });
    });
    window.addEventListener('removeItem', (e) => {
      const alt = e.detail.alt;
      const button = this.shadowRoot.querySelector(
        `ul.menu li[data-name="${alt}"] button`
      );
      button.classList.toggle('in-cart');
    });
  }
}

customElements.define('list-items-panel', ListItemsPanel);
