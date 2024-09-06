import Dashboard from './pages/dashboard/Dashboard';
import Products from './pages/products/Product/Products';
import NewProduct from './pages/products/Newpro/NewProduct';
import Users from './pages/users/Users';
import Comments from './pages/comments/Comments';
import Discounts from './pages/discounts/Discounts';
import BoxEdit from './pages/products/BoxEdit/BoxEdit';
const routes = [
    {path: '/' , element: <Dashboard />},
    {path: '/products' , element: <Products />},
    {path: '/products/NewProduct' , element: <NewProduct />},
    {path: '/products/EditProduct/:ProductID' , element: <BoxEdit />},
    {path: '/users' , element: <Users />},
    {path: '/comments' , element: <Comments />},
    {path: '/discounts' , element: <Discounts />},

]

export default routes;