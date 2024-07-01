import './App.css'
import {Settings} from "./components/Settings/Settings";

export const GAME_STATUSES = {
    SETTINGS: 'settings',
    IN_PROGRESS: 'in_progress',
    WIN: 'win',
    LOSE: 'lose'
}

function App() {

    const initialState = {
        game_state: GAME_STATUSES.SETTINGS,
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
            google: {
                x: 1,
                y: 1
            },
            players: [{
                x: 2,
                y: 2
            }, {
                x: 3,
                y: 3
            }]
        },
        points: {
            google: 0,
            players: [0, 0]
        }
    }



    return (
        <>
            <div className="card">
                <Settings/>
            </div>
        </>
    )
}

export default App
