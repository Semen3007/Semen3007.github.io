import React from "react";
import ListBlock from "../../components/ListBlock";
import styles from './index.module.scss'
import db from '../../assets/db/Task1db.json'


function Task1() {
    return (
        <div className={styles.container}>{db.map((item) => <ListBlock key={item.header} {...item}/>)}</div>
    )
}

export default Task1