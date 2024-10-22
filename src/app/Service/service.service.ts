import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Proyecto } from "../modelo/proyecto";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  Url = "http://localhost:7575/api/list/race/Saiyan/affiliation/Z Fighter";
  getProyecto() {
    return this.http.get<Proyecto[]>(this.Url);
  }
}
