import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RootObject} from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient) { }


getTopHeadLines()
{
  return this.http.get<RootObject>('https://api.thenewsapi.com/v1/news/all?api_token=ZB2VdrDVrFjGCAgs6kRfHjL4jdJLuKbK4OuJajbv&search=saneamiento&language=es&page=2')
}


}

