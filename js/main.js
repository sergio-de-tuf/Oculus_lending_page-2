'use strict'

const tabItem = document.querySelectorAll('.tabs-btn-item');
const tabContent = document.querySelectorAll('.tabs-content-item');

tabItem.forEach(function(element){
  element.addEventListener('click', open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

tabItem.forEach(function(item){
  item.classList.remove('tabs-btn-item--active');
});

tabContent.forEach(function(item){
  item.classList.remove('tabs-content-item--active');
});

tabTarget.classList.add('tabs-btn-item--active');
document.querySelector('#${button}').classList.add('tabs-content-item--active');

}

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector(".menu");

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
});