import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// rxjs
import {Observable, of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// this.project
import { MessageService } from '../shared/services/message.service';
import { environment } from 'src/environments/environment';
import { ITodoList } from '../models/todo-list';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private url: string ;

  constructor(private http: HttpClient, private messageService: MessageService) { 
    this.url = environment.SERVICE_IP;
  }

    /** Log a HeroService message with the MessageService */
  private log( message: string) {
    this.messageService.add(`TodoList Service: ${message}`);
  }

    /** GET heroes from the server */
  getTodoList(): Observable<ITodoList[]> {
    console.log(this.url);
    return this.http.get<ITodoList[]>(this.url)
    .pipe(tap( _ => this.log(`fetched todo list ${_}`)),
    catchError(this.handleError<ITodoList[]>('getTodoList method', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
