const getMainCourse = (urlApi) => {
  fetch(urlApi)
  .then(response => response.json())
  .then(response =>  {
    const listRecipes = response.meals.slice(0,3)
    const cardsContainer = document.querySelector('.main-course-cards')
    listRecipes.map(recipe => {
      const cardItem = 
      `<a class="card-item" href="">
        <div class="card-item-img">
          <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" title="${recipe.strMeal}">
          <h4>${recipe.strMeal}</h4>
        </div>
      </a>`  
      cardsContainer.insertAdjacentHTML('beforeend', cardItem)
    })
  })
}

getMainCourse('https://www.themealdb.com/api/json/v1/1/filter.php?c=starter')