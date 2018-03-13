import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  book: Book;
  books: Book[];  

  constructor(private bookService: BookService) { }

  ngOnInit() {    
    this.getBooks();
  }

  getBooks(): void {    
    this.bookService.getBooks().subscribe((result: any) => {
      console.log ( result._embedded.books);
      this.books= result._embedded.books;
    });
  }

  add(isbn: number, name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.book = { isbn, name };
    this.bookService.add( this.book)
      .subscribe(hero => {
        this.bookService.add(hero);
      });
    this.books.push(this.book);
  }

  delete(book: Book): void {
    this.books = this.books.filter(h => h !== book);
    this.bookService.deleteHero(book).subscribe();
  }

}
