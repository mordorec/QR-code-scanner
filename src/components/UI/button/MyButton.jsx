import s from './MyButton.module.css'

const MyButton = ({title, onClick}) => {
    return (
        <button type="button" className={s.button} onClick={onClick}>
            {title}
        </button>
    );
}

export default MyButton;