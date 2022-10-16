import React from 'react';

import style from './index.module.scss'
import RepairList from "../../components/RepairList";
import ItemCard from "../../components/ItemCard";
import {Route, Routes} from "react-router-dom";


const Task2 = () => (
    <div className={style.container}>
        <Routes>
            <Route path='/' element={<RepairList/>}/>
            <Route path=':id' element={<ItemCard/>}/>
        </Routes>
    </div>
);
export default Task2;