import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SignUp, Success } from './pages';


const routes=createBrowserRouter([
  {
    path:'/',
    element:<SignUp/>,
  },
  {
    path:'/success',
    element:<Success/>,
  }
])
function App() {
  return (<RouterProvider router={routes}/>);
}

export default App;
