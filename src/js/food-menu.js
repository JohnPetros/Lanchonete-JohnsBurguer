const food = document.querySelectorAll('.food')
const categories = document.querySelectorAll('.category')
const burgues = document.getElementById('burguers')
const deserts = document.getElementById('deserts')
const drinks = document.getElementById('drinks')
let modalCategory = 'burguer'

const changeCategory = (event) => {
    const category = event.target
    const categoryName = category.id

    if (categoryName === 'burguer') {
        categories.forEach(category => category.classList.remove('category-selected'))
        category.classList.add('category-selected')
        food.forEach(food => food.classList.remove('food-selected'))
        burgues.classList.add('food-selected')

    } else if (categoryName === 'desert') {
        categories.forEach(category => category.classList.remove('category-selected'))
        category.classList.add('category-selected')
        food.forEach(food => food.classList.remove('food-selected'))
        deserts.classList.add('food-selected')
        
    } else if (categoryName === 'drink') {
        categories.forEach(category => category.classList.remove('category-selected'))
        category.classList.add('category-selected')
        food.forEach(food => food.classList.remove('food-selected'))
        drinks.classList.add('food-selected')
    }
    modalCategory = categoryName
}

categories.forEach(category => category.addEventListener('click', changeCategory))

export { modalCategory }