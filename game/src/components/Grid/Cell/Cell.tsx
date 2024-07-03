import styles from '../Grid.module.css';
import {Google} from "../../common/Google/Google";
import {Player} from "../../common/Player/Player";
import {getGooglePosition, getPlayerPosition} from "../../../state/State";

interface CellPropType {
    x: number,
    y: number
}

export const Cell = ({x, y}: CellPropType) => {

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