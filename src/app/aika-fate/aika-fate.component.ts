import { Component } from '@angular/core';

class Pull {
    cost: number = 0;
    expAdd: number = 0;
    type: number = 0; // 1: 克拉, 2:角色票
    count: number = 0;
}

class Action {
    date: Date = new Date();
}

class Result {

}


@Component({
    selector: 'app-aika-fate',
    standalone: true,
    imports: [],
    templateUrl: './aika-fate.component.html',
    styleUrl: './aika-fate.component.scss'
})
export class AikaFateComponent {

}
