import { Injectable } from '@angular/core';
import { ACore } from '../model/a-core';

@Injectable({
    providedIn: 'root'
})
export class AliceAutoService {

    updateFuncList: Function[][] = [];

    constructor() { }
}
