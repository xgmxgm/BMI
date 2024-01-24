'use client'

import { useDispatch } from 'react-redux'

import styles from './Range.module.scss'

interface IProps {
    ReduxValue: number,
    ReduxDispatch: any,
    min: number,
    max: number,
    text?: string,
}

export const Range = ({ max, min, text, ReduxValue, ReduxDispatch }: IProps) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.Range}>
            <div className={styles.Range__Content}>
                <div className={styles.Content__Up}>
                    <h3 className={styles.Title}>{text}</h3>
                    <input
                        className={styles.Range__Number}
                        type="text"
                        value={ReduxValue}
                        onChange={(e) => dispatch(ReduxDispatch(Number(e.target.value) > max ? max : Number(e.target.value)))}
                    />
                </div>
                <div className={styles.Content__Down}>
                    <h3>{min}</h3>
                    <input
                        className={styles.Input__Range}
                        type="range"
                        min={min}
                        max={max}
                        step={0.1}
                        value={ReduxValue}
                        onChange={(e) => dispatch(ReduxDispatch(Number(e.target.value)))}
                    />
                    <h3>{max}</h3>
                </div>
            </div>
        </div>
    )
}