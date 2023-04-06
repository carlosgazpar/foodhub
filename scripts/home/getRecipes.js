const countryList = ["American","British","Canadian","Chinese","Croatian","Dutch","Egyptian","French","Greek","Indian","Irish","Italian","Jamaican","Japanese","Kenyan","Malaysian","Mexican","Moroccan","Polish","Portuguese","Russian","Spanish","Thai","Tunisian","Turkish","Unknown","Vietnamese"]

const randomCountry = Math.floor(Math.random() * countryList.length)

fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryList[randomCountry]}`)
  .then(response => response.json())
  .then(response => {
    const reduceRecipe = response?.meals.slice(0, 8)
    reduceRecipe?.map(recipe => {
      const recipesContainer = document.querySelector('.most-popular-cards')

      const recipeItem =
        `<a class="card-item" href="">
        <div class="card-item-img">
          <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" title="${recipe.strMeal}">
        </div>
          <h4>${recipe.strMeal}</h4>  
          <p>Demo User</p>
      </a>`

      recipesContainer.insertAdjacentHTML('beforeend', recipeItem)
    })
  })