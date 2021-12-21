const content = [
  {
    image: 'dave-hoefler-okUIdo6NxGo-unsplash.jpg',
    caption: 'Photo by Dave Hoefler on Unsplash',
  },
  {
    image: 'sherman-yang-VBBGigIuaDY-unsplash.jpg',
    caption: 'Photo by Sherman Yang n Unsplash',
  },
  {
    image: 'jakob-owens-EwRM05V0VSI-unsplash.jpg',
    caption: 'Photo by Jakob Owens on Unsplash',
  },
  {
    image: 'finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg',
    caption: 'Photo by Dan Grinwis on Unsplash',
  },
  {
    image: 'vincentiu-solomon-ln5drpv_ImI-unsplash.jpg',
    caption: 'Photo by Vincentiu Solomon on Unsplash',
  },
  {
    image: 'silas-baisch-Wn4ulyzVoD4-unsplash.jpg',
    caption: 'Photo by Silas Baisch on Unsplash',
  },
  {
    image: 'eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg',
    caption: 'Photo by Eugene Golovesov on Unsplash',
  },
  {
    image: 'jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg',
    caption: 'Photo by Jennifer reynolds on Unsplash',
  },
  {
    image: 'kellen-riggin-SIBOiXKg0Ds-unsplash.jpg',
    caption: 'Photo by Kellen Riggin on Unsplash',
  },
  {
    image: 'rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg',
    caption: 'Photo by Rafael Hoyos on Unsplash',
  },
  {
    image: 'sonya-romanovska-wzdXhyi3AiM-unsplash.jpg',
    caption: 'Photo by Sonya Romanovska on Unsplash',
  },
];

document.addEventListener('DOMContentLoaded', (e) => {
  const $left = document.querySelector('.left');
  const $right = document.querySelector('.right');
  const featureImg = document.querySelector('.feature img');

  const $thumbnails = document.querySelectorAll('li');
  const totalImages = Array.from($thumbnails).length;

  $thumbnails.forEach((li) => {
    li.addEventListener('click', (e) => {
      let selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      featureImg.src = li.querySelector('img').src;
      li.classList.add('selected');
    });
  });

  const getSelectedImage = () => {
    let selected = document.querySelector('.selected');
    const index = Array.from($thumbnails).indexOf(selected);
    return { selected, index };
  };

  $left.addEventListener('click', () => {
    const { selected: li, index } = getSelectedImage();
    if (index > 0) {
      li.classList.remove('selected');
      li.previousElementSibling.classList.add('selected');
      featureImg.src = li.previousElementSibling.querySelector('img').src;
    }
  });

  $right.addEventListener('click', () => {
    const { selected: li, index } = getSelectedImage();

    if (index < totalImages - 1) {
      li.classList.remove('selected');
      li.nextElementSibling.classList.add('selected');
      featureImg.src = li.nextElementSibling.querySelector('img').src;
    }
  });
});
