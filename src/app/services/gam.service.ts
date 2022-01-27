import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gam } from '../models/gam.model';

@Injectable({
    providedIn: 'root'
  })
  export class GamService{
    constructor(private http:HttpClient) { }
    public readonly apiUrl:string="http://localhost:8014/apigam";

    
getAllGam(): Observable<Gam[]>{
    return this.http.get<Gam[]>(this.apiUrl);
  }

  getGamById(id: number): Observable<Gam>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Gam>(url);
  }

  updateGam(id: number, gam: Gam): Observable<Gam>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Gam>(url, gam);
  }

  addGam(gam: Gam): Observable<Gam>{
    return this.http.post<Gam>(this.apiUrl, gam);
  }

  deleteGam(id: number): Observable<{}>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);

  }
  }