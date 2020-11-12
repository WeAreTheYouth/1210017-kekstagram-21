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
let randomElement = function (arr) {
  let rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
};

// Объект с коментарием
const createComment = function () {
  let comments = [];

  for (let i = 0; i < randomNumber(1, 5); i++) {
    let randomComment = {
      avatar: `img/avatar-${randomNumber(1, 6)}.svg`,
      message: randomElement(MESAGES),
      name: randomElement(AUTOR_NAMES)
    };
    comments.push(randomComment);
  }
  return comments;
};

// Массив описания фотографии
const randomDescription = function () {
  for (let i = 1; i <= IMG_QUANTITY; i++) {
    let createFotoDescription = {
      url: `photos/${i}.jpg`,
      description: `Описание фотографии`,
      likes: randomNumber(15, 200),
      comments: createComment()
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
  let imgCopy = pictureTemplate.cloneNode(true);

  imgCopy.querySelector(`.picture__img`).src = img.url;
  imgCopy.querySelector(`.picture__comments`).textContent = img.comments.length;
  imgCopy.querySelector(`.picture__likes`).textContent = img.likes;

  return imgCopy;
};

const fragment = document.createDocumentFragment();

for (let i = 0; i < IMG_QUANTITY; i++) {
  fragment.appendChild(createImg(fotoDescription[i]));
}

picturesAdd.appendChild(fragment);
