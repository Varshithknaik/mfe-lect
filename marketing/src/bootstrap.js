import { createRoot } from "react-dom/client";
import React from 'react'


// Mount function to start up the app
const mount = (el) => {
  const root = createRoot(el);
  root.render(<h1>Hi there and greetings!</h1>);
}

// If we are development and in isolation, call mount immediately
if(process.env.NODE_ENV === 'development'){
  const devRoot = document.querySelector('#_marketing-dev-root');
  if(devRoot){
    mount(devRoot);
  }
}

//We are running through container and we should export the mount function
export { mount }