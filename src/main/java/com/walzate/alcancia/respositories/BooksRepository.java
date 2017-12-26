package com.walzate.alcancia.respositories;

import com.walzate.alcancia.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BooksRepository extends JpaRepository<Book, Integer> {
}
