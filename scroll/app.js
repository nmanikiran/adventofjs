document.addEventListener('DOMContentLoaded', () => {
  const $sectionHeaders = document.querySelectorAll('section');
  const $listItems = document.querySelector('ul').querySelectorAll('li');

  const getDimensions = (ele) => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

    return {
      height,
      offsetTop,
      offsetBottom,
    };
  };
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const selected = Array.from($sectionHeaders).find((ele) => {
      if (ele) {
        const { offsetBottom, offsetTop } = getDimensions(ele);
        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      }
    });
    if (selected) {
      const header = selected.querySelector('h3').innerText;
      Array.from($listItems).find((item) => {
        if (item.innerText === header) {
          item.classList.add('selected');
        } else {
          item.classList.remove('selected');
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll);
});
