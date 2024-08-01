const photosTemplate = document.querySelector('#picture').content;
const photosContainer = document.querySelector('.pictures');

const createPhotos = ({url, description, likes, comments}) => {
  const photoClone = photosTemplate.cloneNode(true);

  photoClone.querySelector('.picture__img').src = url;
  photoClone.querySelector('.picture__img').alt = description;
  photoClone.querySelector('.picture__likes').textContent = likes;
  photoClone.querySelector('.picture__comments').textContent = comments.length;
  return photoClone;
};

const generatePhotos = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const photo = createPhotos(picture);
    fragment.append(photo);
  });
  photosContainer.append(fragment);
};

export { generatePhotos };
