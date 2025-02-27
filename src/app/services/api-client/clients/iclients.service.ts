import { Observable } from "rxjs";
import { ListClientResponse, SaveClientRequest, SaveClientResponse, UpdateClientRequest, UpdateClientResponse, DetailClientResponse } from "./client.models";

export interface ICLientService{

  save(request: SaveClientRequest): Observable<SaveClientResponse>

  update(id: number, request: UpdateClientRequest): Observable<UpdateClientResponse>

  delete(id: number): Observable<void>

  list(): Observable<ListClientResponse[]>

  findById(id: number): Observable<DetailClientResponse>
}
