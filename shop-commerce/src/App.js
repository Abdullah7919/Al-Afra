import './App.css';
import Home from './pages/Home';
import Shop from "./pages/Shop"
import Single from "./pages/Single"
import Contact from './pages/Contact';
import Register from './components/Register'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from './components/Header';
import Footer from './components/Footer';
import SingleProduct from './components/SingleProduct';

const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav=document.getElementById('navbar');


if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/Register",
    element: <Register/>
  },
  {
    path:"/single",
    element: <Single/>
  },
  {
    path: "/shop",
    element: <Shop/>
  },
  {
  path: "/Contact",
  element: <Contact/>
 }
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
