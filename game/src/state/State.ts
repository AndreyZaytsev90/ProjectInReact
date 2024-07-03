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


export function _getPlayerIndexByNumber(playerNumber: number) {
    const playerIndex = playerNumber - 1

    if (playerIndex < 0 || playerIndex > initialState.points.players.length - 1) {
        throw new Error("Incorrect player number")
    }

    return playerIndex;
}

export function getGooglePosition() {
    return {...initialState.positions.google}
}

export function getPlayerPosition(playerNumber: number) {
    const playerIndex = _getPlayerIndexByNumber(playerNumber);
    return {...initialState.positions.players[playerIndex]}
}

export function getPlayersPoints(playerNumber: number) {
    const playerIndex = _getPlayerIndexByNumber(playerNumber);
    return initialState.points.players[playerIndex]
}
export function getGooglePoints() {
    return initialState.points.google
}