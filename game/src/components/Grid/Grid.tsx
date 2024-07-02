import {initialState} from "../../App";
import {Cell} from "./Cell/Cell";
import styles from './Grid.module.css';
import { v4 as uuid } from 'uuid';

export const Grid = () => {

    const {rowsCount, columnCount} = initialState.settings.gridSize;

    // Инициализируем массивы для строк и столбцов
    const rows = [...Array(rowsCount)];
    const cols = [...Array(columnCount)];

    return (
        <div className={styles.grid}>
            {rows.map((y) => (
                <div key={uuid()} className={styles.gridRow}>
                    {cols.map((x) => {
                        return <Cell x={x} y={y} key={uuid()}/>;
                    })}
                </div>
            ))}
        </div>
    );
};