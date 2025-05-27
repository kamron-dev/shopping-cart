import App from "./App.jsx";
import Shop from "./components/Shop.jsx";
import MainPage from "./components/MainPage.jsx";


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

        ],
    }, 
];

export default routes;