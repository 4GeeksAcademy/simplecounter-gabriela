import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondCounter from './components/Home';

let counter=0;
function count () {
  counter++;
  let string = counter.toString().padStart(6, "0");
  console.log (string);

 ReactDOM.createRoot(document.getElementById('root')).render(
    <SecondCounter
    string = {string} />

);
};
setInterval (count ,1000);