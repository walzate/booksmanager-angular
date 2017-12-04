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
        booksRepository.save(book);
    }

    @GetMapping("/books/{id}")
    @ResponseBody
    public Book insertBook(@PathVariable String id){
        return booksRepository.findOne(id);
    }


}
