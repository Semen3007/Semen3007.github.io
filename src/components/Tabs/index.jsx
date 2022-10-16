import React from 'react';
import 'antd/dist/antd.min.css';
import './index.module.scss';
import {Tabs} from 'antd';
import Task1 from "../../pages/Task1";
import Task2 from "../../pages/Task2";

const items = [
    {
        label: `Task 1`,
        key: '1',
        children: <Task1/>,
    },
    {
        label: `Task 2`,
        key: '2',
        children: <Task2/>,
    }
]


const CustomTabs = () => (

    <Tabs
        defaultActiveKey="2"
        centered
        items={items}
    />
);
export default CustomTabs;