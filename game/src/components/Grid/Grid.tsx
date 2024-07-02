import {initialState} from "../../App";
import {Cell} from "./Cell/Cell";
import styles from './Grid.module.css';

export const Grid = () => {

    const {rowsCount, columnCount} = initialState.settings.gridSize;

    // Инициализируем массивы для строк и столбцов
    const rows = [...Array(rowsCount)];
    const cols = [...Array(columnCount)];

    return (
        <div className={styles.grid}>
            {rows.map((i) => (
                <div key={i} className={styles.gridRow}>
                    {cols.map((j) => {
                        return <Cell key={j}/>;
                    })}
                </div>
            ))}
        </div>
    );
};