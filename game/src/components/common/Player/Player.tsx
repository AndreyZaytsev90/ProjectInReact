interface PlayerPropsType {
    playerNumber: number
}

export const Player = ({playerNumber}: PlayerPropsType) => {
    return (
        <img src={`../../../assets/images/player${playerNumber}.png`} alt={`Player - ${playerNumber}`}/>
    );
};