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
import MyProducts from "./pages/MyProducts/MyProducts";
import UpdateProduct from "./pages/MyProducts/UpdateProduct";
import Err404 from "./pages/Err/Err404";
import Blog from "./pages/Blog/Blog";


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
                loader: ({params})=>fetch(`https://cubebuzz-server.vercel.app/details/${params.id}`)
            },
            {
                path: 'allProducts',
                element: <AllProducts></AllProducts>,
                loader: ()=>fetch('https://cubebuzz-server.vercel.app/products/all')
            },
            {
                path: 'addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: 'updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params})=> fetch(`https://cubebuzz-server.vercel.app/details/${params.id}`)
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <Err404></Err404>
    }
])

export default router;