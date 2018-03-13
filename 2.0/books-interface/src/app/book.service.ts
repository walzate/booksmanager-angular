import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from './book';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BookService {


  private apiUrl = 'http://localhost:8090/books';  // URL to web api

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getBooks(): Observable<Book[]> {
    // Todo: send the message _after_ fetching the books
    this.messageService.add('BookService: fetched books');
    console.log('BookService: fetched books');
    return this.http.get<Book[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError('getBooks', []))
    );    
  }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add('HeroService: ' + message);
}

/** POST: add a new book to the server */
add (book: Book): Observable<Book> {
  return this.http.post<Book>(this.apiUrl, book, this.httpOptions).pipe(
    tap((hero: Book) => this.log(`added book w/ id=${book.isbn}`)),
    catchError(this.handleError<Book>('addBook'))
  );
}

/** DELETE: delete the hero from the server */
deleteHero (book: Book | number): Observable<Book> {
  const id = typeof book === 'number' ? book : book.isbn;
  const url = `${this.apiUrl}/${id}`;

  return this.http.delete<Book>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Book>('deleteHero'))
  );
}

}
