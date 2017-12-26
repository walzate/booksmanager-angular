package com.walzate.alcancia.controller;

import com.walzate.alcancia.model.Book;
import com.walzate.alcancia.respositories.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookController {

    @Autowired
    BooksRepository booksRepository;

    @GetMapping("/books")
    public List<Book> getBooks(){
        return booksRepository.findAll();
    }

    @PostMapping("/books")
    public void insertBook(@RequestBody Book book){
        book.getId();
        booksRepository.save(book);
    }

    @GetMapping("/books/id={id}")
    @ResponseBody
    public Book findBookById(@PathVariable Integer id){
        return booksRepository.findOne(id);
    }

    @DeleteMapping("/books/id={id}")
    public void deleteBookById(@PathVariable Integer id){
        booksRepository.delete(id);
    }

    @PutMapping("/books")
    public void updateBook(@RequestBody Book book){
        Book foundBook = booksRepository.findOne(book.getId());
        foundBook.setIsbn(book.getIsbn());
        foundBook.setName(book.getName());
        booksRepository.save(foundBook);
    }


}
