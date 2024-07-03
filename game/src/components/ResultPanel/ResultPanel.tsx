import {getGooglePoints, getPlayersPoints,} from "../../state/State";


export const ResultPanel = () => {

    const google =  getGooglePoints()
    const player1 = getPlayersPoints(1)
    const player2 = getPlayersPoints(2)

    return (
        <>
            {` Player1: ${player1}, Player2: ${player2}, Google: ${google}`}
        </>
    );
};