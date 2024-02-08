const categoriesEl = document.getElementById('categories').children.length;
console.log('Number of categories:', categoriesEl);

const listCategoriesTitle = document.querySelectorAll('h2');
listCategoriesTitle.forEach(title => {console.log('Category:', title.textContent);
console.log('Elements:', title.nextElementSibling.children.length)})