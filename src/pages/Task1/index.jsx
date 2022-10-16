import React from "react";
import ListBlock from "../../components/ListBlock";
import styles from './index.module.scss'
import db from '../../assets/db/Task1db.json'


function Task1() {
    return (
        <div className={styles.container}>{db.map((i) =>
            <ListBlock key={i.header} header={i.header} options={i.options} text={i.text}/>
        )}</div>
    )
}

export default Task1