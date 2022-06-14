import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Personnephysique } from 'src/model/personnephysique';
import { Personnemorale } from 'src/model/personnemorale';
import { Client } from 'src/model/client';
import {UtilitiesService} from "./utilities.service";

@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {
  constructor(private http: HttpClient, private utilitiesService: UtilitiesService) {
  }
  baseUrl: string = 'http://localhost:8080/demandes';
  httpOptions = { headers: new HttpHeaders( {
    'Content-type': 'application/json'
    })
};
  createPersPhysique(pers: Personnephysique) {
    const formData = this.utilitiesService.objectToFormData(pers);
    return this.http.post(this.baseUrl+"/createPersonnePhysique", formData);
  }

  createPersMorale(pers: Personnemorale) {
    return this.http.post(this.baseUrl+"/createPersonneMorale", pers);
  }

  validateDemande(pers: Client) {
    return this.http.post(this.baseUrl+"/validateDemande", pers);
  }

  getPersMByNum(num: string) {
    return this.http.get<Personnemorale>(this.baseUrl + "/persM/" + num);
  }

  getPersPByNum(num: string) {
    return this.http.get<Personnephysique>(this.baseUrl + /persP/ + num);
  }

  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }

}
