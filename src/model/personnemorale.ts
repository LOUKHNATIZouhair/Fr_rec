import { Client } from "./client";
import { Mandataire } from "./mandataire";

export class Personnemorale extends Client {
 public raisonSocial!:string;
public sousActivite!:string;
public fax!:string;
public adresse!:string;
public registreCommerce!:string;
public localiteRc!:string;
public nbreEmployee!:number;
public chiffreAffaire!:number;
public listmandataire!:Mandataire[];

}
