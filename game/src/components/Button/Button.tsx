interface buttonPropsType {
    name: string,
    callback: () => void
}

export const Button = ({name, callback}: buttonPropsType) => {

    const onClickHandler = () => {
        callback()
    }

    return (
        <button onClick={onClickHandler}>{name}</button>
    );
};