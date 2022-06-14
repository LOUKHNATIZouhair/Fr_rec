import { Produit } from "./produit";
import { Piecejustificatif} from "./piecejustificatif";
import { Statusclient } from "../enum/statusclient";

export class Client {
    public numClient!:string;
    public nom!:string;
    public email!:string;
    public fullName!:string;
    public gsm!:string;
    public dateCreation!:string;
    public qualite!:string;
    public dateUpdate!:string;
    public status!:Statusclient;
    public listPiecJointe!:Piecejustificatif[];
    public listProduits!:Produit[];
    public listCodeProduits!:String[];
}
