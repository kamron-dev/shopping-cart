import { Link } from "react-router-dom";

const GameCard = ({ data }) => {
    return (
        
        <div id="game-card">
            
            <img src={data.image} alt="shop-item-photo" />
            <Link to={`/shop/${data.id}`}>
                <h3>{data.title}</h3>
                <p>${data.price}</p>
            
            </Link>
            
        </div>

        
    );
};

export default GameCard;