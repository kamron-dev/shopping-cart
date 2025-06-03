import App from "./App.jsx";
import Shop from "./components/Shop.jsx";
import MainPage from "./components/MainPage.jsx";
import GameCardExtended from "./components/GameCardExtended.jsx";
import Cart from "./components/Cart.jsx";


const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: "shop",
                element: <Shop />,
                
            },
            {
                path: "shop/:id",
                element: <GameCardExtended />
            },
            {
                path: "cart",
                element: <Cart />
            }
            

        ],
    }, 
];

export default routes;