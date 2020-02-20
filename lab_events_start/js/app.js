document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formSubmission = document.querySelector('#new-item-form');
  formSubmission.addEventListener('submit', handleFormSubmit);

})


const handleFormSubmit = function () {
  event.preventDefault();

  const list = document.querySelector('#reading-list');
  const newListItem = document.createElement('li');

  const title = document.createElement('h1')
  title.textContent = event.target.title.value
  newListItem.appendChild(title);

  const author = document.createElement('h2')
  author.textContent = event.target.author.value
  newListItem.appendChild(author);

  const category = document.createElement('h3')
  category.textContent = event.target.category.value
  newListItem.appendChild(category);

  list.appendChild(newListItem);
  form = document.querySelector('#new-item-form');
  form.reset();
}
