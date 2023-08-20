import './style.css';
import displayFilterMovie from './modules/filterShow.js';
import displayMovie from './modules/displayShow.js';

window.onload = () => {
  
  displayMovie();

//   reload page when logo is clicked
  const logo = document.querySelector('#logo');
  logo.onclick = () => {
    window.location.reload();
  };

  
  const form = document.querySelector('form');
  const search = document.querySelector('#search');
  const container = document.querySelector('#container');
  const filter = document.querySelector('#filter');

  form.onsubmit = (e) => {
    e.preventDefault();
    
    const searchText = search.value.toLowerCase();
    
    displayFilterMovie(searchText);
    container.style.display = 'none';
    filter.style.display = 'grid';
  };

//   getting which information to show
  const contactBtn = document.querySelector('#contactBtn');
  const homeBtn = document.querySelector('#homeBtn');
  const contact = document.querySelector('#contact');
  const home = document.querySelector('#home');
  const counter = document.querySelector('#counter');
  const allShowBtn = document.querySelector('#allShowBtn');

  
  allShowBtn.onclick = () => {
    search.value = '';
    container.style.display = 'grid';
    filter.style.display = 'none';
  };


  homeBtn.onclick = () => {
    homeBtn.style.textDecoration = 'underline';
    contactBtn.style.textDecoration = 'none';
    home.style.display = 'grid';
    contact.style.display = 'none';
    counter.style.display = 'block';
    form.style.display = 'block';
    allShowBtn.style.display = 'block';
  };

  
  contactBtn.onclick = () => {
    contactBtn.style.textDecoration = 'underline';
    homeBtn.style.textDecoration = 'none';
    home.style.display = 'none';
    contact.style.display = 'block';
    counter.style.display = 'none';
    form.style.display = 'none';
    allShowBtn.style.display = 'none';
  };

//   action for hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('#link');
  const menuToggle = () => {
    hamburger.classList.toggle('open');
    if (mobileMenu.style.display === 'flex') {
      mobileMenu.style.display = 'none';
    } else {
      mobileMenu.style.display = 'flex';
    }
  };

  hamburger.onclick = () => {
    menuToggle();
  };
};