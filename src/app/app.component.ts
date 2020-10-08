import { Component, OnInit } from '@angular/core';
import { AttrTypeIdList, AttrTypeName } from './model/attr-type';
import { AttrTypeId } from './model/attr-type-id.enum';
import { Buff } from './model/buff';
import { Character } from './model/character';
import { CharacterModels } from './model/character_models';
import { AppService } from './app.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

    constructor(
        public service: AppService
    ) { }

    public ngOnInit(): void {

    }


}
