import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user_interface';
import { Observable } from 'rxjs';
import { Unit } from '../models/unit_interface';
import { Generation } from '../models/generation_interface';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  constructor(private http: HttpClient) {}

  checkUser(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  getUnitToEdit(): Observable<Object> {
    return this.http.get('http://localhost:3000/unitToEdit');
  }

  saveUnitToEdit(unitId: number | undefined): Observable<Object> {
    return this.http.put('http://localhost:3000/unitToEdit', { value: unitId });
  }

  getUnits(): Observable<Unit[]> {
    return this.http.get<Unit[]>('http://localhost:3000/unidades');
  }

  getUnitWithId(id: number): Observable<Unit> {
    return this.http.get<Unit>(`http://localhost:3000/unidades/${id}`);
  }

  addNewUnit(newUnit: Unit): Observable<Unit> {
    return this.http.post<Unit>('http://localhost:3000/unidades', newUnit);
  }

  updateUnit(id: number, unit: Unit): Observable<Unit> {
    return this.http.put<Unit>(`http://localhost:3000/unidades/${id}`, unit);
  }

  deleteUnit(unitID: number | undefined): Observable<Unit> {
    return this.http.delete<Unit>(`http://localhost:3000/unidades/${unitID}`);
  }

  getGenerations(): Observable<Generation[]> {
    return this.http.get<Generation[]>('http://localhost:3000/geracoes');
  }

  registerGeneration(generation: Generation): Observable<Generation> {
    return this.http.post<Generation>(
      'http://localhost:3000/geracoes',
      generation
    );
  }
}
