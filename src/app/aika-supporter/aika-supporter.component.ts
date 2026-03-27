import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-aika-supporter',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
    ],
    templateUrl: './aika-supporter.component.html',
    styleUrl: './aika-supporter.component.scss'
})
export class AikaSupporterComponent {

}
