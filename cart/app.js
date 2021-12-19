const menuItems = [
  {
    name: 'French Fries with Ketchup',
    price: 223,
    image: 'plate__french-fries.png',
    alt: 'French Fries',
    count: 0,
  },
  {
    name: 'Salmon and Vegetables',
    price: 512,
    image: 'plate__salmon-vegetables.png',
    alt: 'Salmon and Vegetables',
    count: 0,
  },
  {
    name: 'Spaghetti Meat Sauce',
    price: 782,
    image: 'plate__spaghetti-meat-sauce.png',
    alt: 'Spaghetti with Meat Sauce',
    count: 0,
  },
  {
    name: 'Bacon, Eggs, and Toast',
    price: 599,
    image: 'plate__bacon-eggs.png',
    alt: 'Bacon, Eggs, and Toast',
    count: 0,
  },
  {
    name: 'Chicken Salad with Parmesan',
    price: 698,
    image: 'plate__chicken-salad.png',
    alt: 'Chicken Salad with Parmesan',
    count: 0,
  },
  {
    name: 'Fish Sticks and Fries',
    price: 634,
    image: 'plate__fish-sticks-fries.png',
    alt: 'Fish Sticks and Fries',
    count: 0,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const $menu = document.querySelector('ul.menu');
  const fargment = document.createDocumentFragment();
  let cartItems = [
    {
      name: 'French Fries with Ketchup',
      price: 223,
      image: 'plate__french-fries.png',
      alt: 'French Fries',
      count: 0,
    },
  ];
  menuItems.forEach((item) => {
    const itemStr = `<li>
            <div class="plate">
              <img
                src="images/${item.image}"
                alt="French Fries"
                class="plate"
              />
            </div>
            <div class="content">
              <p class="menu-item">${item.name}</p>
              <p class="price">$${item.price / 100}</p>
              <button class="in-cart">
                <img src="images/check.svg" alt="Check" />
                In Cart
              </button>
            </div>
          </li>`;
    const element = new DOMParser().parseFromString(itemStr, 'text/html');
    const newItemElement =
      element.documentElement.querySelector('body').firstChild;
    fargment.appendChild(newItemElement);
  });
  $menu.appendChild(fargment);

  const $cart = document.querySelector('ul.cart-summary');
  cartItems.map((item) => {
    const cartItemStr = ` <li>
            <div class="plate">
              <img
                src="images/${item.image}"
                alt="French Fries"
                class="plate"
              />
              <div class="quantity">2</div>
            </div>
            <div class="content">
              <p class="menu-item">${item.name}</p>
              <p class="price">$${item.price / 100}</p>
            </div>
            <div class="quantity__wrapper">
              <button class="decrease">
                <img src="images/chevron.svg" />
              </button>
              <div class="quantity">2</div>
              <button class="increase">
                <img src="images/chevron.svg" />
              </button>
            </div>
            <div class="subtotal">$4.46</div>
          </li>`;
  });
});
