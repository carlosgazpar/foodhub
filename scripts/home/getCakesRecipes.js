fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert")
  .then((response) => response.json())
  .then((response) => {
    const recipeList = response.meals.slice(0, 8);
    recipeList.map((recipe) => {
      const recipeContainer = document.querySelector(".cakes-grid");
      const stepNumber = Math.floor(Math.random() * (10 - 3) + 3)
      const durationTime = Math.floor(Math.random() * (60 - 30) + 30)
      const recipeItem = 
      `<a class="card-item" href="">
        <div class="card-item-img">
          <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" title="${recipe.strMeal}">
        </div>
        <h4>${recipe.strMeal}</h4>  
        <div class="card-item-icons">
          <span class="icon-clock">${durationTime} min</span>
          <span class="icon-check">${stepNumber} steps</span>
        </div>
      </a>`;
      recipeContainer.insertAdjacentHTML('beforeend', recipeItem)
    });
  });
