import React from 'react';
import 'antd/dist/antd.min.css';
import {Avatar, List} from 'antd';
import store from "../../store";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

const onClickLink = (id) => {
    store.setStatus('initial')
    store.setId(id)
}
const RepairList = observer(() => (

    <List
        loading={store.status === 'initial'}
        itemLayout="horizontal"
        dataSource={store.itemsData}
        renderItem={(item) => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar
                        src="https://cdn-icons-png.flaticon.com/512/36/36384.png?w=740&t=st=1665780371~exp=1665780971~hmac=26dc5cc5a88921e41ef2655aae10b88a80bbdd1f9537bd4eb24b9bc3223d5d2b"/>}
                    title={<Link to={`/${item.id}`} onClick={() => onClickLink(item.id)}>{item.name}</Link>}
                />
                <div>{item.price} руб.</div>
            </List.Item>
        )}
    />
));
export default RepairList;