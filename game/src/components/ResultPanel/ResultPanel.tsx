import {initialState} from "../../App";

export const ResultPanel = () => {
    function _getPlayerIndexByNumber(playerNumber: number) {
        const playerIndex = playerNumber - 1

        if (playerIndex < 0 || playerIndex > initialState.points.players.length - 1) {
            throw new Error("Incorrect player number")
        }

        return playerIndex;
    }
    function getPlayersPoints(playerNumber: number) {
        const playerIndex = _getPlayerIndexByNumber(playerNumber);
        return initialState.points.players[playerIndex]
    }
    function getGooglePoints() {
        return initialState.points.google
    }

    const player1 = getPlayersPoints(1)
    const player2 = getPlayersPoints(2)
    const google =  getGooglePoints()

    return (
        <>
            {` Player1: ${player1}, Player2: ${player2}, Google: ${google}`}
        </>
    );
};