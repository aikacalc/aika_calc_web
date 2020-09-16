import { Observable } from "rxjs";
export class AAction {
    name: string;

    action: (data: any) => Observable<any>;
}