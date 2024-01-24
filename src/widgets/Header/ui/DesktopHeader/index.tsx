import styles from './DesktopHeader.module.scss'

export const DesktopHeader = () => {
    return (
        <div className={styles.DesktopHeader}>
            <div className={styles.DesktopHeader__Content}>
                <h2 className={styles.Title}>BMI by <span className={styles.Author}>XGM</span></h2>
            </div>
        </div>
    )
}