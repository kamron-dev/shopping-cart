import { Link } from "react-router-dom";

const GameCard = ({ data }) => {
    return (
        <div id="game-card">
            <Link to={`/shop/${data.id}`}>
                <img src={data.image} alt="shop-item-photo" />
                <h3>{data.title}</h3>
                <p>${data.price}</p>
            </Link>
            
        </div>
    );
};

export default GameCard;