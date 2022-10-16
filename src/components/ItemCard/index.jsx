import React, {useEffect} from "react";
import store from "../../store";
import {observer} from "mobx-react-lite";
import {Spin, Card} from "antd";
import ErrorNotification from "../ErrorNotification";
import styles from "./index.module.scss"

const {Meta} = Card;

const ItemCard = observer(() => {

    let id = window.location.pathname.slice(1)

    useEffect(() => {
        store.setId(id)
        store.getItemsAsync(id)
    }, [])

    return (<div className={styles.container}>
        {store.status === "initial" ? <div><Spin tip='Loading...'/></div> : store.status === 'error' ?
            <ErrorNotification/> :
            <Card
                style={{
                    width: 500,
                }}
                cover={
                    <img
                        alt="example"
                        src="https://cdn-icons-png.flaticon.com/512/36/36384.png?w=740&t=st=1665780371~exp=1665780971~hmac=26dc5cc5a88921e41ef2655aae10b88a80bbdd1f9537bd4eb24b9bc3223d5d2b"
                    />
                }
                

            >
                <Meta
                    title={store.itemData.name}
                    description={`${store.itemData.content}  ${store.itemData.price} руб.`}
                />
            </Card>}
    </div>)
})
export default ItemCard;


