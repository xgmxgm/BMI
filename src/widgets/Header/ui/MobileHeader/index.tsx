import styles from './MobileHeader.module.scss'

export const MobileHeader = () => {
    return (
        <div className={styles.MobileHeader}>
            <div className={styles.MobileHeader__Content}>
                <h2 className={styles.Title}>BMI by <span className={styles.Author}>XGM</span></h2>
            </div>
        </div>
    )
}