import styles from '../Grid.module.css';
import {Google} from "../../common/Google/Google";
import {Player} from "../../common/Player/Player";
import {initialState} from "../../../state/State";

interface CellPropType {
    x: number,
    y: number
}

export const Cell = ({x, y}: CellPropType) => {

    function _getPlayerIndexByNumber(playerNumber: number) {
        const playerIndex = playerNumber - 1

        if (playerIndex < 0 || playerIndex > initialState.points.players.length - 1) {
            throw new Error("Incorrect player number")
        }

        return playerIndex;
    }

    function getGooglePosition() {
        return {...initialState.positions.google}
    }

    function getPlayerPosition(playerNumber: number) {
        const playerIndex = _getPlayerIndexByNumber(playerNumber);
        return {...initialState.positions.players[playerIndex]}
    }

    const googlePosition = getGooglePosition()
    const player1Position = getPlayerPosition(1)
    const player2Position = getPlayerPosition(2)

    return (
        <>
            <div className={styles.cell}>
                {
                    googlePosition.x === x && googlePosition.y === y
                        ? <Google/>
                        : ''

                }
                {
                    player1Position.x === x && player1Position.y === y
                    ? <Player playerNumber={1}/>
                    : ''
                }

                {
                    player2Position.x === x && player2Position.y === y
                    ? <Player playerNumber={2}/>
                    : ''
                }

            </div>
        </>
    );
};