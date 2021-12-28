import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur.model';

@Injectable({
    providedIn: 'root'
  })
  export class UtlisateurService{
    constructor(private http:HttpClient) { }
    public readonly apiUrl:string="http://localhost:8013/apiutilisateur";

    
getAllUtilisateur(): Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(this.apiUrl);
  }

  getUtilisateurById(id: number): Observable<Utilisateur>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Utilisateur>(url);
  }

  updateUtilisateur(id: number, utilisateur: Utilisateur): Observable<Utilisateur>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Utilisateur>(url, utilisateur);
  }

  addUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.http.post<Utilisateur>(this.apiUrl, utilisateur);
  }

  deleteUtilisateur(id: number): Observable<{}>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);

  }
  }