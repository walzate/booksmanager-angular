package com.walzate.alcancia.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Book {

    @Id
    @GeneratedValue
    private Integer id;
    private String isbn;
    private String name;

    public Integer getId(){
      return id;
    }

    public void setId(Integer id){
      this.id = id;
    }

    public String getIsbn(){
      return isbn;
    }

    public void setIsbn(String isbn){
      this.isbn = isbn;
    }

    public String getName(){
      return name;
    }

    public void setName(String name){
      this.name = name;
    }

}
