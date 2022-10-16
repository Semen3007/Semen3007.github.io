import React, {useEffect} from "react";
import CustomTabs from "./components/Tabs";
import store from "./store";
import {BrowserRouter} from "react-router-dom";


function App() {
    useEffect(() => {
        store.getItemsAsync(store.id)
    }, [])

    return (
        <BrowserRouter>
            <CustomTabs/>
        </BrowserRouter>
    );
}

export default App;