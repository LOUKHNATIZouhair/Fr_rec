import {Client} from "./client";

export class Personnephysique extends Client {


  public nom!: string;
  public prenom!: string;
  public typeIdentite!: string;
  public numeroIdentite!: string;
  public dateNaissance!: string;
  situationFam!: string;
  salaire!: number;
  startDateCin!: Date;
  endDateCin!: Date;
  document!: any;
}
