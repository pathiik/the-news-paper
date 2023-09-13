import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// window.onscroll = function () {
//   scrollFunction()
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 103 ||
//     document.documentElement.scrollTop > 103) {

//       document.querySelector('header.header nav.nav-bar').classList.remove('active');
//       document.querySelector('header.header nav.nav-bar').classList.add('active');
//   } else {
//     document.querySelector('header.header nav.nav-bar').classList.add('active');
//     document.querySelector('header.header nav.nav-bar').classList.remove('active');
// }
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);