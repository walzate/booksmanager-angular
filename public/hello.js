angular.module('demo', [])
.controller('Hello', function($scope, $http, $log) {
    $scope.title = 'Hello at '+ new Date();

    listBooks = function(){
      $scope.books=[];
      $log.info('listing books');
      $http.get('http://localhost:8090/books').
          then(function(response) {
              $scope.books = response.data;
              $log.info('books after', $scope.books);
          });
    }

    listBooks();

    showEditor = function(book){
      $scope.showEdition = 'show';
    }

    $scope.showEditorPanel = function(){
      $scope.book = {
          "id": "",
          "isbn": "",
          "name": ""
      };
      showEditor();
    }

    hideEditor = function(book){
      $scope.showEdition = 'none';
    }

    hideEditor();

    $scope.saveBook = function(){
      $http.post('http://localhost:8090/books', $scope.book)
      .then( listBooks );
      hideEditor();
    }
    $scope.updateBook = function(book){
      $scope.book = book;
      showEditor();
    }

    $scope.deleteBook = function(book){
      $scope.book = book;
      hideEditor();
      $http.delete('http://localhost:8090/books/id='+book.id, $scope.book)
      .then(listBooks);
    }
});
