import s from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [s.myModal]

    if (visible) {
        rootClasses.push(s.active)
    }

    const closeModal = () => setVisible(false)

    return (
        <div className={rootClasses.join(' ')} onClick={closeModal}>
            <div className={s.MyModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}
export default MyModal;