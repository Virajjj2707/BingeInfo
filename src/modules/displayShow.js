import {
  getShow, getLike, postLike,
} from './fetch.js';
import displayInfo from './displayInfo.js';

const displayMovie = async () => {
  const container = document.querySelector('#container');

  const allLikes = await getLike();
  
  const showArray = await getShow();
  
  showArray.forEach((data) => {
    
    const likes = allLikes.filter((like) => like.item_id === data.id);
  
    const showCard = document.createElement('div');
    showCard.classList.add('container');
    showCard.innerHTML = `<img src="${data.image.original}" alt="${data.name} poster">
      <div class="caption">
        <span class="title">
          <p class="name">${data.name}</p>
          <p class="rating">
            <span class="imdb">IMDb</span>
            <span class="ratingNumber">${data.rating.average}/10</span>
            <button id="info${data.id}">Info<i class="fa-solid fa-plus"></i></button>
          </p>
        </span>
        <span class="subcaption">
          <i class="fa-regular fa-heart"></i>
          <span id="like">${likes.length > 0 ? likes[0].likes : 0}</span>
        </span>
      </div>
      `;
    container.appendChild(showCard);

    const likeBtn = showCard.querySelector('.fa-heart');
    likeBtn.onclick = () => {
      likeBtn.style.color = '#8197a4';
      likeBtn.classList.remove('fa-regular');
      likeBtn.classList.add('fa-solid');
      postLike(data.id);
      const like = showCard.querySelector('#like');
      if (likes.length > 0) {
        like.innerHTML = `${likes[0].likes + 1}`;
      } else {
        like.innerHTML = '1';
      }
    };

  
    const countMovie = document.querySelector('#counter');
    countMovie.innerHTML = `Total Number of Series: ${showArray.length}`;

    const infoBtn = document.getElementById(`info${data.id}`);
    infoBtn.onclick = () => {
      displayInfo(data.id);
    };
  });
};

export default displayMovie;
