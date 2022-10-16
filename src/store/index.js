import {runInAction, makeAutoObservable} from 'mobx';
import ServerRequest from "../request";


class Store {
    constructor() {
        this.serverRequest = new ServerRequest();
        makeAutoObservable(this)
    }

    itemsData = [];
    itemData = [];
    status = "initial";
    id = '';

    setStatus = (string) => {
        this.status = string
    }

    setId = (string) => {
        this.id = string
    }

    getItemsAsync = async (id) => {
        try {
            const data = await this.serverRequest.get(id)
            runInAction(() => {
                this.status = "success"
                if (id.length) {
                    this.itemData = data;
                    return
                }
                this.itemsData = data;
            });
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
    };


}


export default new Store();