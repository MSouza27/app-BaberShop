import { Update } from './../../../../../node_modules/@angular/build/node_modules/vite/types/hmrPayload.d';
import { Injectable } from '@angular/core';
import { ICLientService } from './iclients.service';
import { Observable } from 'rxjs';
import { SaveClientRequest, SaveClientResponse, UpdateClientRequest, UpdateClientResponse, ListClientResponse, DatailClientResponse } from './client.models';
import { HttpClient } from '@angular/common/http';
import { envinronment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService implements ICLientService{

  private readonly basePath = envinronment.apiUrl

  constructor(private http: HttpClient) { }

  save(request: SaveClientRequest): Observable<SaveClientResponse> {
    return this.http.post<SaveClientResponse>(`${this.basePath}clients`, request)
  }
  update(id: number, request: UpdateClientRequest): Observable<UpdateClientResponse> {
    return this.http.put<UpdateClientResponse>(`${this.basePath}clients/${id}`, request)
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}clients${id}`)
  }
  list(): Observable<ListClientResponse[]> {
    return this.http.get<ListClientResponse[]>(`${this.basePath}clients`)
  }
  findById(id: number): Observable<DatailClientResponse> {
    return this.http.get<DatailClientResponse>(`${this.basePath}clients${id}`)
  }
}
