import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';
import {List} from '../models/list.interface';

// TODO: change storage service as pantry throws error on successful update

const API_URL = 'https://getpantry.cloud/apiv1/pantry/71a87c32-079b-4dc2-82d7-40dae1160f34/basket/';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};

interface Error {
    status?: number;
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    handleSaveList(listData, listToSave){
        this.getAllBaskets().subscribe(
            res => {
                if (res.hasOwnProperty(listData.listName)){
                    this.updateBasket(listData.listName, listToSave)
                        .subscribe(
                            (result) => console.log(result),
                            (err: Error) => {
                                if (err.status === 200) {
                                    console.log('list has been saved');
                                } else {
                                    console.log(err);
                                }
                            },
                        );
                } else {
                    const list = {};
                    list[listData.listName] = {
                        isPrivate: listData.isPrivate,
                        password: listData.password
                    };
                    this.updateAllBaskets(list)
                        .subscribe(
                            (result) => console.log(result),
                            (err: Error) => {
                                if (err.status === 200) {
                                    console.log('allBaskets updated');
                                } else {
                                    console.log(err);
                                }
                            },
                        );
                    this.updateBasket(listData.listName, listToSave)
                        .subscribe(
                            (result) => console.log(result),
                            (err: Error) => {
                                if (err.status === 200) {
                                    console.log('list has been saved');
                                } else {
                                    console.log(err);
                                }
                            },
                        );
                }
            }
        );
    }

    updateBasket(list, contents){
        return this.http.post(`${API_URL}${list}`, contents, httpOptions);
    }

    getBasket(name){
        return this.http.get(`${API_URL}${name}`);
    }

    getAllBaskets(){
        return this.http.get(`${API_URL}allBaskets`);
    }
    updateAllBaskets(newList){
        return this.http.put(`${API_URL}allBaskets`, newList, httpOptions);
    }
}
