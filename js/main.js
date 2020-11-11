'use strict';

const MESAGES = [`Всё отлично!`, `В целом всё неплохо. Но не всё.`, `Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.`, `Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.`, `Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.`, `Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!`];
const AUTOR_NAMES = [`Йоханнес`, `Эрик`, `Фредрик`, `Андрэас`, `Андерс`, `Томас`, `Магнус`];
let fotoDescription = [];
const IMG_QUANTITY = 25;

// случайное число в диапазоне
const randomNumber = function (min, max) {
  return Math.floor(min + Math.random() * (max - min)) + 1;
};

// случайный элемент массива
let randomMassive = function (arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

// Объект с коментарием
const comment = function () {
  let createComment = {
    avatar: `img/avatar-${randomNumber(1, 6)}.svg`,
    message: randomMassive(MESAGES),
    name: randomMassive(AUTOR_NAMES)
  };
  return createComment;
};

// Массив описания фотографии
const randomDescription = function () {
  for (let i = 1; i <= IMG_QUANTITY; i++) {
    let createFotoDescription = {
      url: `photos/${i}`,
      description: `Описание фотографии`,
      likes: randomNumber(15, 200),
      comments: comment()
    };
    fotoDescription.push(createFotoDescription);
  }
};
randomDescription();

const picturesAdd = document.querySelector(`.pictures`);
const pictureTemplate = document.querySelector(`#picture`)
    .content
    .querySelector(`.picture`);

const createImg = function (img) {
  let pictureImg = pictureTemplate.cloneNode(true);

  pictureImg.querySelector(`.picture__img`).src = img.url;
  pictureImg.querySelector(`.picture__comments`).textContent = img.comments;
  pictureImg.querySelector(`.picture__likes`).textContent = img.likes;

  return pictureImg;
};

const fragment = document.createDocumentFragment();

for (let i = 0; i < IMG_QUANTITY; i++) {
  fragment.appendChild(createImg(fotoDescription[i]));
}

picturesAdd.appendChild(fragment);
