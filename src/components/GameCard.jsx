const GameCard = ({ data }) => {
    return (
        <div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    );
};

export default GameCard;