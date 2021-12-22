document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const fragement = document.createDocumentFragment();
  const iframe = document.querySelector('iframe');

  const createListItem = (item) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const a = document.createElement('a');
    const header = document.createElement('h3');
    a.classList.add('video');
    a.href = `https://www.youtube.com/watch?v=${item.id.videoId}`;
    img.src = item.snippet.thumbnails.default.url;
    img.alt = item.snippet.title;
    header.innerText = item.snippet.title;
    a.appendChild(img);

    a.appendChild(header);
    li.appendChild(a);
    li.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      iframe.src = `https://www.youtube.com/embed/${item.id.videoId}`;
    });
    return li;
  };

  sampleAPIResponse.items.forEach((item) => {
    fragement.appendChild(createListItem(item));
  });
  gallery.appendChild(fragement);
});
