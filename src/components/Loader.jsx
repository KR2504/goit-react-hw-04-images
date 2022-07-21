import { Bars } from  'react-loader-spinner'
import React from 'react';
import styles from "../styles.css/styles.module.css";

export default function Loader() {
    return (
        <div className={styles.Loader}>
                <Bars
                    height="80"
                    width="80"
                    color='#00BFFF'
                    ariaLabel='loading'
                />
            </div>
    )
}




