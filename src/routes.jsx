import App from "./App.jsx";
import Shop from "./Shop.jsx";

const routes = [
    {
        path: "/",
        element: <App />,
    }, 
    {
        path: "shop",
        element: <Shop />,
    }
];

export default routes;