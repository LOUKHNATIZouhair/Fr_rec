import { Personnemorale} from "./personnemorale";
export class Mandataire {

    public nom!:string;
    public prenom!:string;
    public nationalite!:string;
    public cin!:string;
    public endDateCin!:Date;
    public personneMorale!:Personnemorale;
}
