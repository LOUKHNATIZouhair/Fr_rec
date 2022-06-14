import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticate = false;
  profil!:String;
  url!:String;
  first_name!:string;
  last_name!:string;

  constructor(){
    
  }

  getFirst_name() : string {
    return localStorage.getItem("name")!;
  }

  getProfil(): string {
    return localStorage.getItem("profil")!;
  }

  login(user: string, password: string): boolean {

    if (user === 'gestionnaire' && password === 'gestionnaire') {
      this.isAuthenticate = true;
      this.profil = "ADMIN";
      this.url = "/admin/gestionnaire";
      this.first_name = "Hanae";
      this.last_name = "Sabile";
      localStorage.setItem("name","Hanae Sabile");
      localStorage.setItem("profil","ADMIN");
      return this.isAuthenticate;
    }
    if (user === 'responsable' && password === 'responsable') {
      this.isAuthenticate = true;
      this.profil = "MANAGER";
      this.url = "/admin/responsable";
      this.first_name = "Mohammed";
      this.last_name = "Sefrioui";
      localStorage.setItem("name","Mohammed Sefrioui");
      localStorage.setItem("profil","MANAGER");
      return this.isAuthenticate;
    }
    if (user === 'directeur' && password === 'directeur') {
      this.isAuthenticate = true;
      this.profil = "DIRECTOR";
      this.url = "/admin/directeur";
      this.first_name = "Moulay Ahmed";
      this.last_name = "Benjelloun";
      localStorage.setItem("name","Moulay Ahmed");
      localStorage.setItem("profil","DIRECTOR");
      return this.isAuthenticate;
    }
    this.isAuthenticate = false;
    return this.isAuthenticate;
  }
}
