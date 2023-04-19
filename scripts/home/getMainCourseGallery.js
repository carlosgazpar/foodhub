const getMainCourseGallery = (urlApi) => {
  fetch(urlApi)
  .then(response => response.json())
  .then(response =>  {
    const listRecipesGallery = response.meals.slice(0,6)
    const galleryContainer = document.querySelector('.main-course-gallery')

    listRecipesGallery.map(recipe => {
      const galleryItem = 
      `<a href="">
        <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" title="${recipe.strMeal}">
      </a>`  
      galleryContainer.insertAdjacentHTML('beforeend', galleryItem)
    })
  })
}

getMainCourseGallery('https://www.themealdb.com/api/json/v1/1/filter.php?c=side')