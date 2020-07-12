import list from './modules/list'

var dark_toggle = '';

var profile = document.getElementById('profile');
var link_toggle = document.getElementById('dark-toggle');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementById('top').classList.toggle("dark-mode");
}

profile.addEventListener("click", function(){
    document.getElementById('top').classList.toggle("dark-mode");});
link_toggle.addEventListener("click", function(){
    document.getElementById('top').classList.toggle("dark-mode");
    if (this.innerHTML == 'dark mode'){
      this.innerHTML = 'light mode';
    }
    else {
      this.innerHTML = 'dark mode';
    }
  });
