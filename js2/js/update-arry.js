var colors = ['white', 'black', 'custom'];
colors[2] = 'beige';
// document.getElementById('colors').innerHTML = colors;
var elcolors = document.getElementById('colors');
elcolors.textContent = colors[2];