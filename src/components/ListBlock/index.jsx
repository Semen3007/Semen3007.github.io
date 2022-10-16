import React from "react";
import styles from './index.module.scss'

function ListBlock({header, options, text}) {

    return (
        <div className={styles.container}>
            <h2>{header}</h2>
            <ul>{options.map(value => <li key={value}>{value}</li>)}</ul>
            <p>{text}</p>

        </div>
    )
}

export default ListBlock