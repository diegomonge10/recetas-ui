import { Injectable} from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Receta } from '../model/receta.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RecetaService {
    private httpOptions: any;

    private basePath = '/api/v1/' + 'receta';

    constructor(private http: HttpClient) {
        //Http Headers Options
        this.httpOptions = {
            headers : new HttpHeaders(
                {'Content-Type': 'application/json'}
            )
        }
    }

    recetaList() {
      return this.http.get(this.basePath, this.httpOptions);
    }


    add(receta: Receta) {
      return this.http.post(this.basePath, receta, this.httpOptions);
    }

    edit(receta: Receta) {
      return this.http.put(this.basePath + '/' + receta.id, receta, this.httpOptions);
    }

    delete(receta: Receta) {
        return this.http.delete(this.basePath+ '/' + receta.id, this.httpOptions);
    }
}
