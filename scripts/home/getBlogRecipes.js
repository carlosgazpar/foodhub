fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=bacon")
  .then((response) => response.json())
  .then((response) => {
    const recipeList = response.meals.slice(0, 4);
    recipeList.map((recipe) => {
      const recipeId = recipe.idMeal;
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then((response) => response.json())
        .then((response) => {
          const recipeInfo = response.meals[0];
          console.log(recipeInfo);
          const cardsContainer = document.querySelector(".blog-cards");
          const cardItem = 
          `<a class="card-item" href="">
            <div class="card-item-img">
              <img src="${recipeInfo.strMealThumb}" alt="${recipeInfo.strMeal}" title="${recipeInfo.strMeal}">
            </div>
            <span>${recipeInfo.strArea}, ${recipeInfo.strCategory}</span>
            <h3>${recipeInfo.strMeal}</h3>
            <p>${recipeInfo.strInstructions.slice(0, 115)} ...</p>
          </a>`;
          cardsContainer.insertAdjacentHTML("beforeend", cardItem)
        });
    });
  });
