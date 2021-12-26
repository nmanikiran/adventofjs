const data = [
  {
    id: 1,
    name: 'Cameron Williamson',
    email: 'cameron.wiliamson@example.com',
    title: 'Software Developer',
  },
  {
    id: 2,
    name: 'Jenny Wilson',
    email: 'jenny.wilson@example.com',
    title: 'Project Manager',
  },
  {
    id: 3,
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    title: 'Marketing Coordinator',
  },
  {
    id: 4,
    name: 'Wade Warren',
    email: 'wade.warren@example.com',
    title: 'Software Tester',
  },
  {
    id: 5,
    name: 'Esther Howard',
    email: 'esther.howard@example.com',
    title: 'Web Designer',
  },
  {
    id: 6,
    name: 'Kristin Watson',
    email: 'kristin.watson@example.com',
    title: 'Marketing Coordinator',
  },
  {
    id: 7,
    name: 'Esther Howard',
    email: 'esther.howard@example.com',
    title: 'Web Designer',
  },
  {
    id: 8,
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    title: 'UI/UX Designer',
  },
  {
    id: 9,
    name: 'Ralph Edwards',
    email: 'ralph.edwards@example.com',
    title: 'Software Tester',
  },
  {
    id: 10,
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    title: 'Ethical Hacker',
  },
  {
    id: 11,
    name: 'Willie Jennings',
    email: 'willie.jennings@example.com',
    title: 'Team Leader',
  },
  {
    id: 12,
    name: 'Neveah Simmons',
    email: 'neveah.simmons@example.com',
    title: 'Team Leader',
  },
  {
    id: 13,
    name: 'Theresa Webb',
    email: 'theresa.webb@example.com',
    title: 'Software Tester',
  },
  {
    id: 14,
    name: 'Debbe Baker',
    email: 'debbe.baker@example.com',
    title: 'Software Developer',
  },
  {
    id: 15,
    name: 'Ronald Richards',
    email: 'ronald.richards@example.com',
    title: 'Software Developer',
  },
  {
    id: 16,
    name: 'Deanna Curtis',
    email: 'deanna.curtis@example.com',
    title: 'Scrum Master',
  },
  {
    id: 17,
    name: 'Felicia Reid',
    email: 'felicia.reed@example.com',
    title: 'Ethical Hacker',
  },
  {
    id: 18,
    name: 'Jessie Alexander',
    email: 'jessie.alexander@example.com',
    title: 'Project Manager',
  },
  {
    id: 19,
    name: 'Sam Smith',
    email: 'sam.smith@example.com',
    title: 'Ethical Hacker',
  },
  {
    id: 20,
    name: 'Eleanor Rigby',
    email: 'eleanor.rigby@example.com',
    title: 'UI/UX Designer',
  },
  {
    id: 21,
    name: 'Devon Lane',
    email: 'devon.lane@example.com',
    title: 'Team Leader',
  },
  {
    id: 22,
    name: 'Guy Hawkins',
    email: 'guy.hawkins@example.com',
    title: 'Team Leader',
  },
  {
    id: 23,
    name: 'Jim Parks',
    email: 'jim.parks@example.com',
    title: 'Ethical Hacker',
  },
  {
    id: 24,
    name: 'Susanne Ford',
    email: 'susanne.ford@example.com',
    title: 'Software Developer Manager',
  },
  {
    id: 25,
    name: 'Kathryn Murphy',
    email: 'kathryn.murphy@example.com',
    title: 'Project Manager',
  },
  {
    id: 26,
    name: 'Cody Fisher',
    email: 'cody.fisher@example.com',
    title: 'Software Developer',
  },
  {
    id: 27,
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    title: 'Software Tester',
  },
  {
    id: 28,
    name: 'Karen MacAfee',
    email: 'karen.macafee@example.com',
    title: 'UI/UX Designer',
  },
  {
    id: 29,
    name: 'Dianne Russell',
    email: 'dianne.russell@example.com',
    title: 'Ethical Hacker',
  },
  {
    id: 30,
    name: 'Bessie Cooper',
    email: 'bessie.cooper@example.com',
    title: 'Scrum Master',
  },
];
document.addEventListener('DOMContentLoaded', () => {
  const createInput = (type, value) => {
    const input = document.createElement('input');
    input.type = type;
    input.disabled = true;
    input.value = value;
    return input;
  };

  const createImage = (name) => {
    const image = document.createElement('img');
    image.src = `./images/${name}.svg`;
    image.alt = name;
    image.classList.add(name);
    return image;
  };

  const createRow = (data) => {
    const tr = document.createElement('tr');
    const idTd = document.createElement('td');
    idTd.innerText = data.id;

    const nameTd = document.createElement('td');
    nameTd.classList.add('name');
    const nameInput = createInput('text', data.name);
    nameTd.appendChild(nameInput);

    const emailTd = document.createElement('td');
    const emailInput = createInput('email', data.email);
    emailTd.appendChild(emailInput);

    const titleTd = document.createElement('td');
    const titleInput = createInput('text', data.title);
    titleTd.appendChild(titleInput);

    const actionTd = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    const editImg = createImage('edit');
    editBtn.appendChild(editImg);
    editBtn.addEventListener('click', () => {
      tr.classList.toggle('edit');
    });

    const updateBtn = document.createElement('button');
    updateBtn.classList.add('update');
    const updateImg = createImage('update');
    updateBtn.appendChild(updateImg);
    updateBtn.addEventListener('click', () => {
      //   tr.classList.toggle('update');
      tr.classList.toggle('edit');
    });

    actionTd.appendChild(editBtn);
    actionTd.appendChild(updateBtn);

    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(emailTd);
    tr.appendChild(titleTd);
    tr.appendChild(actionTd);

    return tr;
  };
  const pageLength = 10;
  let currentPage = 1;
  const totalPages = Math.ceil(data.length / pageLength);

  const tbody = document.querySelector('tbody');
  const $currentPage = document.querySelector('#currentPage');
  const $next = document.querySelector('#next');
  const $prev = document.querySelector('#previous');
  const $totalPages = document.querySelector('#totalPages');
  const $sorts = document.querySelectorAll('button.sort');
  $totalPages.innerText = totalPages;

  $sorts.forEach((sort, index) => {
    sort.addEventListener('click', () => {
      const ascending = document.querySelector('.sort.ascending');
      const descending = document.querySelector('.sort.descending');
      const classList = Array.from(sort.classList);

      if (ascending) ascending.classList.remove('ascending');
      if (descending) descending.classList.remove('descending');
      if (classList.includes('ascending')) {
        sort.classList.remove('ascending');
        sort.classList.add('descending');

        renderPageItems(currentPage, Object.keys(data[0])[index], 'descending');
      } else {
        sort.classList.add('ascending');
        sort.classList.remove('descending');
        renderPageItems(currentPage, Object.keys(data[0])[index], 'ascending');
      }
    });
  });

  const renderPageItems = (page = 1, prop = 'id', order = 'ascending') => {
    tbody.innerHTML = '';

    pageIndex = page - 1;
    const pageItems = data.slice().splice(pageIndex * pageLength, pageLength);
    let sortedItems = pageItems.sort((a, b) => {
      if (typeof a[prop] === 'string' && typeof b[prop] === 'string') {
        const options = {
          sensitivity: 'base',
        };
        if (order === 'ascending') {
          return a[prop].localeCompare(b[prop], 'en', options);
        } else {
          return b[prop].localeCompare(a[prop], 'en', options);
        }
      } else {
        return order === 'ascending' ? a[prop] - b[prop] : b[prop] - a[prop];
      }
    });

    sortedItems.forEach((item) => {
      const tr = createRow(item);
      tbody.appendChild(tr);
    });
  };

  $next.addEventListener('click', () => {
    currentPage++;
    if (currentPage > totalPages) return;
    renderPageItems(currentPage);
    $currentPage.value = currentPage;
  });

  $prev.addEventListener('click', () => {
    currentPage--;
    if (currentPage < 1) return;
    renderPageItems(currentPage);
    $currentPage.value = currentPage;
  });

  renderPageItems();
});
