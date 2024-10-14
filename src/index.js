import React from 'react';
import ReactDOM from 'react-dom/client'; //Because react works on virtual dom so to create virtual DOM this is required
import MyForm from './MyForm';


const htmlRoot = document.getElementById('parent') //1. Get the html Root
const reactRoot = ReactDOM.createRoot(htmlRoot); //2. Create react virtual DOM
// 3. Populate your react components tree on the virtual dom by rendering
reactRoot.render(
  <React.StrictMode>
    <MyForm />
  </React.StrictMode>
);


