import { Observable } from "rxjs";
export class AAction {
    id: number;
    name: string;

    action: (data: any) => Observable<any>;
}