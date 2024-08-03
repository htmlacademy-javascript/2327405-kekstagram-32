import {getRandomArrayElement} from './util.js';

const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const URL = ['photos/1.jpg', 'photos/2.jpg', 'photos/3.jpg', 'photos/4.jpg', 'photos/5.jpg', 'photos/6.jpg', 'photos/7.jpg', 'photos/8.jpg', 'photos/9.jpg', 'photos/10.jpg', 'photos/11.jpg','photos/12.jpg','photos/13.jpg','photos/14.jpg','photos/15.jpg','photos/16.jpg','photos/17.jpg','photos/18.jpg','photos/19.jpg','photos/20.jpg','photos/21.jpg','photos/22.jpg','photos/23.jpg','photos/24.jpg','photos/25.jpg'];

const LIKES = [15, 16, 17, 18, 25, 35, 153, 176, 133, 121, 119, 145, 200, 199, 198, 197, 195];

const DESCRIPTION = [
  'На море кайф',
  'Нравится',
  'Хочу так же',
  'Как же круто',
  'Хочу в отпуск'
];

const COMMENTS = [
  {
    id: 135,
    avatar: 'img/avatar-1.svg',
    message: 'В целом всё неплохо. Но не всё.',
    name: 'Артём',
  },
  {
    id: 121,
    avatar: 'img/avatar-2.svg',
    message: 'Всё отлично!',
    name: 'Иван',
  },
  {
    id: 17,
    avatar: 'img/avatar-3.svg',
    message: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    name: 'Алексей',
  },
  {
    id: 148,
    avatar: 'img/avatar-4.svg',
    message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    name: 'Артём',
  },
  {
    id: 345,
    avatar: 'img/avatar-5.svg',
    message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    name: 'АИгорь',
  },
  {
    id: 252,
    avatar: 'img/avatar-6.svg',
    message: 'В целом всё неплохо. Но не всё.',
    name: 'Андрей',
  }
];

const createPictures = () => ({
  id: getRandomArrayElement(ID),
  url: getRandomArrayElement(URL),
  likes: getRandomArrayElement(LIKES),
  description: getRandomArrayElement(DESCRIPTION),
  comments: getRandomArrayElement(COMMENTS),
});

const similarPicture = () => Array.from({ length: 25 }, createPictures);

similarPicture();

export { similarPicture, LIKES, URL, COMMENTS, DESCRIPTION };
