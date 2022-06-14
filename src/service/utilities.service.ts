import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() {
  }

  public objectToFormData(data: any = {}): FormData {
    const form_data = new FormData();
    for (let key in data) {
      if (Array.isArray(data[key])) {
        data[key].forEach((items: any) => {
            form_data.append(key + '[]', items);
        });
      } else if (data[key] instanceof Object && !(data[key] instanceof File)) {
        form_data.append(key, JSON.stringify(data[key]));
      } else {
        form_data.append(key, data[key]);
      }
    }
    return form_data;
  }

}
