import list from './modules/list'

console.log(`Hello ${list[0]}`)

var profile = document.getElementById('profile');
profile.addEventListener("click", function(){ 
    document.getElementById('top').classList.add("dark-mode");});
