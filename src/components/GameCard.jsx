const GameCard = ({ data }) => {
    return (
        <div id="game-card">
            <img src={data.image} alt="shop-item-photo" />
            <h3>{data.title}</h3>
            <p>${data.price}</p>
        </div>
    );
};

export default GameCard;