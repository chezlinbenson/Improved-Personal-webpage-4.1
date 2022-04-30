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
