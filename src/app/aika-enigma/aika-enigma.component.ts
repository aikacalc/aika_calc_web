import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-aika-enigma',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
    ],
    templateUrl: './aika-enigma.component.html',
    styleUrl: './aika-enigma.component.scss'
})
export class AikaEnigmaComponent {

}
