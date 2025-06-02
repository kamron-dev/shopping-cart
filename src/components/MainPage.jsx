import { useOutletContext } from "react-router-dom";

const MainPage = () => {
    const { cart } = useOutletContext();
    console.log(cart)
    return (
        <>
            <div id="banner">
                <h1>Welcome to the StockY shop!</h1>
            </div>
            <div id="top-picks">
                <div>
                    {cart.map((item) => <p key={item.id}>{item.title}</p>)}
                </div>
            </div>
        </>
    )
};

export default MainPage;