fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
  .then((response) => response.json())
  .then((response) => {
    const categoriesContainer = document.querySelector('.blog-categories')
    const categoriesList = response.meals.slice(0,7)
    categoriesList.map((category) => {
      const postNumber = Math.floor(Math.random() * 5) + 1
      const categoryName = category.strCategory;
      const categoryItem = 
      `<div class="blog-categories-item">
        <a href="">${categoryName}</a>
        <span>${postNumber} Posts</span>
      </div>`;
      categoriesContainer.insertAdjacentHTML('beforeend', categoryItem)
    });
  });
