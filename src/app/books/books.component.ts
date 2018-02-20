import { Component, OnInit } from '@angular/core';
import { Book } from '../books/book';
import { BOOKS } from '../books/mock-books-service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  /*
  book: Book = {
    id: 1,
    title: 'Ready Player One',
    author: 'Ernest Cline'
  };
  */
  books = BOOKS;

  constructor() { }

  ngOnInit() {
  }

}
