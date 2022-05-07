
// HAMBURGER MENU

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// CAROUSEL

var images, numbers;


images = ['https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80','https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80', 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80', 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'];
numbers = [1, 2, 3, 4];

let element_number = document.getElementById('number');
element_number.innerText = numbers[0];
let element_images = document.getElementById('images');
element_images.setAttribute("src", images[0]);


document.getElementById('next').addEventListener('click', (event) => {
  numbers.push(numbers.shift());
  images.push(images.shift());
  let element_number2 = document.getElementById('number');
  element_number2.innerText = numbers[0];
  let element_images2 = document.getElementById('images');
  element_images2.setAttribute("src", images[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  numbers.unshift(numbers.pop());
  images.unshift(images.pop());
  let element_images3 = document.getElementById('images');
  element_images3.setAttribute("src", images[0]);
  let element_number3 = document.getElementById('number');
  element_number3.innerText = numbers[0];
});


document.getElementById('nightmode').addEventListener('click', (event) => {
  let element_nightmode = document.getElementById('pagemode');
  element_nightmode.style.backgroundColor = '#1f1c13';
  element_nightmode.style.color = '#ffffff';
});

document.getElementById('daymode').addEventListener('click', (event) => {
  let element_daymode = document.getElementById('pagemode');
  element_daymode.style.backgroundColor = '#ffffff';
  element_daymode.style.color = 'black';
});

var cart, item, price;


cart = [];
price = [];


document.getElementById('add1').addEventListener('click', (event) => {
  cart.push('Graphic Design Services');
  price.push(1500);
  let mycart = getElementById('shopcart');
  if (mycart.style.display === "none") {
  mycart.style.display === "block";}

});

document.getElementById('add2').addEventListener('click', (event) => {
  cart.push('Photo Editing Services');
  price.push(2400);

});

document.getElementById('add3').addEventListener('click', (event) => {
  cart.push('Web Design Services');
  price.push(7800);

});

document.getElementById('myitems').addEventListener('click', (event) => {
  cart.forEach((item) => {
    let element_mycart = document.getElementById('mycart');
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_mycart.appendChild(new_li);
  });
  let element_balance = document.getElementById('balance');
  element_balance.innerText = price.reduce((a,b) => a+b, 0);

});
