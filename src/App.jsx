import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Pages/Users/Users'

function App() {

  const Router = createBrowserRouter([
    {
      path:"/",
      element:<Home></Home>

    },
    {
      path:"/About",
      element:<About></About>
    },
    {
      path:"/Users",
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'), 
      element:<Users></Users>
    },
    {
      path:"/Contact",
      element:<Contact></Contact>
    }
  ])

  return (
   <div>
    <RouterProvider router={Router}></RouterProvider>
   </div>
  )
}

export default App
