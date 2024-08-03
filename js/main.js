import { similarPicture} from './data.js';
import { generatePhotos } from './pictures.js';

generatePhotos(similarPicture());

const bigPicture = document.querySelector('.big-picture');
const pictureClose = document.querySelector('.big-picture__cancel');
const pictureShows = document.querySelectorAll('.picture');
const bigImage = document.querySelector('.big-picture__img');
const commentCount = document.querySelector('.social__comment-count');
const commentsLeader = document.querySelector('.comments-loader');
const body = document.querySelector('body');


pictureShows.forEach((pictureShow) => {
  pictureShow.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    const pictureClone = pictureShow.cloneNode(true);
    bigImage.append(pictureClone);
    bigImage.firstElementChild.replaceWith(pictureClone);
    commentCount.classList.add('hidden');
    commentsLeader.classList.add('hidden');
    body.classList.add('modal-open');
  });
});

pictureClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

