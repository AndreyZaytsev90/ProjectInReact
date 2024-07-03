
import {Settings} from "../Settings/Settings";
import {Button} from "../Button/Button";
import {ResultPanel} from "../ResultPanel/ResultPanel";
import {Grid} from "../Grid/Grid";
import {Win} from "../Win/Win";
import {Lose} from "../Lose/Lose";
import {GAME_STATUSES, initialState} from "../../state/State";

export const RenderGame = () => {
    switch (initialState.game_state) {
        case GAME_STATUSES.SETTINGS:
            return (
                <>
                    <Settings/>
                    <br/>
                    <Button name="Start game" callback={() => {
                    }}/>
                </>
            )
        case GAME_STATUSES.IN_PROGRESS:
            return (
                <>
                    <Settings/>
                    <br/>
                    <ResultPanel/>
                    <br/>
                    <Grid/>
                </>
            )
        case GAME_STATUSES.WIN:
            return (
                <>
                    <Win/>
                </>
            )
        case GAME_STATUSES.LOSE:
            return (
                <>
                    <Lose/>
                </>
            )
    }

};