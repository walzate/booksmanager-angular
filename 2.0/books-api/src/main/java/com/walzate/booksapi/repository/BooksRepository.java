package com.walzate.booksapi.repository;

import com.walzate.booksapi.model.Book;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "books", path = "books")
@CrossOrigin
public interface BooksRepository extends PagingAndSortingRepository<Book, Integer> {
    List<Book> findByName(@Param("name") String name);
}
