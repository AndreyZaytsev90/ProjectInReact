import './App.css'
import {Settings} from "./components/Settings/Settings";
import {Button} from "./components/Button/Button";
import {ResultPanel} from "./components/ResultPanel/ResultPanel";
import {Grid} from "./components/Grid/Grid";

export const GAME_STATUSES = {
    SETTINGS: 'settings',
    IN_PROGRESS: 'in_progress',
    WIN: 'win',
    LOSE: 'lose'
}
export const EVENTS = {
    GOOGLE_JUMPED: 'GOOGLE_JUMPED',
    PLAYER1_MOVED: 'PLAYER1_MOVED',
    PLAYER2_MOVED: 'PLAYER2_MOVED',
    STATUS_CHANGED: 'STATUS_CHANGED',
    SCORES_CHANGED: 'SCORES_CHANGED',
    GOOGLE_CAUGHT: 'GOOGLE_CAUGHT',
    GOOGLE_RUN_AWAY: 'GOOGLE_RUN_AWAY'
}
export const MOVING_DIRECTIONS = {
    UP: 'up',
    DOWN: 'down',
    LEFT: 'left',
    RIGHT: 'right'
}

export const initialState = {
    game_state: GAME_STATUSES.IN_PROGRESS,
    settings: {
        gridSize: {
            rowsCount: 6,
            columnCount: 6
        },
        googleJumpInterval: 2000,
        pointsToLose: 10,
        pointsToWin: 5,
    },
    positions: {
        google: {x: 1, y: 1},
        players: [{x: 2, y: 2}, {x: 3, y: 3}]
    },
    points: {google: 0, players: [0, 0]}
}

function App() {

    return (
        <>
            <div className="card">
                {initialState.game_state === GAME_STATUSES.SETTINGS
                    ? <div>
                        <Settings/>
                        <br/>
                        <Button name="Start game" callback={() => {
                        }}/>
                    </div>
                    : ''
                }
                {initialState.game_state === GAME_STATUSES.IN_PROGRESS
                    ? <div>
                        <Settings/>
                        <br/>
                        <ResultPanel/>
                        <br/>
                        <Grid/>
                    </div>
                    : ''
                }
            </div>
        </>
    )
}

export default App
