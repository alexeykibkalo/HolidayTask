import './assets/css/reset.css';
import './assets/scss/layout.scss';
import './assets/scss/styles.scss';

const navButton = document.getElementsByClassName('navButton')[0];
const navList = document.getElementsByClassName('navList')[0];
const worksItems = document.getElementsByClassName('worksItem');
for(let item of worksItems){
  item.addEventListener('click', () => {
    test(this);
  })

  item.onclick = test;
}
let isVisible = false;
navButton.addEventListener('click', () => {
  if (isVisible) {
    navList.classList.remove('navListMobile');
    navButton.classList.remove('navButtonMod');
    navList.classList.add('navList');
    isVisible = false;

  } else {
    isVisible = true;
    navList.classList.remove('navList');
    navList.classList.add('navListMobile');
    navButton.classList.add('navButtonMod');
  }
});


function test(){
  this.preventDefault();
console.log(this);
}