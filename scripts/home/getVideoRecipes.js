fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=beef")
  .then((response) => response.json())
  .then((response) => {
    const recipesList = response.meals.slice(-6);
    recipesList.map((recipe) => {
      const recipeId = recipe.idMeal;
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
        .then((response) => response.json())
        .then((response) => {
          const recipeInfo = response.meals[0];
          const cardsContainer = document.querySelector(".video-recipes-cards");
          const cardItem =
            `<a class="card-item">
            <div class="card-item-img">
              <img src="${recipeInfo.strMealThumb}" alt="${recipeInfo.strMeal}" title="${recipeInfo.strMeal}" />
              <img class='card-item-play' id='modal-trigger-${recipeId}' src='../../img/icons/play.svg'/>
            </div>
            <div class="card-item-text">
              <h4>${recipeInfo.strMeal}</h4>
              <span class="tag tag-rating">5.0</span>
              <span class="tag tag-steps">5 steps</span>
              <span class="tag tag-time">5 min</span>
            </div>
          </a>`;

          const urlVideo = recipeInfo.strYoutube.replace('watch?v=', 'embed/')
          renderModal(urlVideo, recipeId)
          cardsContainer.insertAdjacentHTML('beforeend', cardItem)
        });
    });
  });

const renderModal = (urlVideo, id) => {

  const modalContainer =
    `<div class="modal" id='modal-${id}'>
    <button id="modal-close-${id}" class="modal-close">×</button>
    <div class="modal-content">
        <iframe width="100%" height="100%" src="${urlVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  </div>`
  document.body.insertAdjacentHTML(`beforeend`, modalContainer)

  setTimeout(() => {
    const modalClose = document.getElementById(`modal-close-${id}`)
    const modal = document.getElementById(`modal-${id}`)
    const modalContent = document.querySelector(`#modal-${id} .modal-content`)
    const servicesModalTrigger = document.getElementById(`modal-trigger-${id}`)

    servicesModalTrigger?.addEventListener('click', () => {
      modal.classList.add('modal-show')
    })

    modalClose?.addEventListener('click', () => {
      modal.classList.remove('modal-show')
    })

    document?.addEventListener('click', (event) => {
      const outsideClick = !modalContent.contains(event.target)
      const clickServicesTrigger = servicesModalTrigger.contains(event.target)

      if (outsideClick && !clickServicesTrigger) modal.classList.remove('modal-show')
    })
  }, 1000)
}