import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import './App.css'

function App() {
 const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/login',
    element: <Login/>
  }
 ]);
  return (
    <RouterProvider router={router}/>
  )
}

export default App
