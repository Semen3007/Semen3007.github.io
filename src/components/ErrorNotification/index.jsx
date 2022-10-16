import React from 'react';
import 'antd/dist/antd.min.css';
import {Button, Result} from 'antd';
import store from "../../store";

const ErrorNotification = () => (
    <Result
        status="500"
        title="Произоша ошибка"
        subTitle="К сожалению не удалось выполнить ваш запрос"
        extra={<Button type="primary" onClick={() => {
            store.getItemsAsync(store.id)
        }}>Попробовать снова</Button>}
    />
);
export default ErrorNotification;