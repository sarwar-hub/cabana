import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register/Register";
import SecondaryLayout from "./layouts/SecondaryLayout";
import Details from "./pages/Details/Details";
import PrivateRout from "./routes/PrivateRout";
import AllProducts from "./pages/AllProducts/AllProducts";
import AddProduct from "./pages/AddProduct/AddProduct";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            
        ]
    },
    {
        path: '/',
        element: <SecondaryLayout></SecondaryLayout>,
        children: [
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'details/:id',
                element: <PrivateRout><Details></Details></PrivateRout>,
                loader: ({params})=>fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path: 'allProducts',
                element: <AllProducts></AllProducts>,
                loader: ()=>fetch('http://localhost:5000/products/all')
            },
            {
                path: 'addProduct',
                element: <AddProduct></AddProduct>
            }
        ]
    }
])

export default router;