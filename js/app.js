document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // const titleInput = document.querySelector('#title')
  // // titleInput.addEventListener("input")

  // const authorInput = document.querySelector('#author')
  // // authorInput.addEventListener("input")

  // const category = document.querySelector('#category')
  // // category.addEventListener("change")

  const form = document.querySelector('#new-item-form')
  form.addEventListener("submit", handleFormSubmit)


})



const handleFormSubmit = function (event) {
  event.preventDefault()
  console.log("form was submitted", event.target.title.value)

  
  const title =  event.target.title.value
  const author =  event.target.author.value
  const category =  event.target.category.value

console.log (title, author, category)
  
const titleListItem = document.createElement('li')
titleListItem.textContent = title
titleListItem.classList.add ('title')


const authorListItem = document.createElement('li')
authorListItem.textContent = author
authorListItem.classList.add ('author')

const categoryListItem = document.createElement('li')
categoryListItem.textContent = category
categoryListItem.classList.add ('category')

const list= document.querySelector ('ul')
list.appendChild(titleListItem)
list.appendChild(authorListItem)
list.appendChild(categoryListItem)

  event.target.reset()
}



// const handleTitleInput = function (event) {

//   const titleInputParagraph = document.querySelector('#title')
//   console.log(event.target.value)

// }

//   const handleAuthorInput = function (event) {

//     const authorInputParagraph = document.querySelector('#author')
//     console.log(event.target.value)

// }

// const handleSelectChange = function (event) {
//   console.log(event.target.value)
//   const categoryInputSelection = document.querySelector('#category');
// }