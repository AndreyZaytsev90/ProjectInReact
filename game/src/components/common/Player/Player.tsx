import styles from "./Player.module.css";

interface PlayerPropsType {
    playerNumber: number
}

export const Player = ({playerNumber}: PlayerPropsType) => {
    return (
        <img className={styles.player} src={`../../../../public/images/player${playerNumber}.png`} alt={`Player - ${playerNumber}`}/>
    );
};